import React from 'react';
import { Logo, NavBtn, SearchBox, Section, Webtoon } from '../components';
import { Container, PageWrapper } from '../globalStyles';

function MainPage() {
  return (
    <PageWrapper padding>
      <NavBtn />
      <Container padding={{ all: 20 }}>
        <Container margin={{ bottom: 30 }}>
          <Logo />
        </Container>
        <SearchBox />
        <Section title="오늘의 추천 웹툰">
          <Webtoon />
        </Section>
      </Container>
    </PageWrapper>
  );
}

export default MainPage;
