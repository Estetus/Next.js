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

   const getAriaLabel = () => {
     return liked
       ? 'Лайк поставлен. Нажмите чтобы убрать лайк'
       : 'Кнопка лайка. Лайк не поставлен. Нажмите чтобы поставить лайк';
   };

  const renderIcon = () => {
  switch(size) {
    case 's':
      return  (
      <div className={styles.button} tabIndex={-1}>
        <LikeSmallIcon />
      </div>);
    case 'm':
      return (
        <div className={styles.liketext}>
          Понравилось? Жми
          <button
            className={cn(styles.likebutton, {
              [styles.liked]: liked,
            })}
            onClick={handleClick}
            aria-label={getAriaLabel()}
            tabIndex={0}
            aria-pressed={liked}
          >
            <LikeIcon />
          </button>
        </div>
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
