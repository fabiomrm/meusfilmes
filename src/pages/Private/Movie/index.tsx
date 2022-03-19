import { Review } from 'components/Review';
import { useEffect, useState } from 'react';
import { getTokenData } from 'utils/auth';
import { useParams } from 'react-router-dom';

import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'utils/requests';
import { ReviewType } from 'types';
import { ReviewForm } from 'components/ReviewForm';

type UrlParams = {
  movieId: string;
};

export const Movie = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<ReviewType[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config)
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }, [movieId]);

  const handleHasNewReview = (review: ReviewType) => {
    setReviews([...reviews, review]);
  };
  return (
    <div className="movie-container">
      <h1>Tela de detalhes do filme id: {movieId}</h1>
      <div className="input-area">
        {getTokenData()?.authorities.includes('ROLE_MEMBER') && (
          <ReviewForm
            movieId={movieId as string}
            hasNewReview={handleHasNewReview}
          />
        )}
      </div>
      <div className="comments-area">
        {reviews &&
          reviews
            .sort((a, b) => b.id - a.id)
            .map((review) => <Review key={review.id} review={review} />)}
      </div>
    </div>
  );
};
