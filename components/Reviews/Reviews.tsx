import { type JSX } from 'react';
import { type ReviewsProps } from './Reviews.props';
import styles from './Reviews.module.css';
import { Paragraph } from '../Paragraph/Paragraph';
import DotIcon from './dot.svg';

export const Reviews = ({ reviews }: ReviewsProps): JSX.Element => {
  return (
    <div>
      {reviews?.map((r) => (
        <div className={styles.reviews} key={r.id}>
          <div>
            <span className={styles.name}>{r.name}</span>
            <DotIcon/>
            <span className={styles.email}>{r.email}</span>
          </div>
          <Paragraph size="m" className={styles.body}>{r.body}</Paragraph>
        </div>
      ))}
    </div>
  );
};
