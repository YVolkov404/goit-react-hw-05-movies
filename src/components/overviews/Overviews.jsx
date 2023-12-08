import { Layout } from 'components/App.styled';
import {
  List,
  Item,
  Image,
  Name,
  Rating,
  Content,
  Date,
} from 'components/overviews/Overviews.styled'; /////////////////////////////}

export default function Overviews() {
  return (
    <Layout>
      <List>
        {cast.map(
          ({ id, avatar_path, username, rating, content, created_at }) => {
            return (
              <Item key={id}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${avatar_path}`}
                  alt={'poster'}
                />

                <Name>{username}</Name>
                <Rating>{rating}</Rating>
                <Wrapper>
                  <Content>{content}</Content>
                  <Date>{created_at}</Date>
                </Wrapper>
              </Item>
            );
          }
        )}
      </List>
    </Layout>
  );
}
