import React from 'react';
import * as S from './styles';
import logo from 'images/logo01.png';
import { Icon } from 'components/Common';
import { BiMicrophone } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { NavMainData } from 'constants/NavMain';
import { ScrollContainer } from '../WebtoonSection';

export const FixedHeader = () => {
  return (
    <S.HeaderContainer>
      <S.SearchBar>
        <Link to='/' className='logo'>
          <img src={logo} alt='' />
        </Link>
        <Link to='/search' className='search'>
          검색어를 입력해주세요.
        </Link>
        <Icon size='32' color='#09B65A' className='mic'>
          <BiMicrophone />
        </Icon>
      </S.SearchBar>
      <ScrollContainer>
        <S.NavBar>
          {NavMainData.map(({ name, link }) => (
            <li key={name}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </S.NavBar>
      </ScrollContainer>
    </S.HeaderContainer>
  );
};
