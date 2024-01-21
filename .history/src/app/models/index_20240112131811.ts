/* Extend this base interface to avoid the type error */
export interface baseObject {
  [key: string]: unknown;
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

export interface Position {
  id: number;
  companyName: string;
  companyUrl: string;
  started: Date;
  ended: Date;
  bullets: Array<string>;
}

export declare type UsageFrequency =
  | 'Back to the drawing board'
  | 'Its been a while'
  | 'I use it occasionally'
  | 'Previous position'
  | 'Current position'
  | 'This application';

export declare type CompetencyLevel =
  | 'None'
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

export declare type ExpType = 'language' | 'framework' | 'skill';
