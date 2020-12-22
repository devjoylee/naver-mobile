import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Logo, BackBtn } from '../components';
import { PageWrapper } from '../globalStyles';

function LoginPage() {
  return (
    <PageWrapper graybg padding>
      <Link to="/">
        <BackBtn />
      </Link>
      <Logo />
      <Form />
    </PageWrapper>
  );
}

export default LoginPage;
