import type { JSX } from 'react';
import styles from './TimeTag.module.css';
import type { TimeTagProps } from './TimeTag.props';

export const TimeTag = ({children}: TimeTagProps): JSX.Element => {
  return (
    <div
      className={styles.timetag}
    >
      {children}
    </div>
  );
};
