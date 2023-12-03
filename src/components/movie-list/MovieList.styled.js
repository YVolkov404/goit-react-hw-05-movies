import { BiSolidLike } from 'react-icons/bi';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const Item = styled.li`
  width: calc((100% - 40px) / 3);
  height: auto;
  padding: 7px 10px;
  border: 1px solid red;
  font-variant: small-caps;
`;

export const Date = styled.p`
  text-align: right;
`;

export const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 4px;
`;

export const Counter = styled.span``;

export const Btn = styled.button``;

export const Icon = styled(BiSolidLike)``;
