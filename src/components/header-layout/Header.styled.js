import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';

export const Header = styled.header`
  width: 100%;
  background-color: #2d3047;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-top: 2px solid #e53a35;
  border-bottom: 1px solid #1b998b;
  stroke-opacity: inherit;
  opacity: 90%;
  fill-opacity: 95%;
`;

export const Nav = styled.nav`
  max-width: 1280px;
  min-width: 960px;
  margin: 0 auto;
  padding: 15px 60px 20px 60px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  gap: 100px;

  font-size: 32px;
  text-transform: lowercase;

  > li:last-child > a,
  > li:last-child > a:hover,
  > li:last-child > a:active {
    color: #fffd82;
  }
`;

export const Item = styled.li`
  align-self: flex-end;
  flex-grow: 0;
  font-weight: 700;
  letter-spacing: 2.25px;
`;

export const Logo = styled.li`
  height: 100%;
  flex-grow: 2;
  text-align: end;
  margin-right: 0;
  font-weight: 1000;
  font-size: 36px;
  letter-spacing: 1.25px;

  &:hover,
  > a:hover .animate__pulse {
    animation-iteration-count: infinite;
    animation-delay: 250ms;
    animation-timing-function: ease-in-out;
  }
`;

export const Link = styled(NavLink)`
  color: #fffd82;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & span {
    display: inline-block;
    transform: translateX(-10px);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover,
  &.active {
    color: #72bf80;
  }

  &:hover span,
  &.active span {
    transform: translateX(0);
  }
`;

export const Icon = styled(FcFilmReel)`
  vertical-align: bottom;
  margin-right: 5px;

  > path + circle {
    fill: #fffd82;
  }

  > circle ~ circle {
    fill: #72bf80;
  }

  > path {
    fill: #72bf80;
  }
  > g {
    fill: #e53a35;
  }
`;
