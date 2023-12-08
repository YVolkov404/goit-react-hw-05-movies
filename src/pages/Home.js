import MovieList from 'components/movie-list/MovieList';
import { fetchTrending } from 'services/api';
//------------------------------------------------------
import { useEffect, useState } from 'react';
//------------------------------------------------------
import { Layout } from 'components/App.styled';
import { MovieListTitle } from 'components/movie-list/MovieList.styled';
//------------------------------------------------------
export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      async function getTrendingMovies() {
        const data = await fetchTrending();

        setData(data);
      }
      getTrendingMovies();
    } catch (error) {}
  }, [data]);

  return (
    <Layout>
      <MovieListTitle>Trending today</MovieListTitle>
      <MovieList data={data} />
    </Layout>
  );
}
