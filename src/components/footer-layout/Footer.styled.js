import styled from 'styled-components';

export const Footer = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: ${p => p.theme.secondColor};
  box-shadow: 0px -2px 8px 0 rgba(0, 0, 0, 0.2),
    0px -4px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Copyright = styled.span`
  width: 1440px;
  margin: 0 auto;
  display: block;
  padding: 10px 0;
  font-size: 22px;
  text-align: center;
  color: ${p => p.theme.fourthColor};
`;
