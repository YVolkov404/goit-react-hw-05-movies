import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';

export const Header = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${p => p.theme.secondColor};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-top: 2px solid ${p => p.theme.fifthColor};
  stroke-opacity: inherit;
  fill-opacity: 95%;
  z-index: 999;
`;

export const Nav = styled.nav`
  width: 1440px;
  margin: 0 auto;
  padding: 15px 0 20px 0;
`;

export const List = styled.ul`
  width: calc(100% - 286px);
  margin: 0 auto;
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
    color: ${p => p.theme.fourthColor};
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

  &:hover {
    color: ${p => p.theme.thirdColor};
  }
`;

export const Link = styled(NavLink)`
  color: ${p => p.theme.fourthColor};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  & span {
    display: inline-block;
    transform: translateX(-10px);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover g,
  &.active {
    color: ${p => p.theme.thirdColor};
    fill: ${p => p.theme.thirdColor};
  }

  &:hover path {
    fill: ${p => p.theme.fifthColor};
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
    fill: ${p => p.theme.fourthColor};
  }

  > circle ~ circle {
    fill: ${p => p.theme.thirdColor};
  }

  > path {
    fill: ${p => p.theme.thirdColor};
  }
  > g {
    fill: ${p => p.theme.fifthColor};
  }
`;
