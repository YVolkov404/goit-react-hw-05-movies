import { SearchForm } from 'components/search-form/SearchForm';
import MovieList from 'components/movie-list/MovieList';
import { fetchMovies } from 'services/api';
//-------------------------------------------------------------
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
//-------------------------------------------------------------
import { Layout } from 'components/App.styled';
//-------------------------------------------------------------
export default function Movies() {
  const [query, setSearchParams] = useSearchParams('');
  const [data, setData] = useState([]);

  const getQueryHandler = query => {
    setSearchParams(query);
  };

  useEffect(() => {
    try {
      async function getSearchedMovies() {
        const data = await fetchMovies(query);

        setData(data);
      }
      getSearchedMovies();
    } catch (error) {}
  }, [query, data]);

  return (
    <Layout>
      <SearchForm onSubmit={getQueryHandler} />
      <MovieList data={data} />
    </Layout>
  );
}
