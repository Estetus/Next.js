import type { JSX } from 'react';
import type { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({ appearance, children, className }: ButtonProps): JSX.Element => {
  return (
    <>
      {appearance == 'blue' && (
        <button className={cn(styles.button, styles.blue, className)}>
          {children}
          <ArrowIcon />
        </button>
      )}
      {appearance == 'blackbutton' && (
        <button className={cn(styles.button, styles.blackbutton, className)}>
          {children}
        </button>
      )}
    </>
  );
  };

