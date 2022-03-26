import { useAuth } from 'contexts/AuthContex';
import React from 'react';
import { Link, useNavigate,  } from 'react-router-dom';
import { removeAuthData } from 'utils/storage';
import './styles.css';

export const Navbar = () => {
  const { authContextData, setAuthContextData } = useAuth();
  const navigate = useNavigate();

  
  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    })

    navigate('/');
  }

  

  return (
    <nav className="main-nav">
      <div className="container">
        <Link to="/">
          <h4>Meus Filmes</h4>
        </Link>
        <div className="btn-area">
          {authContextData.authenticated && (
            <Link to="/" className="btn" onClick={handleLogout}>SAIR</Link>
          )}
        </div>
      </div>
    </nav>
  );
};
