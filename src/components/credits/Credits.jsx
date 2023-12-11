import {
  Wrap,
  List,
  Item,
  Image,
  Wrapper,
  Name,
  Character,
  CharacterTitle,
} from './Credit.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

export default function Credits({ cast }) {
  return (
    <Wrap>
      <List>
        {cast.map(({ id, profile_path, name, character }) => {
          return (
            <Item key={id}>
              <Image
                src={
                  profile_path
                    ? [`https://image.tmdb.org/t/p/w500/${profile_path}`]
                    : defaultImg
                }
                alt={'poster'}
              />
              <Wrapper>
                <Name>{name}</Name>
                <CharacterTitle>Character</CharacterTitle>
                <Character>{character}</Character>
              </Wrapper>
            </Item>
          );
        })}
      </List>
    </Wrap>
  );
}
