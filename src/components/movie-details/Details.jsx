import {
  Wrap,
  Wrapper,
  Image,
  NavLink,
  Title,
  Score,
  SubTitle,
  Text,
  ListTitle,
  List,
  ListItem,
  Span,
} from 'components/movie-details/Details.styled';
//---------------------------------------------------------------
export default function Details({ details }) {
  const { poster_path, title, original_title, vote_average, overview, genres } =
    details;
  return (
    <Wrap>
      <Wrapper>
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={original_title}
        />
        <NavLink to={`credits`}>Cast</NavLink>
        <NavLink to={`reviews`}>Reviews</NavLink>
      </Wrapper>
      <Wrapper>
        <Title>{title}</Title>
        <Score>
          User score: <Span>{vote_average}</Span>
        </Score>
        <SubTitle>Overview</SubTitle>
        <Text>{overview}</Text>
        <ListTitle>Genres</ListTitle>
        <List>
          {genres &&
            genres.map(genre => (
              <ListItem key={genre.id}>{genre.name}</ListItem>
            ))}
        </List>
      </Wrapper>
    </Wrap>
  );
}
