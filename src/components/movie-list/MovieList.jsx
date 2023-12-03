import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';

import {
  List,
  Item,
  Date,
  Title,
  Counter,
  Btn,
  Icon,
} from './MovieList.styled';

export default function MovieList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      const response = await fetchTrending();

      const data = response.results;

      setData(data);
    }
    getTrendingMovies();
  }, [data]);

  return (
    <List>
      {data.map(({ id, release_date, title, vote_average }) => {
        return (
          <Item key={id}>
            <Date>{release_date}</Date>
            <Title>{title}</Title>
            <Btn type="button">Next</Btn>
            <Icon />
            <Counter>{vote_average}</Counter>
          </Item>
        );
      })}
    </List>
  );
}
