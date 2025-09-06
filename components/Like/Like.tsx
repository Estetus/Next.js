import { type JSX } from 'react';
import {  type LikeProps } from './Like.props';
import LikeSmallIcon from './like-s.svg';
import LikeIcon from './like-m.svg';
import styles from './Like.module.css';
import cn from 'classnames';
import { useLikes } from './UserLike';


export const Like = ({ children, size, isLiked= false, ...props }: LikeProps): JSX.Element => {
  const {liked, toggleLike} = useLikes({isLiked});

  const handleClick = async() => {
    try {
          await toggleLike();
    } catch(error) {
      console.error(error);
    }
  };

  const renderIcon = () => {
  switch(size) {
    case 's':
      return  (
      <button className={styles.button}>
        <LikeSmallIcon />
      </button>);
    case 'm':
      return (
        <button className={cn(styles.likebutton, {
            [styles.liked]: liked
        })} 
        onClick={handleClick}>
          <LikeIcon />
        </button>
      );
      default :
       return null;
  }
 };
 return (
  <div className={styles.like} {...props}>
    {children}
    {renderIcon()}
  </div>
 );
};
