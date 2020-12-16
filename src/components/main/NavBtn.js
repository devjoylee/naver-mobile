import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, Hamburger } from './Main.elements';

function NavBtn() {
  return (
    <NavContainer padding={{ top: 15, bottom: 15, left: 20, right: 20 }}>
      <Link to="/login">
        <Hamburger />
      </Link>
    </NavContainer>
  );
}

export default NavBtn;
