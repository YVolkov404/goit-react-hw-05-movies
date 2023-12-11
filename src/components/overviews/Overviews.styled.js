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
  color: #2d3047;
`;

export const Image = styled.img`
  width: 55px;
  height: 55px;
  object-fit: cover;
  border: 1px solid #72bf80;
  padding: 3px;
`;

export const Name = styled.p`
  font-size: 30px;
  color: #e53a35;
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
  border: 1px solid #e53a35;
  padding: 25px 15px;
  margin-bottom: 50px;
  line-height: 1.32;
`;

export const Message = styled.p`
  font-size: 32px;
  text-align: center;
  margin-top: 70px;
  color: #72bf80;
  text-decoration-line: line-through;
  text-decoration-thickness: 4px;
  text-decoration-color: #e53a35;
`;
