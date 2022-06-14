import React from 'react';
import { Container, PageWrapper } from 'components/Common/styled';
import { Logo, BackButton, OptionNav, OptionNavItem } from 'components/Common';
import { LoginForm } from 'components/Login';

export const LoginPage = () => {
  return (
    <PageWrapper graybg padding>
      <BackButton />
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
