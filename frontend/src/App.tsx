import './App.css';
import './assets/styles/custom.scss';
import { AuthContextProvider } from 'contexts/AuthContex';
import { MainRoutes } from 'MainRoutes';




function App() {
  return (
    <AuthContextProvider>
      <MainRoutes />
    </AuthContextProvider>
  );
}

export default App;
