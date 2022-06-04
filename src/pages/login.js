import React from 'react';
import { Logo, BackButton } from '../components';
import { Container, PageWrapper } from 'styles/globalStyles';
import { LoginForm, HelpLogin } from 'components/Login';

function LoginPage() {
  return (
    <PageWrapper graybg padding>
      <BackButton />
      <Container margin={{ top: 35, bottom: 40 }}>
        <Logo />
      </Container>
      <Container margin={{ bottom: 40 }}>
        <LoginForm />
      </Container>
      <HelpLogin />
    </PageWrapper>
  );
}

export default LoginPage;
