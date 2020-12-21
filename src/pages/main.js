import React from 'react';
import { Logo, NavBtn, SearchBox } from '../components';
import { PageWrapper } from '../globalStyles';

function MainPage() {
  return (
    <PageWrapper padding>
      <NavBtn />
      <Logo />
      <SearchBox />
    </PageWrapper>
  );
}

export default MainPage;
