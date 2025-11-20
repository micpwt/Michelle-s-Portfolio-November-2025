import { ReactNode } from 'react';

export interface StatCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export interface ProjectProps {
  title: string;
  description: string;
  tags?: string[];
}
