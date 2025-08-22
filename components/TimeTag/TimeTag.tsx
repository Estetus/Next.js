import { type JSX } from 'react';
import { type TimeTagProps } from './TimeTag.props';
import styles from './TimeTag.module.css';

export const TimeTag = ({children}: TimeTagProps): JSX.Element => {
  return (
    <div
      className={styles.timetag}
    >
      {children}
    </div>
  );
};
