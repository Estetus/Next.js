import { type JSX } from 'react';
import LikeIcon from './like.svg';
import { type LikeProps } from './Like.props';
import styles from './Like.module.css';

export const Like = ({ children }: LikeProps): JSX.Element => {
 return (
   <div className={styles.like}>
     {children}
     <LikeIcon />
   </div>
 );
};
