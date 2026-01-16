import React, { useState, useEffect } from 'react';
import { Menu, BookOpen, Clock, Brain, AlertTriangle, Languages, BookCheck, Home, Trash2 } from 'lucide-react';
import ChapterSidebar from './components/ChapterSidebar';
import MarkdownRenderer from './components/MarkdownRenderer';
import QuizModal from './components/QuizModal';
import AIChat from './components/AIChat';
import HomePage from './components/HomePage';
import UltimateAIPage from './components/UltimateAIPage';
import { generateTopicNotes, generateQuizForTopic } from './services/geminiService';
import { Chapter, SubTopic, QuizQuestion, Language, Subject } from './types';
import { getSyllabus } from './constants';
import { getTranslation } from './utils/translations';

const CACHE_KEY = 'hsc_notebook_content_cache';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'content' | 'ultimate_ai'>('home');
  const [language, setLanguage] = useState<Language>('bn');
  const [subject, setSubject] = useState<Subject>('ict');
  const [syllabus, setSyllabus] = useState<Chapter[]>(getSyllabus('ict', 'bn'));
  
  // Initialize State based on syllabus
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);
  const [activeSubTopic, setActiveSubTopic] = useState<SubTopic | null>(null);

  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  
  // Quiz State
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [isQuizLoading, setIsQuizLoading] = useState(false);

  // Content Cache (Initialize from LocalStorage)
  const [contentCache, setContentCache] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(CACHE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.warn("Failed to load cache", e);
      return {};
    }
  });

  // Save cache to LocalStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(contentCache));
    } catch (e) {
      console.warn("Cache storage limit exceeded", e);
    }
  }, [contentCache]);

  const t = getTranslation(language);

  // Handle Subject or Language Change
  useEffect(() => {
    const newSyllabus = getSyllabus(subject, language);
    setSyllabus(newSyllabus);
    
    // Always reset to first chapter/topic when subject changes
    // But try to preserve index when only language changes
    
    let newChapter = newSyllabus[0];
    let newSubTopic = newSyllabus[0].subtopics[0];

    if (activeChapter && activeSubTopic) {
      const chapterIdx = syllabus.findIndex(c => c.id === activeChapter.id);
      if (chapterIdx !== -1 && chapterIdx < newSyllabus.length) {
         newChapter = newSyllabus[chapterIdx];
         const subTopicIdx = syllabus[chapterIdx].subtopics.findIndex(s => s.id === activeSubTopic.id);
         if (subTopicIdx !== -1 && subTopicIdx < newChapter.subtopics.length) {
            newSubTopic = newChapter.subtopics[subTopicIdx];
         }
      } 
    }
    
    setActiveChapter(newChapter);
    setActiveSubTopic(newSubTopic);
  }, [language, subject]); 

  // Load Content when active topic changes
  useEffect(() => {
    if (view === 'content' && activeChapter && activeSubTopic) {
      loadContent(activeChapter, activeSubTopic);
    }
  }, [activeChapter, activeSubTopic, language, subject, view]);

  const loadContent = async (chapter: Chapter, subTopic: SubTopic) => {
    const cacheKey = `${subject}-${language}-${chapter.id}-${subTopic.id}`;
    
    // Check Cache First
    if (contentCache[cacheKey]) {
      setContent(contentCache[cacheKey]);
      return;
    }

    setIsLoading(true);
    
    try {
      const generatedNotes = await generateTopicNotes(subject, chapter.title, subTopic.title, language);
      setContent(generatedNotes);
      // Update Cache
      setContentCache(prev => ({ ...prev, [cacheKey]: generatedNotes }));
    } catch (error) {
      setContent(`# ${t.errorHeader}\n${t.failedToLoad}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartQuiz = async () => {
    if (!activeSubTopic) return;
    setIsQuizOpen(true);
    
    setIsQuizLoading(true);
    const questions = await generateQuizForTopic(subject, activeSubTopic.title, language);
    setQuizQuestions(questions);
    setIsQuizLoading(false);
  };

  const handleSelectSubject = (selectedSubject: Subject) => {
    setSubject(selectedSubject);
    setView('content');
  };

  const clearCache = () => {
    if (confirm("Are you sure you want to delete all saved notes? You will need to regenerate them.")) {
      setContentCache({});
      localStorage.removeItem(CACHE_KEY);
    }
  };

  if (view === 'ultimate_ai') {
    return <UltimateAIPage onBack={() => setView('home')} />;
  }

  if (view === 'home') {
    return (
      <HomePage 
        onSelectSubject={handleSelectSubject}
        language={language}
        setLanguage={setLanguage}
        onOpenUltimateAI={() => setView('ultimate_ai')}
      />
    );
  }

  return (
    <div className={`flex h-[100dvh] bg-slate-50 overflow-hidden ${language === 'bn' ? 'font-[Hind_Siliguri]' : 'font-sans'}`}>
      {/* Sidebar */}
      <ChapterSidebar
        activeChapterId={activeChapter?.id || null}
        activeSubTopicId={activeSubTopic?.id || null}
        onSelectTopic={(chapter, subTopic) => {
          setActiveChapter(chapter);
          setActiveSubTopic(subTopic);
        }}
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        language={language}
        syllabus={syllabus}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 h-14 md:h-16 flex items-center justify-between px-3 md:px-8 shrink-0 z-10">
          <div className="flex items-center gap-2 md:gap-3 overflow-hidden">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-md text-slate-600 -ml-2 touch-manipulation"
            >
              <Menu size={20} />
            </button>
            
            {/* Home Button */}
            <button 
              onClick={() => setView('home')}
              className="p-2 hover:bg-slate-100 rounded-md text-slate-600 mr-1 touch-manipulation"
              title={t.backToHome}
            >
              <Home size={20} />
            </button>

            <div className="flex flex-col overflow-hidden">
              <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest truncate hidden sm:block ${subject === 'ultimate_ai' ? 'text-indigo-600' : 'text-teal-600'}`}>
                 {t.chapter} {activeChapter?.number}: {activeChapter?.title}
              </span>
              <h2 className="font-bold text-slate-800 text-sm md:text-xl truncate">
                {activeSubTopic?.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Subject Selector (Desktop) */}
            <div className="relative group hidden md:block">
               <button className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-colors border ${subject === 'ultimate_ai' ? 'text-indigo-600 bg-indigo-50 border-indigo-200 hover:bg-indigo-100' : 'text-slate-600 bg-slate-50 border-slate-200 hover:text-teal-600 hover:bg-slate-100'}`}>
                  <BookCheck size={18} />
                  <span className="truncate max-w-[100px] lg:max-w-none">{t.subjects[subject]}</span>
               </button>
               {/* Dropdown */}
               <div className="absolute right-0 top-full mt-1 bg-white border border-slate-100 shadow-xl rounded-lg w-64 hidden group-hover:block z-50 max-h-[80vh] overflow-y-auto">
                  {(Object.keys(t.subjects) as Subject[]).map((subj) => (
                    <button key={subj} onClick={() => setSubject(subj)} className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 ${subject === subj ? 'text-teal-600 font-bold bg-teal-50' : 'text-slate-600'}`}>{t.subjects[subj]}</button>
                  ))}
               </div>
            </div>

            {/* Language Selector */}
            <div className="relative group">
               <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-teal-600 bg-slate-50 hover:bg-slate-100 px-2 py-1.5 md:px-3 md:py-2 rounded-lg transition-colors border border-slate-200 touch-manipulation">
                  <Languages size={18} />
                  <span className="hidden sm:inline">{language === 'bn' ? 'বাংলা' : 'English'}</span>
               </button>
               {/* Dropdown */}
               <div className="absolute right-0 top-full mt-1 bg-white border border-slate-100 shadow-xl rounded-lg w-32 hidden group-hover:block z-50">
                  <button onClick={() => setLanguage('bn')} className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 ${language === 'bn' ? 'text-teal-600 font-bold bg-teal-50' : 'text-slate-600'}`}>বাংলা</button>
                  <button onClick={() => setLanguage('en')} className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 ${language === 'en' ? 'text-teal-600 font-bold bg-teal-50' : 'text-slate-600'}`}>English</button>
               </div>
            </div>

            <button 
              onClick={handleStartQuiz}
              className="flex items-center gap-2 bg-teal-50 text-teal-700 hover:bg-teal-100 hover:text-teal-800 px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium text-sm transition-colors border border-teal-200 touch-manipulation"
            >
              <Brain size={18} />
              <span className="hidden sm:inline">{t.practiceQuiz}</span>
            </button>
          </div>
        </header>

        {/* Mobile Subject Selector (Horizontal Scroll) */}
        <div className="md:hidden bg-white border-b border-slate-200 shadow-inner">
           <div className="flex gap-2 px-4 py-3 overflow-x-auto whitespace-nowrap scrollbar-hide no-scrollbar touch-pan-x">
             {(Object.keys(t.subjects) as Subject[]).map((subj) => (
               <button 
                 key={subj} 
                 onClick={() => setSubject(subj)} 
                 className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors touch-manipulation ${subject === subj ? 'bg-teal-600 text-white border-teal-600 shadow-md' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}
               >
                 {t.subjects[subj]}
               </button>
             ))}
           </div>
        </div>

        {/* Content Scroll Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 lg:p-12 scroll-smooth bg-slate-50">
          <div className="max-w-4xl mx-auto min-h-full">
            {isLoading ? (
              <div className="space-y-8 animate-pulse">
                <div className="h-8 bg-slate-200 rounded w-3/4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-slate-200 rounded"></div>
                  <div className="h-4 bg-slate-200 rounded"></div>
                  <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                </div>
                <div className="h-48 bg-slate-100 rounded-xl"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-slate-200 rounded"></div>
                  <div className="h-4 bg-slate-200 rounded"></div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-5 sm:p-10 rounded-2xl shadow-sm border border-slate-100 min-h-[500px]">
                {!process.env.API_KEY ? (
                   <div className="flex flex-col items-center justify-center text-center py-20 space-y-4">
                     <div className="bg-red-50 p-4 rounded-full text-red-500">
                        <AlertTriangle size={32} />
                     </div>
                     <h3 className="text-xl font-bold text-slate-800">{t.apiKeyMissing}</h3>
                     <p className="text-slate-500 max-w-md">{t.apiKeyMissingDesc}</p>
                   </div>
                ) : (
                  <>
                     <div className="mb-6 pb-6 border-b border-slate-100 flex flex-wrap gap-3 md:gap-4 items-center text-[10px] md:text-xs text-slate-400 font-mono uppercase tracking-widest">
                        <span className="flex items-center gap-1.5">
                           <BookOpen size={14} /> 
                           {t.generatedNote}
                        </span>
                        <span className="flex items-center gap-1.5">
                           <Clock size={14} /> 
                           {new Date().toLocaleDateString()}
                        </span>
                        <span className={`flex items-center gap-1.5 ml-auto font-bold px-2 py-1 rounded ${subject === 'ultimate_ai' ? 'text-indigo-600 bg-indigo-50' : 'text-teal-600 bg-teal-50'}`}>
                           {t.subjects[subject]}
                        </span>
                     </div>
                     <MarkdownRenderer content={content} />
                     
                     <div className="mt-8 md:mt-12 pt-8 border-t border-slate-100">
                        <div className="bg-teal-50 rounded-xl p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                           <div>
                              <h4 className="font-bold text-teal-900">{t.finishedReading}</h4>
                              <p className="text-xs md:text-sm text-teal-700">{t.testKnowledge}</p>
                           </div>
                           <button 
                              onClick={handleStartQuiz}
                              className="bg-teal-600 text-white px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-teal-200 hover:shadow-xl hover:bg-teal-700 transition-all whitespace-nowrap w-full sm:w-auto touch-manipulation"
                           >
                              {t.takeQuiz}
                           </button>
                        </div>
                     </div>
                  </>
                )}
              </div>
            )}
            
            {/* Clear Cache Helper (Optional, discreet) */}
            <div className="h-24 flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity">
               <button onClick={clearCache} className="flex items-center gap-2 text-xs text-slate-400 hover:text-red-500">
                  <Trash2 size={12} /> Clear Offline Data
               </button>
            </div>
          </div>
        </main>

        {/* Floating Chat */}
        <AIChat 
          currentContext={`${t.subjects[subject]}: ${activeChapter?.title} - ${activeSubTopic?.title}`} 
          language={language}
          subject={subject}
        />

        {/* Quiz Modal */}
        <QuizModal 
          isOpen={isQuizOpen}
          onClose={() => setIsQuizOpen(false)}
          title={activeSubTopic?.title || 'Quiz'}
          questions={quizQuestions}
          isLoading={isQuizLoading}
          language={language}
        />
      </div>
    </div>
  );
};

export default App;