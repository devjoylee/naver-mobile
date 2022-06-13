import React, { useState } from 'react';
import * as S from './styles';
import { ScrollContainer } from 'components/Common';
import { NavLink } from 'react-router-dom';
import { NavMainData } from 'constants/NavMain';

export const ScrollNav = ({ className }) => {
  const [active, setActive] = useState('홈');
  const handleClick = (name) => {
    if (name === '홈') window.scrollTo(0, 0);
    setActive(name);
  };

  return (
    <S.NavBarContainer className={className}>
      <ScrollContainer initX={300}>
        <S.NavBar>
          {NavMainData.map(({ name, link }) => (
            <S.NavItem
              key={name}
              onClick={() => handleClick(name)}
              className={active === name ? 'active' : ''}
            >
              <NavLink to={link}>{name}</NavLink>
            </S.NavItem>
          ))}
        </S.NavBar>
      </ScrollContainer>
    </S.NavBarContainer>
  );
};
