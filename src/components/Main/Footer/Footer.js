import React from 'react';
import { useLogout } from 'hooks/useLogout';
import { useUserContext } from 'contexts/UserContext';
import { OptionNav, OptionNavItem } from 'components/Common';
import logoFooter from 'images/logo-footer.png';
import * as S from './styles';

export const Footer = () => {
  const { user } = useUserContext();
  const { handleLogOut } = useLogout();

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
