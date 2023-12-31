import { fetchTrending } from 'services/api';
import { Loader } from 'services/Loader';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
//------------------------------------------------------
import MovieList from 'components/movie-list/MovieList';
//------------------------------------------------------
import { Wrap, MovieListTitle } from 'components/movie-list/MovieList.styled';

export default function Home() {
  const location = useLocation();

  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        isLoading(true);
        const data = await fetchTrending();

        setData(data);
      } catch (error) {
      } finally {
        isLoading(false);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <Wrap>
      <MovieListTitle>Trending today</MovieListTitle>
      <MovieList data={data} location={location} />
      {loading && <Loader />}
    </Wrap>
  );
}
