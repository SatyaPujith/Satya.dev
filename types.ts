export interface Project {
  title: string;
  subtitle: string;
  date: string;
  description: string[];
  tech: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  points: string[];
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
  score: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  event: string;
  date: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum ViewState {
  HOME = 'HOME',
  PROJECTS = 'PROJECTS',
  RESUME = 'RESUME',
  CONTACT = 'CONTACT',
  AI_CHAT = 'AI_CHAT'
}
