import React from 'react';

export type Language = 'en' | 'bn';
export type Subject = 'ict' | 'physics1' | 'physics2' | 'chemistry1' | 'chemistry2' | 'biology1' | 'biology2' | 'math1' | 'math2' | 'bangla1' | 'bangla2' | 'english1' | 'english2' | 'socialwork1' | 'socialwork2' | 'agriculture1' | 'agriculture2' | 'civics1' | 'civics2' | 'accounting1' | 'accounting2' | 'finance1' | 'finance2' | 'economics1' | 'economics2' | 'management1' | 'management2' | 'marketing1' | 'marketing2' | 'islam1' | 'islam2' | 'ultimate_ai';

export interface SubTopic {
  id: string;
  title: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtopics: SubTopic[];
  icon: React.ComponentType<any>;
}

export interface GeneratedContent {
  content: string; // Markdown content
  lastUpdated: number;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option
  explanation: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
