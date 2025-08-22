import { type JSX } from 'react';
import { type CardProps } from './Card.props';
import Picture from './picture.svg';
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
