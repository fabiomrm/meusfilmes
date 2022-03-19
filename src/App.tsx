import { AuthContextProvider } from 'contexts/AuthContex';
import { MainRoutes } from 'MainRoutes';

import './App.css';
import './assets/styles/custom.scss';

function App() {
  return (
    <AuthContextProvider>
      <MainRoutes />
    </AuthContextProvider>
  );
}

export default App;
