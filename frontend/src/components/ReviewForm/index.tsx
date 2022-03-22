import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { ReviewType } from 'types';
import { requestBackend } from 'utils/requests';

import './styles.css';

type Props = {
  movieId: string;
  hasNewReview: (review: ReviewType) => void;
};

type FormData = {
  text: string;
  movieId: number;
};

export const ReviewForm = ({ movieId, hasNewReview }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };
    requestBackend(config)
      .then((res) => {
        setValue('text', '');
        hasNewReview(res.data);
      })
      .catch((err) => console.log('Error: ' + err));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="base-card movie-input-container">
        <input
          {...register('text', {
            required: 'Campo obrigatório',
          })}
          name="text"
          type="text"
          placeholder="Deixe sua avaliação aqui"
          className={`form-control base-input ${
            errors.text ? 'is-invalid' : ''
          }`}
        />
        <div className="invalid-feedback d-block">
          {errors.text?.message}
        </div>
        <div className="btn-submit btn-review">
          <button type="submit">SALVAR AVALIAÇÃO</button>
        </div>
      </div>
    </form>
  );
};
