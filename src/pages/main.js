import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from 'components/Common/styled';
import * as M from 'components/Main';

export const MainPage = () => {
  return (
    <PageWrapper graybg>
      <M.FixedHeader />
      <M.MainHeader />
      <SectionWrapper>
        <M.WebtoonSection />
        <M.NPaySection />
        <M.WeatherSection />
      </SectionWrapper>
      <M.Footer />
    </PageWrapper>
  );
};

const SectionWrapper = styled.main`
  padding: 0 15px;
  background: linear-gradient(to bottom, #fff 5%, #eff2f8 40%);
`;
