import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Logo, BackBtn, HelpLogin } from '../components';
import { Container, PageWrapper } from '../globalStyles';

function LoginPage() {
  return (
    <PageWrapper graybg padding>
      <Link to="/">
        <BackBtn />
      </Link>
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
