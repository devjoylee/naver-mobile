import React from 'react';
import * as S from './styles';
import logoSmall from 'images/logo-s.png';

function Navbar() {
  return (
    <S.Nav>
      <S.HomeLogo to='/'>
        <img src={logoSmall} alt='' />
      </S.HomeLogo>
      <S.NavTitle>My Page</S.NavTitle>
    </S.Nav>
  );
}

export default Navbar;
