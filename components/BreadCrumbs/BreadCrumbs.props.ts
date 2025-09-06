import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface BreadCrumbsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  children?:ReactNode;
  size?: 's' | 'm'
}