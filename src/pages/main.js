import React from 'react';
import { Logo, NavBtn, SearchBox, Webtoon } from '../components';
import { Container, PageWrapper } from '../globalStyles';

function MainPage() {
  return (
    <PageWrapper padding>
      <NavBtn />
      <Container padding={{ top: 20, bottom: 30 }}>
        <Logo />
      </Container>
      <SearchBox />
      <Webtoon />
    </PageWrapper>
  );
}

export default MainPage;
