export type Category = 'react' | 'next' | 'express' | 'mongo';

export interface IProject {
  id: number;
  name: string;
  description: string;
  imageURL: string;
  deployedURL: string;
  gitHubURL: string;
  category: Category[];
  keyTechs: string[];
}
