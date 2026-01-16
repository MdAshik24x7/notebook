import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { ChatMessage, Language } from '../types';
import { askTutor } from '../services/geminiService';
import MarkdownRenderer from './MarkdownRenderer';
import { getTranslation } from '../utils/translations';

interface AIChatProps {
  currentContext: string;
  language: Language;
}

const AIChat: React.FC<AIChatProps> = ({ currentContext, language }) => {
  const t = getTranslation(language);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message when language changes or first load
  useEffect(() => {
    setMessages([{
      id: 'welcome',
      role: 'model',
      text: t.welcomeMsg,
      timestamp: Date.now()
    }]);
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Prepare history for API
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await askTutor(history, userMsg.text, currentContext, language);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center gap-2 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare size={24} />
        <span className="font-bold pr-2">{t.askTutor}</span>
      </button>

      {/* Chat Window */}
      {/* Mobile: Full screen fixed. Desktop: Fixed w/h at bottom right */}
      <div 
        className={`fixed z-50 bg-white shadow-2xl border-slate-200 flex flex-col transition-all duration-300 ${language === 'bn' ? 'font-[Hind_Siliguri]' : 'font-sans'}
          ${isOpen 
            ? 'opacity-100 pointer-events-auto inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-96 sm:h-[600px] sm:max-h-[90vh] sm:rounded-2xl transform-none' 
            : 'opacity-0 pointer-events-none inset-y-full inset-x-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-96 sm:h-[600px] sm:translate-y-10 sm:scale-95'
          }
        `}
      >
        {/* Header */}
        <div className="p-4 bg-teal-600 sm:rounded-t-2xl flex justify-between items-center text-white shrink-0">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-1.5 rounded-lg">
               <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm">{t.tutorName}</h3>
              <div className="flex items-center gap-1.5 opacity-80">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs">{t.online}</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="hover:bg-white/20 p-1.5 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'model' && (
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center shrink-0 border border-teal-200">
                  <Sparkles size={14} className="text-teal-600" />
                </div>
              )}
              
              <div 
                className={`max-w-[85%] sm:max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-teal-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-none prose-sm'
                }`}
              >
                {msg.role === 'model' ? (
                   <MarkdownRenderer content={msg.text} />
                ) : (
                  msg.text
                )}
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                  <User size={14} className="text-slate-500" />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3 justify-start">
               <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center shrink-0 border border-teal-200">
                  <Bot size={14} className="text-teal-600" />
                </div>
                <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-100">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-slate-100 shrink-0 pb-6 sm:pb-4 safe-area-bottom">
          <div className="relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.typePlaceholder}
              className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white resize-none text-sm h-12 max-h-24"
              rows={1}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              className="absolute right-2 top-2 p-1.5 bg-teal-600 text-white rounded-lg disabled:bg-slate-300 hover:bg-teal-700 transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChat;