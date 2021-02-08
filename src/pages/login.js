import React from 'react';
import { Form, Logo, BackButton, HelpLogin } from '../components';
import { Container, PageWrapper } from '../globalStyles';

function LoginPage() {
  return (
    <PageWrapper graybg padding>
      <BackButton />
      <Container margin={{ top: 35, bottom: 40 }}>
        <Logo />
      </Container>
      <Container margin={{ bottom: 40 }}>
        <Form />
      </Container>
      <HelpLogin />
    </PageWrapper>
  );
}

export default LoginPage;
