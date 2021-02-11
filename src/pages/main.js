import React from 'react';
import {
  Logo,
  NavBtn,
  SearchBox,
  Section,
  Webtoon,
  RecommendWebtoon,
  WebtoonLinks,
} from '../components';
import { useUserContext } from '../contexts/UserContext';
import { Container, PageWrapper } from '../globalStyles';

function MainPage() {
  const { user } = useUserContext();
  return (
    <PageWrapper padding>
      <NavBtn />
      <Container padding={{ lr: 15 }}>
        <Container margin={{ top: 20, bottom: 25 }}>
          <Logo />
        </Container>
        <Container margin={{ bottom: 30 }}>
          <SearchBox />
        </Container>
        <Section title="오늘의 추천 웹툰" isOpened={true}>
          <Webtoon />
          {user && (
            <Container padding={{ lr: 15 }}>
              <RecommendWebtoon />
            </Container>
          )}
          <WebtoonLinks />
        </Section>
        <Section title="네이버페이" isOpened={true}></Section>
        <Section title="날씨" isOpened={false}></Section>
      </Container>
    </PageWrapper>
  );
}

export default MainPage;
