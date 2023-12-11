import { SearchForm } from 'components/search-form/SearchForm';
import MovieList from 'components/movie-list/MovieList';
import { fetchMovies } from 'services/api';
//-------------------------------------------------------------
import { Loader } from 'services/Loader';
import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
//-------------------------------------------------------------
import { Message } from 'components/app-layout/AppLayout.styled';
//-------------------------------------------------------------
const message = 'There are no movies available';

export default function Movies() {
  const location = useLocation();

  const [query, setSearchParams] = useSearchParams('');
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(false);

  const onSubmitForm = query => {
    setSearchParams(query);
  };

  useEffect(() => {
    try {
      async function getSearchedMovies() {
        isLoading(true);
        const data = await fetchMovies(query);

        setData(data);

        if (data.length === 0) {
          return message;
        }
      }
      getSearchedMovies();
    } catch (error) {
    } finally {
      isLoading(loading);
    }
  }, [query, data, loading]);

  return (
    <>
      <SearchForm location={location} getQueryHandler={onSubmitForm} />
      <MovieList location={location} data={data} />
      {data.length === 0 && <Message>{message}</Message>}
      {loading && <Loader />}
    </>
  );
}
