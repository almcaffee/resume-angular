/* Extend this base interface to avoid the type error */
export interface baseObject {
  [key: string | number]: unknown;
}

export interface baseDetail extends baseObject {
  id: number;
  name: string;
  description: string;
}

export interface Project extends baseDetail {
  imageUrl?: string;
  githubUrl?: string;
  technologies: Array<Experience>;
}

export interface Bullet {
  description: string;
  subs?: Array<Bullet>;
}

export interface Position {
  id: number;
  title: string;
  companyName: string;
  companyUrl?: string;
  start: Date;
  ended: Date;
  bullets: Array<Bullet>;
  frameworks?: Array<number>;
  languages?: Array<number>;
  headline?: string;
  stats?: Array<PositionUse>;
  stack?: Stack;
}

export declare type Stack = 'Full Stack' | 'Front End';

export declare type UsageFrequency =
  | 'Back to the drawing board'
  | 'Its been a while'
  | 'I use it occasionally'
  | 'Previous position'
  | 'Current position'
  | 'This application';

export declare type CompetencyLevel =
  | 'None'
  | 'Back to basics'
  | 'Followed examples in the docs'
  | 'Beginner'
  | 'Intermediate'
  | 'Advanced'
  | 'Expert';

export interface Skill extends baseDetail {
  yearsOfExperience: number;
  usageFrequency?: UsageFrequency;
  usedAt?: Array<number>;
}

export interface Experience extends Skill {
  category?: string;
  lastUsedAt: string;
  lastUsedDate?: Date;
  level?: CompetencyLevel;
  firstExperience?: string;
  relatedSkills?: Array<string>;
  positionsUsed?: Array<string>;
  positions?: Array<Position>;
  bullets?: Array<string>;
}

export interface ExperienceResponse {
  [key: string]: Array<Experience>;
}

export interface ServiceResponse<T> {
  error: string | null;
  data: T | null;
  refuse?: boolean;
}

export declare type ExpType = 'language' | 'framework' | 'skill';

export interface IndexList {
  id: number;
  [key: string]: string | number | Array<Bullet>;
}

export interface PositionUse {
  name: string;
  percentage: number;
}
