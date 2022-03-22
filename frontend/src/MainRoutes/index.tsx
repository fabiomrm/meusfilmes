import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Navbar } from 'components/Navbar';
import { Movies } from 'pages/Private/Movies';
import { Movie } from 'pages/Private/Movie';
import { PrivateRoutes } from 'components/PrivateRoutes';

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={
            <PrivateRoutes>
              <Movies />
            </PrivateRoutes>
          }
        />
        <Route
          path="/movies/:movieId"
          element={
            <PrivateRoutes>
              <Movie />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
