import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'components/Common';
import { ScrollNav } from 'components/Main';
import { BiMicrophone } from 'react-icons/bi';
import logo from 'images/logo01.png';
import * as S from './styles';

export const FixedHeader = () => {
  const searchRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200) {
        searchRef.current.style.visibility = 'visible';
        navRef.current.style.transform = 'translateY(0)';
        logoRef.current.style.transform = 'scale(1)';
      } else {
        searchRef.current.style.visibility = 'hidden';
        navRef.current.style.transform = 'translateY(-120px)';
        logoRef.current.style.transform = 'scale(0)';
      }
    });
  });

  return (
    <S.HeaderContainer>
      <S.SearchBar ref={searchRef}>
        <S.Logo ref={logoRef} onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt='' />
        </S.Logo>
        <Link to='/search' className='search'>
          검색어를 입력해주세요.
        </Link>
        <Icon size='32' color='#09B65A' className='mic'>
          <BiMicrophone />
        </Icon>
      </S.SearchBar>
      <ScrollNav ref={navRef} />
    </S.HeaderContainer>
  );
};
