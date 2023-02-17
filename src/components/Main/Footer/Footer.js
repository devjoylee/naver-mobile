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
          <OptionNavItem text='Logout' onClick={handleLogOut} bold />
        ) : (
          <OptionNavItem to='/login' text='Login' bold />
        )}
        <OptionNavItem text='Apps' />
        <OptionNavItem text='Desktop Site' />
      </OptionNav>
      <OptionNav center borderNone paddingNone>
        <OptionNavItem text='Terms Of Service' />
        <OptionNavItem text='Security' />
        <OptionNavItem text='Contact Us' />
        {/* 전체서비스 PC버전 이용약관 개인정보처리방침 고객센터 */}
      </OptionNav>
      <S.FooterLogoImage src={logoFooter} alt='푸터로고' />
    </S.FooterContainer>
  );
};
