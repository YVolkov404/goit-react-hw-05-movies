import { Routes, Route } from 'react-router-dom';
//-----------------------------------------------------------------------
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';
import NotFound from 'pages/NotFound';

import { AppLayout } from './app-layout/AppLayout';
//-----------------------------------------------------------------------
export const App = () => {
  //---------------------------------------------------------------------
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="movie" element={<Movies />} />
        <Route path="movie/:id" element={<MovieDetails />}>
          <Route path="credits" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
