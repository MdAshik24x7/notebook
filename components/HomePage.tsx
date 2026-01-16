import React from 'react';
import { Languages, BookOpen, Atom, Briefcase, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { Subject, Language } from '../types';
import { SUBJECT_CATEGORIES } from '../constants';
import { getTranslation } from '../utils/translations';

interface HomePageProps {
  onSelectSubject: (subject: Subject) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onOpenUltimateAI: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectSubject, language, setLanguage, onOpenUltimateAI }) => {
  const t = getTranslation(language);

  return (
    <div className={`h-[100dvh] overflow-y-auto w-full bg-slate-50 flex flex-col items-center ${language === 'bn' ? 'font-[Hind_Siliguri]' : 'font-sans'}`}>
      
      {/* Hero Section */}
      <div className="w-full bg-white border-b border-slate-200 pt-6 pb-8 md:pt-12 md:pb-12 px-4 text-center shadow-sm shrink-0">
        <div className="max-w-4xl mx-auto space-y-3 md:space-y-6">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-teal-700 text-xs md:text-sm font-medium mb-1 md:mb-2">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-500 rounded-full animate-pulse"></span>
            {t.subTitle}
          </div>
          <h1 className="text-2xl md:text-5xl font-bold text-slate-900 leading-tight">
            {t.appTitle}
          </h1>
          <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto px-4 md:px-0">
            {t.selectSubject}
          </p>

          {/* Ultimate AI Button */}
          <div className="mt-6">
            <button 
              onClick={onOpenUltimateAI}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-slate-200 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
              <span>Enter Ultimate AI Studio</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Language Toggle in Hero */}
          <div className="flex justify-center mt-4 md:mt-6">
            <div className="bg-slate-100 p-1 rounded-lg inline-flex">
              <button 
                onClick={() => setLanguage('bn')}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm font-medium transition-all ${language === 'bn' ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                বাংলা
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-md text-sm font-medium transition-all ${language === 'en' ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 py-6 md:py-12 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pb-8">
          {SUBJECT_CATEGORIES.map((category) => (
            <div key={category.id} className="flex flex-col gap-2 md:gap-4">
              <div className="flex items-center gap-3 mb-1 px-1">
                <div className="p-2 bg-white border border-slate-200 rounded-lg md:rounded-xl text-teal-600 shadow-sm">
                  <category.icon size={20} className="md:w-[22px] md:h-[22px]" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-slate-800">
                  {t.categories[category.id as keyof typeof t.categories]}
                </h3>
              </div>
              
              <div className="bg-white border border-slate-200 rounded-xl md:rounded-2xl shadow-sm overflow-hidden flex flex-col h-full">
                <div className="p-1.5 md:p-2 space-y-0.5 md:space-y-1">
                  {category.subjects.map((subjectKey) => (
                    <button
                      key={subjectKey}
                      onClick={() => onSelectSubject(subjectKey)}
                      className="w-full text-left px-3 py-2.5 md:px-4 md:py-3 rounded-lg md:rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-between group border border-transparent hover:border-slate-100 active:bg-slate-100 touch-manipulation"
                    >
                      <span className="text-slate-700 font-medium group-hover:text-teal-700 transition-colors line-clamp-1 text-sm md:text-base">
                        {t.subjects[subjectKey as keyof typeof t.subjects]}
                      </span>
                      <ArrowRight size={14} className="text-slate-300 group-hover:text-teal-500 transition-all transform group-hover:translate-x-1 md:w-4 md:h-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="py-6 text-center text-slate-400 text-xs md:text-sm shrink-0">
        <p>© 2025 HSC Smart Notebook • {t.poweredBy}</p>
      </div>
    </div>
  );
};

export default HomePage;