import { StaticImageData } from 'next/image';

export interface Project {
  title: string;
  image: StaticImageData;
  description: string;
  detailedDescription: string;
  technologies: string[];
  liveDemo: string;
  sourceCode: string;
}

export interface Blog {
  title: string;
  date: string;
  link: string;
}

export interface Testimonial {
  author: string;
  text: string;
  position: string;
} 