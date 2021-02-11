import React from 'react';
import {
  Logo,
  NavBtn,
  SearchBox,
  Section,
  Webtoon,
  RecommendWebtoon,
  WebtoonLinks,
  NPay,
} from '../components';
import { useUserContext } from '../contexts/UserContext';
import { Container, PageWrapper } from '../globalStyles';
import logoNpay from '../images/logo-npay.png';

function MainPage() {
  const { user } = useUserContext();
  const npay = <img src={logoNpay} alt="네이버페이"></img>;

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
        <Section title={npay} isOpened={true}>
          <Container padding={{ lr: 15 }}>
            <NPay />
          </Container>
        </Section>
        <Section title="날씨" isOpened={false}></Section>
      </Container>
    </PageWrapper>
  );
}

export default MainPage;
