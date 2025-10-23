import { forwardRef } from 'react';
import { type ForwardedRef } from 'react';
import { type JSX } from 'react';
import {type  InputProps } from './Input.props';
import cn from 'classnames';
import styles from './Input.module.css';


export const Input = forwardRef(({ error, className, ...props }: InputProps, ref:ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={cn(styles.inputWrapper )}>
      <input type="text" className={cn(styles.input,className, {
        [styles.error]: error
      })} ref={ref} {...props} />
      {error && <span className={styles.errorMessage}>{error?.message}</span>}
    </div>
  );
});
