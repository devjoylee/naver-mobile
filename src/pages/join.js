import React from 'react';
import { Logo } from '../components';
import JoinForm from '../components/Join/JoinForm';
import { Container, PageWrapper } from '../globalStyles';

function JoinPage() {
  return (
    <PageWrapper graybg padding>
      <Container margin={{ top: 40, bottom: 40 }}>
        <Logo />
      </Container>
      <JoinForm />
    </PageWrapper>
  );
}

export default JoinPage;
