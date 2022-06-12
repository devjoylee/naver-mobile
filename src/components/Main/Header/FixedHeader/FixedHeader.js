import React, { useEffect, useRef } from 'react';
import * as S from './styles';
import logo from 'images/logo01.png';
import { Icon } from 'components/Common';
import { ScrollNav } from 'components/Main';
import { BiMicrophone } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const FixedHeader = () => {
  const searchRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200) {
        searchRef.current.style.opacity = '1';
        navRef.current.style.transform = 'translateY(0)';
        logoRef.current.style.transform = 'scale(1)';
      } else {
        searchRef.current.style.opacity = '0';
        navRef.current.style.transform = 'translateY(-120px)';
        logoRef.current.style.transform = 'scale(0)';
      }
    });
  });

  return (
    <S.HeaderContainer>
      <S.SearchBar ref={searchRef}>
        <Link to='/' className='logo' ref={logoRef}>
          <img src={logo} alt='' />
        </Link>
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
