import { SearchForm } from 'components/search-form/SearchForm';
import MovieList from 'components/movie-list/MovieList';
import { fetchMovies } from 'services/api';
// import { notiflixSettings } from 'services/notiflixOptions';
//-------------------------------------------------------------
// import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
//-------------------------------------------------------------
// import { Main } from 'components/app-layout/AppLayout.styled';
//-------------------------------------------------------------
export default function Movies() {
  const [query, setSearchParams] = useSearchParams('');
  const [data, setData] = useState([]);

  const onSubmitForm = query => {
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
    <>
      <SearchForm getQueryHandler={onSubmitForm} />
      {!(data.length === 0) && <MovieList data={data} />}
    </>
  );
}
