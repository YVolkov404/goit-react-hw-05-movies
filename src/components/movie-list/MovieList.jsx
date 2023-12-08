import {
  List,
  Item,
  Title,
  Link,
  Footer,
  Counter,
  Icon,
} from './MovieList.styled';

export default function MovieList({ data }) {
  return (
    <List>
      {data.map(({ id, title, vote_average }) => {
        return (
          <Item key={id}>
            <Title>{title}</Title>
            <Footer>
              <Link to={`/movie/${id}`}>Details</Link>

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
