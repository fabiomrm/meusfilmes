import { ReactComponent as Star } from 'assets/images/star.svg';
import { ReviewType } from 'types';

import './styles.css';

type Props = {
  review: ReviewType;
}

export const Review = ({ review }: Props) => {
  return (
    <div className="review-container">
      <div className="review-title-area">
        <Star />
        <h1>{review.user.name}</h1>
      </div>
      <div className="review-content-area">
        <p>{review.text}</p>
      </div>
    </div>
  );
};
