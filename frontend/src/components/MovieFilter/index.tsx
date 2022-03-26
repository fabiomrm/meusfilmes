import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { requestBackend } from 'utils/requests';
import { Genre } from 'types';

import './styles.css';

export type MovieFilterData = {
  genre: Genre;
};

export const MovieFilter = () => {
  const [filterOptions, setFilterOptions] = useState<Genre[]>([]);
  const { control, setValue, getValues } = useForm<MovieFilterData>();

  useEffect(() => {
    requestBackend({ url: '/genres', withCredentials: true }).then(({ data }) =>
      setFilterOptions(data)
    );
  }, []);

  const handleGenreChange = (value: Genre) => {
    setValue('genre', value);

    const obj: MovieFilterData = {
      genre: getValues('genre'),
    };

    console.log(obj)
  };

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
              onChange={(value) => handleGenreChange(value as Genre)}
            />
          )}
        />
      </form>
    </div>
  );
};
