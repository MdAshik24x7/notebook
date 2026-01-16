import React, { useState } from 'react';
import { X, CheckCircle, XCircle, Award, AlertCircle } from 'lucide-react';
import { QuizQuestion, Language } from '../types';
import { getTranslation } from '../utils/translations';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  questions: QuizQuestion[];
  isLoading: boolean;
  language: Language;
}

const QuizModal: React.FC<QuizModalProps> = ({ isOpen, onClose, title, questions, isLoading, language }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const t = getTranslation(language);

  if (!isOpen) return null;

  const currentQuestion = questions[currentQIndex];

  const handleOptionSelect = (index: number) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    if (isCorrect) setScore(score + 1);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentQIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setShowResults(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
      <div className={`bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh] ${language === 'bn' ? 'font-[Hind_Siliguri]' : 'font-sans'}`}>
        {/* Header */}
        <div className="px-6 py-4 bg-teal-600 text-white flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Award size={20} className="text-teal-200"/>
            <h2 className="text-lg font-bold">{t.quizHeader}: {title}</h2>
          </div>
          <button onClick={onClose} className="hover:bg-teal-700 p-1 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-teal-600"></div>
              <p className="text-slate-500 font-medium animate-pulse">{t.generatingQuiz}</p>
            </div>
          ) : showResults ? (
            <div className="text-center py-8 space-y-6">
              <div className="inline-block p-4 rounded-full bg-teal-100 text-teal-600 mb-2">
                <Award size={48} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">{t.quizCompleted}</h3>
              <div className="text-6xl font-black text-teal-600">{score} <span className="text-2xl text-slate-400 font-normal">/ {questions.length}</span></div>
              <p className="text-slate-600 max-w-md mx-auto">
                {score === questions.length ? t.perfectScore : 
                 score > questions.length / 2 ? t.goodScore : 
                 t.avgScore}
              </p>
              <button 
                onClick={handleReset}
                className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1"
              >
                {t.closeResults}
              </button>
            </div>
          ) : questions.length > 0 ? (
            <div className="space-y-6">
              {/* Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div 
                  className="bg-teal-500 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <span>Question {currentQIndex + 1} / {questions.length}</span>
                <span>{t.score}: {score}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 leading-relaxed">
                {currentQuestion.question}
              </h3>

              <div className="space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between group ";
                  
                  if (isSubmitted) {
                    if (idx === currentQuestion.correctAnswer) {
                      buttonClass += "border-green-500 bg-green-50 text-green-900";
                    } else if (idx === selectedOption) {
                      buttonClass += "border-red-500 bg-red-50 text-red-900";
                    } else {
                      buttonClass += "border-slate-100 text-slate-400 opacity-50";
                    }
                  } else {
                    if (selectedOption === idx) {
                      buttonClass += "border-teal-500 bg-teal-50 text-teal-900 shadow-md";
                    } else {
                      buttonClass += "border-slate-200 hover:border-teal-300 hover:bg-slate-50 text-slate-700";
                    }
                  }

                  return (
                    <button 
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={isSubmitted}
                      className={buttonClass}
                    >
                      <span className="font-medium">{option}</span>
                      {isSubmitted && idx === currentQuestion.correctAnswer && <CheckCircle size={20} className="text-green-600" />}
                      {isSubmitted && idx === selectedOption && idx !== currentQuestion.correctAnswer && <XCircle size={20} className="text-red-600" />}
                    </button>
                  );
                })}
              </div>

              {isSubmitted && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mt-4 animate-in fade-in slide-in-from-bottom-2">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="text-blue-500 shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-bold text-blue-900 text-sm mb-1">{t.explanation}</p>
                      <p className="text-blue-800 text-sm">{currentQuestion.explanation}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 text-slate-500">{t.failedToLoad}</div>
          )}
        </div>

        {/* Footer */}
        {!showResults && !isLoading && questions.length > 0 && (
          <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
            {!isSubmitted ? (
              <button 
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className="bg-teal-600 disabled:bg-slate-300 text-white px-6 py-2.5 rounded-lg font-bold transition-colors"
              >
                {t.checkAnswer}
              </button>
            ) : (
              <button 
                onClick={handleNext}
                className="bg-slate-800 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-slate-700 transition-colors flex items-center gap-2"
              >
                {currentQIndex < questions.length - 1 ? t.nextQuestion : t.finishQuiz}
                <ChevronRight size={18} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Helper component
const ChevronRight = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

export default QuizModal;