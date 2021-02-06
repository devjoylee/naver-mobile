import React from 'react';
import { Logo } from '../components';
import JoinForm from '../components/Join/JoinForm';
import { PageWrapper } from '../globalStyles';

function join() {
  return (
    <PageWrapper graybg padding>
      <Logo />
      <JoinForm />
    </PageWrapper>
  );
}

export default join;
