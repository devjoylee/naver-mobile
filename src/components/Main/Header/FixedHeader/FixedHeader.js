import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'components/Common';
import { ScrollNav } from 'components/Main';
import { BiMicrophone } from 'react-icons/bi';
import logo from 'images/logo01.png';
import * as S from './styles';

export const FixedHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
    setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let y = window.pageYOffset;
      if (y > 100 && y < 300) setIsVisible(y > 200);
    });
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.HeaderContainer className={isVisible ? 'visible' : 'hidden'}>
      <S.SearchBar>
        <S.Logo onClick={handleClick} className={isVisible ? 'visible' : 'hidden'}>
          <img src={logo} alt='' />
        </S.Logo>
        <Link to='/search' className='search'>
          Search here
        </Link>
        <Icon size='32' color='#09B65A'>
          <BiMicrophone />
        </Icon>
      </S.SearchBar>
      <ScrollNav className={isVisible ? 'visible' : 'hidden'} />
    </S.HeaderContainer>
  );
};
