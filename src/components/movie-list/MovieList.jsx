import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';

import {
  List,
  Item,
  Title,
  Footer,
  Counter,
  Link,
  Icon,
} from './MovieList.styled';

export default function MovieList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      const response = await fetchTrending();

      const data = response.results;
      console.log(data);

      setData(data);
    }
    getTrendingMovies();
  }, [data]);

  return (
    <List>
      {data.map(({ id, title, vote_average }) => {
        return (
          <Item key={id}>
            <Title>{title}</Title>
            <Footer>
              <Link href="">Details</Link>

              <Counter>
                <Icon size="20" />
                {vote_average}
              </Counter>
            </Footer>
          </Item>
        );
      })}
    </List>
  );
}
