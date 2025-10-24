import { useEffect, useState, type JSX } from 'react';
import { type ReviewsProps } from './ReviewsForm.props';
import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';
import { useForm } from 'react-hook-form';
import { type IReviewForm } from '@/interfaces/posts.interface';
import styles from './ReviewsForm.module.css';

export const ReviewsForm = ({ ...props }: ReviewsProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isSuccess]);

  const onSubmit = (formData: IReviewForm) => {
    setIsSuccess(true);
    reset();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div {...props} className={styles.form}>
        <Input
          {...register('name', {
            required: { value: true, message: 'Заполните имя' },
          })}
          className={styles.input}
          placeholder="Имя"
          aria-label="Имя"
          tabIndex={0}
          error={errors.name}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        <TextArea
          {...register('description', {
            required: { value: true, message: 'Заполните комментарий' },
          })}
          placeholder="Комментарий"
          aria-label="Комментарий"
          tabIndex={0}
          className={styles.textarea}
          error={errors.description}
          aria-invalid={errors.description ? 'true' : 'false'}
        />
        <Button appearance="blackbutton" onClick={() => clearErrors()}>
          Отправить
        </Button>
      </div>
      {isSuccess && (
        <div className={styles.success} role="alert" aria-atomic="true">
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо ваш отзыв будет опубликован после проверки</div>
        </div>
      )}
    </form>
  );
};
