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

  useEffect(() => {
    async function getSearchedMovies() {
      try {
        isLoading(true);

        const data = await fetchMovies(query);
        setData(data);
      } catch (error) {
      } finally {
        isLoading(false);
      }
    }

    getSearchedMovies();
  }, [query]);

  const onSubmitForm = query => {
    setSearchParams(query);
    console.log(query);
  };

  return (
    <>
      <SearchForm getQueryHandler={onSubmitForm} />
      <MovieList location={location} data={data} />
      {data.length === 0 && <Message>{message}</Message>}
      {loading && <Loader />}
    </>
  );
}
