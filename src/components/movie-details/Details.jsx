import {
  Wrap,
  GoBackLink,
  Icon,
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

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

//--------------------------------------------------------------
export default function Details({ details }) {
  const {
    poster_path,
    title,
    original_title,
    vote_average,
    overview,
    genres,
    location,
  } = details;
  return (
    <Wrap>
      <GoBackLink to={location?.from ?? '/'}>
        <Icon size="34" />
      </GoBackLink>
      <Wrapper>
        <Image
          src={
            poster_path
              ? [`https://image.tmdb.org/t/p/w500/${poster_path}`]
              : defaultImg
          }
          alt={original_title}
        />
        <NavLink to={`credits`}>Cast</NavLink>
        <NavLink to={`reviews`}>Reviews</NavLink>
      </Wrapper>
      <Wrapper>
        <Title>{title}</Title>
        <Score>
          User score: <Span>{Number(vote_average).toFixed(1)}</Span>
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
