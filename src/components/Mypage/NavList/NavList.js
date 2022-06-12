import React from 'react';
import * as S from './styles';
import { VscChevronRight } from 'react-icons/vsc';
import { NavMypageData } from 'constants/NavMypage';

export const NavList = () => {
  return (
    <S.NavListContainer>
      {NavMypageData.map(({ icon, title, text }) => (
        <S.NavItem key={title}>
          <S.Icon>{icon()}</S.Icon>
          <S.ItemContent>
            <h3>{title}</h3>
            <p>{text}</p>
          </S.ItemContent>
          <S.Icon className='more'>
            <VscChevronRight />
          </S.Icon>
        </S.NavItem>
      ))}
    </S.NavListContainer>
  );
};
