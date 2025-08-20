import { useState, type JSX } from 'react';
import styles from './Like.module.css';
import LikeSmallIcon from './like-s.svg';
import LikeIcon from './like-m.svg';
import type { LikeProps } from './Like.props';
import cn from 'classnames';

export const Like = ({ children, size, isLiked= false, ...props }: LikeProps): JSX.Element => {
  const [liked, setLiked] = useState(isLiked);

  const handleClick = async() => {
    const newLikeState = !liked;
    setLiked(newLikeState);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/:id', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          liked: newLikeState
        })
      });
      if(!response.ok) {
        throw new Error('Failed');
      }
    
    } catch(error) {
      console.error(error);
      setLiked(liked);
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
