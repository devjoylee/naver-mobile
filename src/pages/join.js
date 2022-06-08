import React from 'react';
import { Logo } from 'components/Common';
import { Container, PageWrapper } from 'components/Common/styled';
import { JoinForm } from 'components/Join';

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
