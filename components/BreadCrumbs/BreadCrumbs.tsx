import { type JSX } from 'react';
import { type BreadCrumbsProps } from './BreadCrumbs.props';
import { Like } from '../Like';
import { TimeTag } from '../TimeTag';
import DotIcon from './dot.svg';
import cn from 'classnames';
import styles from './BreadCrumbs.module.css';


export const BreadCrumbs = ({ children, size = 's' }: BreadCrumbsProps): JSX.Element => {
  return (
    <div
      className={cn(styles.container, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
      })}
    >
      {size == 's' && (
        <div className={styles.text}>
          Front-end
          <DotIcon />
          <TimeTag>1 месяц назад</TimeTag>
        </div>
      )}
      {children}
      <Like size='s'> 4</Like >
    </div>
  );
}; 
