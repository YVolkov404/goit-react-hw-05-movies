import { useEffect, useState } from 'react';
//------------------------------------------------------

import MovieList from 'components/movie-list/MovieList';
import { fetchTrending } from 'services/api';
//------------------------------------------------------

import { Wrap, MovieListTitle } from 'components/movie-list/MovieList.styled';

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
    <Wrap>
      <MovieListTitle>Trending today</MovieListTitle>
      <MovieList data={data} />
    </Wrap>
  );
}
