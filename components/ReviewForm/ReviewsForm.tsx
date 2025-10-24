import { type JSX } from 'react';
import { type ReviewsProps } from './ReviewsForm.props';
import { Input } from '../Input/Input';
import { TextArea } from '../TextArea/TextArea';
import { Button } from '../Button/Button';
import { useForm } from 'react-hook-form';
import { type IReviewForm } from '@/interfaces/posts.interface';
import cn from 'classnames';
import styles from './ReviewsForm.module.css';



export const ReviewsForm = ({ ...props }: ReviewsProps): JSX.Element => {
  const {register, handleSubmit, formState: {errors}, reset } = useForm<IReviewForm>();

  const onSubmit = (formData: IReviewForm) => {
    reset();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div {...props}>
        <Input
          {...register('name', {
            required: { value: true, message: 'Заполните имя' },
          })}
          className={styles.input}
          placeholder="Имя"
          error={errors.name}
        />
        <TextArea
          {...register('description', {
            required: { value: true, message: 'Заполните комментарий' },
          })}
          placeholder="Комментарий"
          className={styles.textarea}
          error={errors.description}
        />
        <Button appearance="blackbutton">Отправить</Button>
      </div>
    </form>
  );
};
