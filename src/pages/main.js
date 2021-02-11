import React from 'react';
import styled from 'styled-components';
import {
  Logo,
  NavBtn,
  SearchBox,
  Section,
  Webtoon,
  RecommendWebtoon,
  WebtoonLinks,
  NPay,
  Footer,
} from '../components';
import { useUserContext } from '../contexts/UserContext';
import { Container, PageWrapper } from '../globalStyles';
import logoNpay from '../images/logo-npay.png';

const SectionWrapper = styled.div`
  padding: 0 15px;
  background: linear-gradient(to bottom, #fff 5%, #eff2f8 75%);
  @media (max-width: 500px) {
    margin: 0px -20px;
  }
`;

function MainPage() {
  const { user } = useUserContext();
  const npay = <img src={logoNpay} alt="네이버페이"></img>;

  return (
    <PageWrapper padding>
      <NavBtn />
      <Container margin={{ top: 20, bottom: 25 }}>
        <Logo />
      </Container>
      <Container margin={{ bottom: 30 }}>
        <SearchBox />
      </Container>
      <SectionWrapper>
        <Section title="오늘의 추천 웹툰" isOpened={true}>
          <Webtoon />
          {user && (
            <Container padding={{ left: 15, right: 15 }}>
              <RecommendWebtoon />
            </Container>
          )}
          <WebtoonLinks />
        </Section>
        <Section title={npay} isOpened={true}>
          <Container padding={{ left: 15, right: 15, bottom: 20 }}>
            <NPay />
          </Container>
        </Section>
        <Section title="날씨" isOpened={false}></Section>
      </SectionWrapper>
      <Footer />
    </PageWrapper>
  );
}

export default MainPage;
