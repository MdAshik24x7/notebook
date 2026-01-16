import React from 'react';
import { ChevronRight, ChevronDown, BookOpen } from 'lucide-react';
import { Chapter, SubTopic, Language } from '../types';
import { getTranslation } from '../utils/translations';

interface ChapterSidebarProps {
  activeChapterId: string | null;
  activeSubTopicId: string | null;
  onSelectTopic: (chapter: Chapter, subTopic: SubTopic) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
  language: Language;
  syllabus: Chapter[];
}

const ChapterSidebar: React.FC<ChapterSidebarProps> = ({
  activeChapterId,
  activeSubTopicId,
  onSelectTopic,
  isOpen,
  toggleSidebar,
  language,
  syllabus
}) => {
  const [expandedChapter, setExpandedChapter] = React.useState<string | null>(null);
  const t = getTranslation(language);

  const toggleExpand = (chapterId: string) => {
    setExpandedChapter(expandedChapter === chapterId ? null : chapterId);
  };

  // Auto-expand the active chapter if provided
  React.useEffect(() => {
    if (activeChapterId) {
      setExpandedChapter(activeChapterId);
    }
  }, [activeChapterId]);

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-20 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div 
        className={`fixed lg:static inset-y-0 left-0 z-30 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50">
          <div className="bg-teal-600 p-2 rounded-lg text-white">
            <BookOpen size={20} />
          </div>
          <div>
            <h1 className="font-bold text-slate-800 text-lg leading-tight">{t.appTitle}</h1>
            <p className="text-xs text-slate-500 font-medium">{t.subTitle}</p>
          </div>
        </div>

        <div className="overflow-y-auto flex-1 p-3 space-y-2">
          {syllabus.map((chapter) => {
            const isExpanded = expandedChapter === chapter.id;
            const isActive = activeChapterId === chapter.id;

            return (
              <div key={chapter.id} className="rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => toggleExpand(chapter.id)}
                  className={`w-full flex items-center justify-between p-3 transition-colors ${isActive ? 'bg-teal-50 text-teal-800' : 'hover:bg-slate-50 text-slate-700'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-1.5 rounded-md ${isActive ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-500'}`}>
                      <chapter.icon size={16} />
                    </div>
                    <div className="text-left">
                      <span className="text-xs font-bold uppercase tracking-wider opacity-70 block">{t.chapter} {chapter.number}</span>
                      <span className="text-sm font-semibold block truncate w-36">{chapter.title}</span>
                    </div>
                  </div>
                  {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>

                {isExpanded && (
                  <div className="bg-slate-50 border-l-2 border-slate-100 ml-4 my-1 space-y-1 py-1">
                    {chapter.subtopics.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => {
                          onSelectTopic(chapter, sub);
                          if (window.innerWidth < 1024) toggleSidebar();
                        }}
                        className={`w-full text-left px-4 py-2 text-sm rounded-r-md transition-colors ${activeSubTopicId === sub.id ? 'bg-teal-100 text-teal-900 font-medium border-l-2 border-teal-500 -ml-[2px]' : 'text-slate-600 hover:text-teal-600 hover:bg-slate-100'}`}
                      >
                        {sub.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50 text-xs text-center text-slate-400">
          <p>© 2025 HSC Smart Notebook</p>
          <p>{t.poweredBy}</p>
        </div>
      </div>
    </>
  );
};

export default ChapterSidebar;