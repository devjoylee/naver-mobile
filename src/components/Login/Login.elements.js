import styled from 'styled-components';
import { Link } from 'react-router-dom';

// login form
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #dadada;
  margin-bottom: 10px;
  padding: 5px;
  background: #fff;
  box-sizing: border-box;
`;

export const LoginButton = styled(Link)`
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #1fcf89;
  color: #fff;
`;
