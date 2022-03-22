import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from 'utils/auth';

export const PrivateRoutes: React.FC = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/', { state: true, replace: true });
    }
  }, []);

  return <>{children}</>;
};
