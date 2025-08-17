import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface DuringProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  children: ReactNode; 
}