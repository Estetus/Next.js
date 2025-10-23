import { type JSX } from 'react';
import { type CardProps } from './Card.props';
import Picture from './picture.svg';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({ children,  size = 's', ...props }: CardProps): JSX.Element => {
  return (
    <div
      className={cn(styles.card, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
      })}
      {...props}
    >
      
      <Picture  className='picture' aria-label='фото карточки' tabIndex={0}/>
      {children}
    </div>
  );
};
