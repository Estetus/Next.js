import type { JSX } from 'react';
import styles from './During.module.css';
import type { DuringProps } from './During.props';

export const During = ({children}: DuringProps): JSX.Element => {
  return (
    <div
      className={styles.during}
    >
      {children}
    </div>
  );
};
