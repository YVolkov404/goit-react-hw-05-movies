import styled from 'styled-components';
import { FaArrowRotateLeft } from 'react-icons/fa6';
import { NavLink as Ref, Link } from 'react-router-dom';

export const Wrap = styled.div`
  position: inherit;
  width: 1110px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 50px;
  color: ${p => p.theme.secondColor};
`;

export const GoBackLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 60%;
  background-color: ${p => p.theme.fourthColor};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  z-index: 1000;

  &:hover svg {
    transform: rotate(-45deg);
    font-weight: 1000;
  }
`;

export const Icon = styled(FaArrowRotateLeft)`
  fill: ${p => p.theme.thirdColor};
  transform: rotate(90deg);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 99999;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 375px;
  border: 1px solid ${p => p.theme.fifthColor};
  padding: 10px;
  margin-bottom: 20px;
`;

export const NavLink = styled(Ref)`
  font-size: 26px;
  border: 2px solid ${p => p.theme.thirdColor};
  padding: 8px 0;
  margin-bottom: 10px;
  text-align: center;
  color: ${p => p.theme.secondColor};
  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:last-child {
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    border-color: ${p => p.theme.fifthColor};
    color: ${p => p.theme.thirdColor};
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 1000;
  color: ${p => p.theme.secondColor};
  margin-top: 15px;
  text-shadow: 0px 0px 0px 5px rgba(255, 253, 130, 1);
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: ${p => p.theme.fifthColor};
  text-decoration-thickness: 6px;
  text-underline-offset: 6px;
`;

export const Score = styled.p`
  font-size: 18px;
  font-variant-caps: all-small-caps;
  color: ${p => p.theme.secondColor};
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
  color: ${p => p.theme.fifthColor};
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
  color: ${p => p.theme.thirdColor};
`;

export const Span = styled.span`
  margin-left: 15px;
  font-size: 20px;
  font-weight: 1000;
`;
