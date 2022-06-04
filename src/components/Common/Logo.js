import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const LogoWrapper = styled.div`
  text-align: center;
`;

const LogoImage = styled(Link)`
  display: inline-block;
  width: 180px;
  height: 35px;
  background: url(${logo}) no-repeat;
`;

function Logo() {
  return (
    <LogoWrapper>
      <LogoImage to="/" />
    </LogoWrapper>
    //
  );
}

export default Logo;
