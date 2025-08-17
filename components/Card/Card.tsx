import type { JSX } from 'react';
import styles from './Card.module.css';
import Picture from './picture.svg';
import type { CardProps } from './Card.props';


export const Card = ({ children, ...props }: CardProps): JSX.Element => {
    return (
      <div
        className={styles.divblock}
        {...props}
      >
        <Picture/>
        {children}
      </div>
    );
  };
