import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  size: 's' | 'm'
  children: ReactNode; 
}