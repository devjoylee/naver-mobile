import styled from 'styled-components';

// login form
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #dadada;
  margin-bottom: 10px;
  padding: 5px;
  background: #fff;
  box-sizing: border-box;
`;

export const LoginButton = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  background-color: ${({ disabled }) => (disabled ? '#bcbcbc' : '#1fcf89')};
  color: #fff;
`;
