import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../images/logo.png';

const LogoContainer = styled.div`
  padding: 40px 0;
  text-align: center;
  img {
    width: 180px;
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </LogoContainer>
  );
}

export default Logo;
