import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface LikeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  children?: ReactNode,
  size: 's' | 'm';
  isLiked?: boolean
}