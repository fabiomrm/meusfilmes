import { ReactComponent as MovieflixIcon } from 'assets/images/movieflix-bg.svg';
import { Login } from 'components/Login';
import { useAuth } from 'contexts/AuthContex';
import { Link } from 'react-router-dom';

import './styles.css';

export const Home = () => {
  const { authContextData } = useAuth();

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
        {!authContextData.authenticated ? (
          <Login />
        ) : (
          <div className="home-welcome-area">
            <Link to="/movies">
              <button>IR PARA FILMES</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
