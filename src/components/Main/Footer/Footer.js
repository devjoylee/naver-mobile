import React from 'react';
import * as S from './styles';
import { HelpBar, HelpBarItem } from 'components/Common/HelpBar';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from 'contexts/UserContext';
import logoFooter from 'images/logo-footer.png';

function Footer() {
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
      <HelpBar center borderNone paddingNone>
        {user ? (
          <HelpBarItem text='로그아웃' onClick={handleLogOut} />
        ) : (
          <HelpBarItem to='/login' text='로그인' />
        )}
        <HelpBarItem text='전체서비스' />
        <HelpBarItem text='PC버전' />
      </HelpBar>
      <HelpBar center borderNone paddingNone>
        <HelpBarItem text='이용약관' />
        <HelpBarItem text='개인정보처리방침' />
        <HelpBarItem text='고객센터' />
      </HelpBar>
      <S.FooterLogoImage src={logoFooter} alt='푸터로고' />
    </S.FooterContainer>
  );
}

export default Footer;
