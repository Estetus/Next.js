import type { JSX } from 'react';
import styles from './Like.module.css';
import LikeIcon from './like.svg';
import type { LikeProps } from './Like.props';

export const Like = ({ children }: LikeProps): JSX.Element => {
 return (
   <div className={styles.like}>
     {children}
     <LikeIcon />
   </div>
 );
};
