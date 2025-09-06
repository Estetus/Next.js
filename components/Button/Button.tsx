import { type JSX } from 'react';
import { type ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ appearance, children, className }: ButtonProps): JSX.Element => {

    switch(appearance) {
      case 'blue':
      return  <button className={cn(styles.button, styles.blue, className)}>
          {children}
          <ArrowIcon />
        </button>;
      case  'blackbutton':
      return <button className={cn(styles.button, styles.blackbutton, className)}>
          {children}
        </button>;
        default: 
        return <></>;
    }
     
  };

