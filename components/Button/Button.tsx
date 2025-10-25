import { type JSX } from 'react';
import { type ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import styles from './Button.module.css';
import cn from 'classnames';
import { motion } from 'framer-motion';

export const Button = ({ appearance, withIcon=false, icon, children, className }: ButtonProps): JSX.Element => {
      const renderIcon = icon || <ArrowIcon />;

      const iconAnimation = {
        rest: {
          x: 0,
          transition: {
            duration: 0.2,
            ease: 'easeInOut',
          },
        },
        hover: {
          x: 5,
          transition: {
            duration: 0.2,
            ease: 'easeInOut',
          },
        },
      };

       const buttonAnimation = {
         rest: {
           scale: 1,
         },
         hover: {
           scale: 1.02,
         },
       };
    switch(appearance) {
      case 'blue':
      return (
        <motion.button
          className={cn(styles.button, styles.blue, className)}
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={buttonAnimation}
        >
          {children}
          {withIcon && <motion.span variants={iconAnimation}
            initial="rest"
              whileHover="hover"
              animate="rest"
              >
              {renderIcon}</motion.span>}
        </motion.button>
      );
      case  'blackbutton':
      return (
        <motion.button
          className={cn(styles.button, styles.blackbutton, className)}
          initial="rest"
          whileHover="hover"
          variants={buttonAnimation}
        >
          {children}
          {withIcon && (
            <motion.span
              variants={iconAnimation}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {renderIcon}
            </motion.span>
          )}
        </motion.button>
      );
        default: 
        return <></>;
    }
     
  };

