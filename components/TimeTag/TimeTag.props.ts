import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface TimeTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  children: ReactNode; 
}