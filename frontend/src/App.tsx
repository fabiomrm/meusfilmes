import './App.css';
import './assets/styles/custom.scss';
import { AuthContextProvider } from 'contexts/AuthContex';
import { MainRoutes } from 'MainRoutes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthContextProvider>
      <MainRoutes />
      <ToastContainer />
    </AuthContextProvider>
  );
}

export default App;
