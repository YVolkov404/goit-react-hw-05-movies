import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  margin-top: 70px;
`;

export const List = styled.ul`
  width: calc(100% - 154px);
  margin: 0 auto;
  color: #2d3047;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 300px;
  height: 180px;
  border: 2px solid #72bf80;
  padding: 10px;
  gap: 10px;
  overflow: auto;
`;

export const Image = styled.img`
  width: 100px;
  height: auto;
  object-position: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 1000;
  color: #72bf80;
  margin-bottom: 15px;
`;

export const CharacterTitle = styled.h2`
  font-size: 20px;
  /* font-weight: 1000; */
  color: #2d3047;
  font-weight: 1000;
  text-shadow: 0px 0px 0px rgba(255, 253, 130, 1);
  font-variant: small-caps;
  text-decoration-line: overline;
  text-decoration-style: solid;
  text-decoration-color: #e53a35;
  text-decoration-thickness: 2px;
  text-underline-offset: 10px;
`;

export const Character = styled.p`
  color: #2d3047;
  font-size: 16px;
  font-variant: all-small-caps;
  text-align: left;
  padding-left: 10px;
`;
