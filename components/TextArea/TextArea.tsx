import { type JSX } from 'react';
import cn from 'classnames';
import styles from './TextArea.module.css';
import { type TextAreaProps } from './TextArea.props';

export const TextArea = ({
  error,
  className,
  ...props
}: TextAreaProps): JSX.Element => {
  return (
    <div className={cn(styles.textareaWrapper, className)}>
      <textarea
        className={cn(styles.textarea, {
          [styles.error]: error,
        })}
        {...props}
      />
      {error && (
        <span role="alert" className={styles.errorMessage}>
          {error?.message}
        </span>
      )}
    </div>
  );
};
