import { type JSX } from 'react';
import Picture from './picture.svg';
import { type CardProps } from './Card.props';
import styles from './Card.module.css';


export const Card = ({ children, ...props }: CardProps): JSX.Element => {
    return (
      <div
        className={styles.card}
        {...props}
      >
        <Picture/>
        {children}
      </div>
    );
  };
