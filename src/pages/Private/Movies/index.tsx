import { Link } from 'react-router-dom';

import './styles.css';

export const Movies = () => {
  return (
    <div className="movies-container">
      <h1>Tela de Listagem de filmes</h1>
      <div className="movies-area">
        <Link to="/movies/1">Acessar /movies/1</Link>
        <Link to="/movies/2">Acessar /movies/2</Link>
      </div>
    </div>
  );
};
