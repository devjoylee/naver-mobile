import React from 'react';
import { Container, PageWrapper } from 'components/Common/styled';
import { Logo, OptionNav, OptionNavItem, Icon } from 'components/Common';
import { LoginForm } from 'components/Login';
import { VscArrowLeft } from 'react-icons/vsc';

export const LoginPage = () => {
  return (
    <PageWrapper graybg padding>
      <Icon size='26' color='#666' linkTo='/'>
        <VscArrowLeft />
      </Icon>
      <Container margin={{ top: 35 }}>
        <Logo />
      </Container>
      <LoginForm />
      <OptionNav center>
        <OptionNavItem text='아이디 찾기' />
        <OptionNavItem text='비밀번호 찾기' />
        <OptionNavItem to='/join' text='회원가입' />
      </OptionNav>
    </PageWrapper>
  );
};
