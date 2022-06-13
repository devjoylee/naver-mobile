import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'components/Common';
import { ScrollNav } from 'components/Main';
import { BiMicrophone } from 'react-icons/bi';
import logo from 'images/logo01.png';
import * as S from './styles';

export const FixedHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let y = window.pageYOffset;
      if (y > 100 && y < 300) setIsVisible(y > 200);
    });
  });

  return (
    <S.HeaderContainer className={isVisible ? 'visible' : 'hidden'}>
      <S.SearchBar>
        <S.Logo onClick={() => window.scrollTo(0, 0)} className={isVisible ? 'visible' : 'hidden'}>
          <img src={logo} alt='' />
        </S.Logo>
        <Link to='/search' className='search'>
          검색어를 입력해주세요.
        </Link>
        <Icon size='32' color='#09B65A'>
          <BiMicrophone />
        </Icon>
      </S.SearchBar>
      <ScrollNav className={isVisible ? 'visible' : 'hidden'} />
    </S.HeaderContainer>
  );
};
