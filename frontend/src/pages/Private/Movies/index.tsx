import { AxiosRequestConfig } from 'axios';
import { MovieCard } from 'components/MovieCard';
import { MovieFilter } from 'components/MovieFilter';
import { Pagination } from 'components/Pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieType } from 'types';
import { requestBackend } from 'utils/requests';

import './styles.css';

export const Movies = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
    };

    requestBackend(config).then(({ data }) => setMovies(data.content));
  };

  return (
    <div className="movies-container">
      <div className="movies-filter-area-container">
        <MovieFilter />
      </div>
      <div className="row">
        {movies &&
          movies.map((movie) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={movie.id}>
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))}
      </div>
      <div className="row">
        <Pagination />
      </div>
    </div>
  );
};
