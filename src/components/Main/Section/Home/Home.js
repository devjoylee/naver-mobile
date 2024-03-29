import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from 'contexts/UserContext';
import { Icon } from 'components/Common';
import { VscMenu, VscBell, VscCreditCard } from 'react-icons/vsc';
import { BiMicrophone } from 'react-icons/bi';
import logo from 'images/logo01.png';
import * as S from './styles';

export const Home = () => {
  const { user } = useUserContext();

  return (
    <S.HomeContainer>
      <S.HomeNav>
        <Icon size='24' linkTo={user ? '/mypage' : '/login'}>
          <VscMenu />
        </Icon>
        <Icon size='28'>
          <VscCreditCard />
        </Icon>
        <Icon size='24'>
          <VscBell />
        </Icon>
      </S.HomeNav>
      <S.SearchBarContainer>
        <S.SearchBar>
          <S.Logo>
            <img src={logo} alt='' />
          </S.Logo>
          <Link to='/search' className='search'>
            Search here.
          </Link>
          <Icon size='32' color='#09B65A'>
            <BiMicrophone />
          </Icon>
        </S.SearchBar>
      </S.SearchBarContainer>
    </S.HomeContainer>
  );
};
