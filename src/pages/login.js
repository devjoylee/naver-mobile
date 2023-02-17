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
        <OptionNavItem text='Forgot My ID' />
        <OptionNavItem text='Forgot My Password' />
        <OptionNavItem to='/join' text='Sign Up' bold />
      </OptionNav>
    </PageWrapper>
  );
};
