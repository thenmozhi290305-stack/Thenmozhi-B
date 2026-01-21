
export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Programming' | 'Web' | 'Others';
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
