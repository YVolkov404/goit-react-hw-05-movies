import { Form as TagForm, Field, ErrorMessage } from 'formik';
import { RiSearch2Line } from 'react-icons/ri';
import styled from 'styled-components';

export const Form = styled(TagForm)`
  position: relative;
  width: 700px;
  margin: 0 auto;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 55px;
  font-size: 24px;
  color: ${p => p.theme.secondColor};
  background-color: ${p => p.theme.firstColor};
  opacity: 0.75;
  caret-color: ${p => p.theme.fifthColor};
  padding: 0 85px 0 15px;
  border: 2px solid ${p => p.theme.thirdColor};
  /* border-radius: 7px; */
  overflow: hidden;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus-visible {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19);
    outline: none;
    opacity: 1;
    /* filter: drop-shadow(1px 1px 1px rgb(76, 76, 109, 1)); */
  }

  &:focus-visible + button {
    opacity: 1;
  }

  &:focus-visible + button > svg {
    filter: drop-shadow(1px 1px 1px rgb(76, 76, 109, 1));
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  position: absolute;
  top: -20px;
  left: 15px;
  color: ${p => p.theme.fifthColor};
`;

export const SubmitBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 70px;
  height: 55px;
  background-color: ${p => p.theme.thirdColor};
  padding-left: 5px;
  opacity: 0.75;

  border: transparent;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover > svg {
    opacity: 1;
    filter: drop-shadow(1px 1px 1px rgb(76, 76, 109, 1));
  }
`;

export const Icon = styled(RiSearch2Line)`
  color: ${p => p.theme.fourthColor};
  vertical-align: bottom;
  transition: filter 250ms cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(3px 3px 3px rgb(76, 76, 109, 1));
`;
