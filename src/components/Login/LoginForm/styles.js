import styled from 'styled-components';
import { Input, Button } from 'components/Common/styled';

// login form
export const LoginForm = styled.form``;

export const LoginInput = styled(Input)`
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 15px;
  margin-left: 2px;
`;

export const LoginButton = styled(Button)`
  background-color: ${({ disabled, theme }) => (disabled ? '#bcbcbc' : theme.color.main00c)};
`;
