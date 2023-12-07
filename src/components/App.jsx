import { Routes, Route } from 'react-router-dom';

//-----------------------------------------------------------------------
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';
import NotFound from 'pages/NotFound';

//-----------------------------------------------------------------------
import { Head } from './header-layout/Header';
import { Foot } from './footer-layout/Footer';
//-----------------------------------------------------------------------
import { Wrapper } from './App.styled';
//-----------------------------------------------------------------------
export const App = () => {
  //---------------------------------------------------------------------
  return (
    <Wrapper>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Foot />
    </Wrapper>
  );
};
