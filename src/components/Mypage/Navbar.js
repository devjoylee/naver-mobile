import React from 'react';
import { NavContainer, HomeLogo, NavTitle } from './Mypage.elements';
import logoSmall from '../../images/logo-s.png';

function Navbar() {
  return (
    <NavContainer>
      <HomeLogo to="/">
        <img src={logoSmall} alt="" />
      </HomeLogo>
      <NavTitle>My Page</NavTitle>
    </NavContainer>
  );
}

export default Navbar;
