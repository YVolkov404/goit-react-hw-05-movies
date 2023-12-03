import MovieList from 'components/movie-list/MovieList';
import { Layout, Title } from 'components/App.styled';

export default function Movies() {
  return (
    <Layout>
      <Title>Trending today</Title>
      <MovieList />
    </Layout>
  );
}
