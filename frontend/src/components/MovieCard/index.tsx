import { Movie } from 'types';
import './styles.css';

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-card">
      <div className="movie-card-image-container">
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className="movie-card-content-container">
        <h1>{movie.title}</h1>
        <p className="movie-card-content-year">{movie.year}</p>
        <p className="movie-card-content-subtitle">{movie.subTitle}</p>
      </div>
    </div>
  );
};
