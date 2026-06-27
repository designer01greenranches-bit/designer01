export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  features: string[];
  modelUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
  recommendation?: {
    author: string;
    avatar: string;
    role: string;
    text: string;
  };
}

export interface Skill {
  name: string;
  level: number; // Percentage 0-100
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Message {
  id: string;
  sender: "user" | "assistant" | "system";
  text: string;
  timestamp: string;
  isInterviewQuestion?: boolean;
  questionId?: string;
  correctAnswer?: string;
}

export type ThemeAccent = "emerald" | "violet" | "amber" | "rose" | "cyan";

export interface ThemeConfig {
  accent: ThemeAccent;
  primaryBg: string;
  textPrimary: string;
  badgeBg: string;
  badgeText: string;
}
