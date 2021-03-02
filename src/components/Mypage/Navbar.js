import React from 'react';
import { Nav, HomeLogo, NavTitle } from './elements/Navbar';
import logoSmall from '../../images/logo-s.png';

function Navbar() {
  return (
    <Nav>
      <HomeLogo to="/">
        <img src={logoSmall} alt="" />
      </HomeLogo>
      <NavTitle>My Page</NavTitle>
    </Nav>
  );
}

export default Navbar;
