import { Layout } from 'components/App.styled';
//---------------------------------------------------------------
import {
  List,
  Item,
  Image,
  Wrapper,
  Name,
  Character,
  CharacterTitle,
} from './Credit.styled';

export default function Credits({ cast }) {
  return (
    <Layout>
      <List>
        {cast.map(({ id, profile_path, name, character }) => {
          return (
            <Item key={id}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
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
    </Layout>
  );
}
