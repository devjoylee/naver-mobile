import styled from 'styled-components';
import { Input, Button } from '../../../globalStyles';

// login form
export const LoginInput = styled(Input)`
  margin-bottom: 10px;
`;

export const LoginButton = styled(Button)`
  background-color: ${({ disabled }) => (disabled ? '#bcbcbc' : '#1fcf89')};
`;
