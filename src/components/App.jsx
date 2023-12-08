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
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />}>
          <Route path="credits" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Foot />
    </Wrapper>
  );
};
