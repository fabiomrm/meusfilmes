import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';


import './styles.css';
import { Genre } from 'types';
import { useEffect, useState } from 'react';
import { requestBackend } from 'utils/requests';

type MovieFilterData = {
  genre: Genre;
};

export const MovieFilter = () => {
  const [filterOptions, setFilterOptions] = useState<Genre[]>([]);
  const { register, control } = useForm<MovieFilterData>();

  useEffect(() => {
    requestBackend({ url: '/genres', withCredentials: true }).then(({ data }) =>
      setFilterOptions(data)
    );
  }, []);

  return (
    <div className="movies-filter-container base-card">
      <form>
        <Controller
          name="genre"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              placeholder="Gênero"
              isClearable
              options={filterOptions}
              classNamePrefix="movie-genre-select"
              getOptionLabel={(genre: Genre) => genre.name}
              getOptionValue={(genre: Genre) => String(genre.id)}
             
            />
          )}
        />
      </form>
    </div>
  );
};
