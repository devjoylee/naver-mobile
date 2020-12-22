import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import logo from '../../images/logo.png';
import { MenuIcon } from '../icons';

// logo
export const LogoContainer = styled(Container)`
  text-align: center;
`;

export const LogoImage = styled(Link)`
  display: inline-block;
  width: 180px;
  height: 35px;
  background: url(${logo}) no-repeat;
`;

// hamburger
export const Hamburger = styled(MenuIcon)`
  width: 25px;
  color: #555;
`;

// search box
export const InputBox = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #1fcf89;
  border-radius: 3px;
`;
