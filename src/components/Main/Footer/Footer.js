import React from 'react';
import * as S from './styles';
import { OptionNav, OptionNavItem } from 'components/Common';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from 'contexts/UserContext';
import logoFooter from 'images/logo-footer.png';

export const Footer = () => {
  const { user } = useUserContext();
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <S.FooterContainer>
      <OptionNav center borderNone paddingNone>
        {user ? (
          <OptionNavItem text='로그아웃' onClick={handleLogOut} />
        ) : (
          <OptionNavItem to='/login' text='로그인' />
        )}
        <OptionNavItem text='전체서비스' />
        <OptionNavItem text='PC버전' />
      </OptionNav>
      <OptionNav center borderNone paddingNone>
        <OptionNavItem text='이용약관' />
        <OptionNavItem text='개인정보처리방침' />
        <OptionNavItem text='고객센터' />
      </OptionNav>
      <S.FooterLogoImage src={logoFooter} alt='푸터로고' />
    </S.FooterContainer>
  );
};
