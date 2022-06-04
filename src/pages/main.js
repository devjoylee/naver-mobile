import React from 'react';
import styled from 'styled-components';
import { useUserContext } from 'contexts/UserContext';
import { Container, PageWrapper } from 'styles/globalStyles';
import logoNpay from 'images/logo-npay.png';
import { Section } from 'components/Common';
import {
  SearchBox,
  NPay,
  Webtoon,
  RecommendWebtoon,
  WebtoonNav,
  Weather,
  Footer,
  MainHeader,
} from 'components/Main';

const SectionWrapper = styled.div`
  padding: 0 15px;
  background: linear-gradient(to bottom, #fff 5%, #eff2f8 40%);
  margin: 0px -20px;
`;

function MainPage() {
  const { user } = useUserContext();
  const npay = <img src={logoNpay} alt='네이버페이'></img>;

  return (
    <PageWrapper padding>
      <MainHeader />
      <Container margin={{ bottom: 30 }}>
        <SearchBox />
      </Container>
      <SectionWrapper>
        <Section title='오늘의 추천 웹툰' isOpened={true}>
          <Webtoon />
          {user && (
            <Container padding={{ left: 15, right: 15 }}>
              <RecommendWebtoon />
            </Container>
          )}
          <WebtoonNav />
        </Section>
        <Section title={npay} isOpened={true} padding>
          <NPay />
        </Section>
        <Section title='날씨' isOpened={false} padding>
          <Weather />
        </Section>
      </SectionWrapper>
      <Footer />
    </PageWrapper>
  );
}

export default MainPage;
