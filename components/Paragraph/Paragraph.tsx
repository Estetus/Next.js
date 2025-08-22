import { type JSX } from 'react';
import { type ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({size = 's', children, className, ...props}: ParagraphProps): JSX.Element => {
  return (
    <div
      className={cn(styles.paragraph, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
      })}
      {...props}
    >
      {children}
    </div>
  );
};
