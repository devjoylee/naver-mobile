import React from 'react';
import { Logo, NavBtn, SearchBox, Webtoon } from '../components';
import { Container, PageWrapper } from '../globalStyles';

function MainPage() {
  return (
    <PageWrapper padding>
      <NavBtn />
      <Container margin={{ top: 20, bottom: 30 }}>
        <Logo />
      </Container>
      <Container margin={{ bottom: 30 }}>
        <SearchBox />
      </Container>
      <Webtoon />
    </PageWrapper>
  );
}

export default MainPage;
