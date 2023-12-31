import styled from 'styled-components';

export const Wrap = styled.div`
  width: inherit;
  margin-top: 70px;
`;

export const List = styled.ul`
  width: calc(100% - 194px);
  margin: 0 auto;
`;

export const Item = styled.li`
  color: ${p => p.theme.secondColor};
`;

export const Image = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  border: 1px solid ${p => p.theme.thirdColor};
  padding: 3px;
`;

export const Name = styled.p`
  font-size: 30px;
  color: ${p => p.theme.fifthColor};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 12px;
  padding-left: 30px;
`;

export const Content = styled.p`
  font-size: 22px;
  border: 1px solid ${p => p.theme.fifthColor};
  padding: 25px 15px;
  margin-bottom: 50px;
  line-height: 1.32;
`;
