import { BiSolidLike } from 'react-icons/bi';
import styled from 'styled-components';
import { Link as Ref } from 'react-router-dom';

export const MovieListTitle = styled.h1`
  text-align: center;
  font-size: 54px;
  font-weight: 1000;
  color: #404456;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 30px;
  color: #404456;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc((100% - 40px) / 3);
  height: 96px;
  padding: 7px 10px 10px 10px;
  border: 2px solid #e64d45;
  /* font-variant: small-caps; */

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.034), 0 7px 5px rgba(0, 0, 0, 0.048),
      0 12px 10px rgba(0, 0, 0, 0.06), 0 22px 18px rgba(0, 0, 0, 0.072);
  }

  &:hover div > a {
    color: #e64d45;
  }
  overflow: scroll;
`;

export const Title = styled.h2`
  font-size: 22px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const Counter = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

export const Link = styled(Ref)`
  background-color: #f3ffe1;
  font-size: 18px;
  font-weight: 1000;
  font-variant: all-small-caps;
  vertical-align: top;
  cursor: pointer;
  color: #7ec589;
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
`;

export const Icon = styled(BiSolidLike)`
  color: #e64d45;
  vertical-align: bottom;
  margin-right: 4px;
`;
