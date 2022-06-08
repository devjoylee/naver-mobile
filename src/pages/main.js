import React from 'react';
import styled from 'styled-components';
import { Container, PageWrapper } from 'components/Common/styled';
import { Section } from 'components/Common';
import { useUserContext } from 'contexts/UserContext';
import logoNpay from 'images/logo-npay.png';
import * as M from 'components/Main';

const SectionWrapper = styled.main`
  padding: 0 15px;
  background: linear-gradient(to bottom, #fff 5%, #eff2f8 40%);
`;

function MainPage() {
  const { user } = useUserContext();
  const npay = <img src={logoNpay} alt='네이버페이'></img>;

  return (
    <PageWrapper graybg>
      <M.MainHeader />
      <SectionWrapper>
        <Section title='오늘의 추천 웹툰' isOpened={true}>
          <M.Webtoon />
          {user && (
            <Container padding={{ left: 15, right: 15 }}>
              <M.RecommendWebtoon />
            </Container>
          )}
          <M.WebtoonNav />
        </Section>
        <Section title={npay} isOpened={true} padding>
          <M.NPay />
        </Section>
        <Section title='날씨' isOpened={false} padding>
          <M.Weather />
        </Section>
      </SectionWrapper>
      <M.Footer />
    </PageWrapper>
  );
}

export default MainPage;
