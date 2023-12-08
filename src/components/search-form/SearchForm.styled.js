import { ErrorMessage } from 'formik';
import { RiSearch2Line } from 'react-icons/ri';
import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  width: 700px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 55px;
  font-size: 24px;
  color: #2d3047;
  background-color: #f3ffe1;
  opacity: 0.75;
  caret-color: #e64d45;
  padding: 0 85px 0 15px;
  border: 2px solid #72bf80;
  /* border-radius: 7px; */
  overflow: hidden;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus-visible {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 10px 0 rgba(0, 0, 0, 0.19);
    outline: none;
    opacity: 1;
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
  display: inline-block;
  top: -20px;
  right: 5px;
  font-size: 16px;
  color: #e64d45;
`;

export const SubmitBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 70px;
  height: 55px;
  background-color: #72bf80;
  padding-left: 5px;
  opacity: 0.75;

  border: transparent;
  /* border-left: 3px solid #fffd82; */
  /* border-top-right-radius: 7px;
  border-bottom-right-radius: 7px; */

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
  }
`;

export const Icon = styled(RiSearch2Line)`
  color: #fffd82;
  vertical-align: bottom;
  transition: filter 250ms cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(3px 3px 3px rgb(76, 76, 109, 1));
`;
