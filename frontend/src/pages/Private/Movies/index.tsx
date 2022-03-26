import { AxiosRequestConfig } from 'axios';
import { MovieCard } from 'components/MovieCard';
import { MovieFilter, MovieFilterData } from 'components/MovieFilter';
import { Pagination } from 'components/Pagination';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieType } from 'types';
import { SpringPage } from 'types/vendor';
import { requestBackend } from 'utils/requests';

import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: MovieFilterData;
};

export const Movies = () => {
  const [page, setPage] = useState<SpringPage<MovieType>>();
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: {
        genre: {
          id: 0,
          name: '',
        },
      },
    });

  const getMovies = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        genreId: controlComponentsData.filterData.genre?.id,
      },
    };
    requestBackend(config).then(({ data }) => setPage(data));
  }, [controlComponentsData]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({
      activePage: 0,
      filterData: data,
    });
  };

  return (
    <div className="movies-container">
      <div className="movies-filter-area-container">
        <MovieFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {page &&
          page.content.map((movie) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={movie.id}>
              <Link to={`/movies/${movie.id}`} key={movie.id}>
                <MovieCard movie={movie} />
              </Link>
            </div>
          ))}
      </div>
      <div className="row">
        <Pagination
          pageCount={page ? page.totalPages : 0}
          range={3}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};
