import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

export const Logo = () => <LogoImage to='/' />;

const LogoImage = styled(Link)`
  display: block;
  margin: 0 auto;
  width: 170px;
  height: 35px;
  background: url(${logo}) no-repeat;
`;
