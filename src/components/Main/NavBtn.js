import React from 'react';
import { Link } from 'react-router-dom';
import { Hamburger } from './Main.elements';

function NavBtn() {
  return (
    <Link to="/mypage">
      <Hamburger />
    </Link>
  );
}

export default NavBtn;
