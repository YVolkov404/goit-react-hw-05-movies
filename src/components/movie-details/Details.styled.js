import styled from 'styled-components';
import { NavLink as Ref } from 'react-router-dom';

export const Wrap = styled.div`
  width: 1110px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 50px;
  color: #2d3047;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 375px;
  border: 1px solid #e53a35;
  padding: 10px;
  margin-bottom: 20px;
`;

export const NavLink = styled(Ref)`
  font-size: 26px;
  border: 2px solid #72bf80;
  padding: 8px 0;
  margin-bottom: 10px;
  text-align: center;
  color: #2d3047;
  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:last-child {
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    border-color: #e53a35;
    color: #72bf80;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 1000;
  color: #2d3047;
  margin-top: 15px;
  text-shadow: 0px 0px 0px 5px rgba(255, 253, 130, 1);
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: #e53a35;
  text-decoration-thickness: 6px;
  text-underline-offset: 6px;
`;

export const Score = styled.p`
  font-size: 18px;
  font-variant-caps: all-small-caps;
  color: #2d3047;
  margin-top: 15px;
  text-align: right;
  margin-right: 30px;
  letter-spacing: 1.25px;
`;

export const SubTitle = styled.h2`
  font-size: 30px;
`;

export const Text = styled.p`
  margin-top: 10px;
  margin-left: 10px;
  font-size: 22px;
  line-height: 1.26;
`;

export const ListTitle = styled.h3`
  margin-top: 15px;
  font-size: 26px;
  font-weight: 1000;
  color: #e53a35;
  text-shadow: 0px 0px 0px 5px rgba(255, 253, 130, 1);
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  list-style-type: square;
  list-style-position: inside;
  padding: 5px 10px;
`;

export const ListItem = styled.li`
  font-size: 20px;
  text-transform: lowercase;
  color: #72bf80;
`;

export const Span = styled.span`
  margin-left: 15px;
  font-size: 20px;
  font-weight: 1000;
`;
