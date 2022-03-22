import { ReactComponent as MovieflixIcon } from 'assets/images/movieflix-bg.svg';
import { useAuth } from 'contexts/AuthContex';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { requestBackendLogin } from 'utils/requests';
import { saveAuthData } from 'utils/storage';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

export const Home = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { setAuthContextData } = useAuth();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((res) => {
        saveAuthData(res.data);

        setAuthContextData({
          authenticated: true,
          tokenData: res.data,
        });

        navigate('/movies');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="home-container">
      <div className="home-content-container">
        <div className="home-content-container-text">
          <h1>Avalie Filmes</h1>
          <p>Digite o que você achou do seu filme favorito</p>
        </div>
        <div className="home-content-container-image">
          <MovieflixIcon />
        </div>
      </div>
      <div className="base-card login-card">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <input
              {...register('username', {
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido',
                },
              })}
              name="username"
              type="text"
              placeholder="Email"
              className={`form-control base-input ${
                errors.username ? 'is-invalid' : ''
              }`}
            />
            <div className="invalid-feedback d-block">
              {errors.username?.message}
            </div>
          </div>
          <div className="input-container">
            <input
              {...register('password', {
                required: 'Campo obrigatório',
              })}
              name="password"
              type="password"
              placeholder="Senha"
              className={`form-control base-input ${
                errors.password ? 'is-invalid' : ''
              }`}
            />
            <div className="invalid-feedback d-block">
              {errors.password?.message}
            </div>
          </div>
          <div className="btn-submit btn-login">
            <button>FAZER LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
};
