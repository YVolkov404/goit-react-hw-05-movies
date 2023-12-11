import {
  Wrap,
  List,
  Item,
  Image,
  Name,
  Content,
  Wrapper,
} from './Overviews.styled';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=55x55';

export default function Overviews({ reviews }) {
  return (
    <Wrap>
      <List>
        {reviews.map(
          ({ id, author_details: { avatar_path }, author, content }) => {
            return (
              <Item key={id}>
                <Wrapper>
                  <Image
                    src={
                      avatar_path
                        ? [`https://image.tmdb.org/t/p/w500/${avatar_path}`]
                        : defaultImg
                    }
                    alt="poster"
                  />
                  <Name>{author}</Name>
                </Wrapper>
                <Content>{content}</Content>
              </Item>
            );
          }
        )}
      </List>
    </Wrap>
  );
}
