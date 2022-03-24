import { AxiosRequestConfig } from 'axios';
import { MovieCard } from 'components/MovieCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movie } from 'types';
import { requestBackend } from 'utils/requests';

import './styles.css';

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

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
      <div className="movies-filter-container base-card">
        <select name="" id="" placeholder="Gênero">
          <option value="">Aventura</option>
        </select>
      </div>
      <div className="movies-area row">
        {movies &&
          movies.map((movie) => (
            <div className="col-sm-6"  key={movie.id}>
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))}

        {/* <Link to="/movies/1">Acessar /movies/1</Link>
        <Link to="/movies/2">Acessar /movies/2</Link> */}
      </div>
    </div>
  );
};
