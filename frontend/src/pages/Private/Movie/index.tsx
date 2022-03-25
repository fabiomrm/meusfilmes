import { Review } from 'components/Review';
import { useEffect, useState } from 'react';
import { getTokenData } from 'utils/auth';
import { useParams } from 'react-router-dom';

import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requestBackend } from 'utils/requests';
import { MovieType, ReviewType } from 'types';
import { ReviewForm } from 'components/ReviewForm';

type UrlParams = {
  movieId: string;
};

export const Movie = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const [movie, setMovie] = useState<MovieType>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config)
      .then((res) => setReviews(res.data))
      .catch((err) => console.log(err));
  }, [movieId]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: `/movies/${movieId}`,
      withCredentials: true,
    };
    requestBackend(config)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, [movieId]);

  const handleHasNewReview = (review: ReviewType) => {
    setReviews([...reviews, review]);
  };
  return (
    <div className="movie-container">
      <div className="movie-details-area">
        <div className="movie-details-image-container">
          <img src={movie?.imgUrl} alt={movie?.title} />
        </div>
        <div className="movie-details-content-container">
          <h1>{movie?.title}</h1>
          <p className="movie-details-content-container-year">{movie?.year}</p>
          <p>{movie?.subTitle}</p>
        </div>
        <div className="movie-details-description-container">
          <p>
            {movie?.synopsis}
          </p>
        </div>
      </div>

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
