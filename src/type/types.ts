export interface WorkTypes {
  id?: string;
  title?: string;
  thumbnail: string;
  image?: string[];
  href?: string;
  repo?: string;
  tech?: string[];
}

export interface SkillTypes {
  title: string;
  icon: string;
}

export interface BlogTypes {
  id: number;
  image: string;
  title: string;
  category: string;
  content: string;
  body: string;
}
