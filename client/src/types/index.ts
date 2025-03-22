export interface User {
  id: number;
  username: string;
  email: string;
  progress: Record<string, number>;
}

export interface Path {
  id: string;
  title: string;
  description: string;
  iconClass: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  bgColor: string;
  btnBg: string;
  tags: string[];
  tagBg: string;
  tagText: string;
}

export interface Module {
  id: string;
  pathId: string;
  title: string;
  description: string;
  order: number;
  content: string;
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface Quiz {
  id: string;
  pathId: string;
  moduleId: string;
  order: number;
  question: string;
  description?: string;
  options: QuizOption[];
  correctOption: string;
  explanation: string;
}

export interface UserProgress {
  userId: number;
  pathId: string;
  moduleId: string;
  completed: boolean;
  score: number;
  lastUpdated: Date;
}
