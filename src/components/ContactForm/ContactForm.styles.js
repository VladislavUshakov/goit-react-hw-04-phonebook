import styled from '@emotion/styled';
import { Form as FormicForm, ErrorMessage as FormicErrorMessage } from 'formik';

export const Form = styled(FormicForm)`
  display: flex;
  flex-direction: column;
  gap: 30px;

  margin-bottom: 20px;
  padding: 10px;

  border: 1px solid black;
  border-radius: 10px;
`;

export const LabelText = styled.p`
  margin-bottom: 5px;
`;

export const ErrorMessage = styled(FormicErrorMessage)`
  color: red;
`;

export const Button = styled.button`
  width: 40%;
  padding: 10px 20px;

  background-color: ${({ theme }) => theme.colors.buttonBg};
  border: none;
  border-radius: 5px;

  transition: background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;
