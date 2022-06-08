import React from 'react';
import { useUserContext } from 'contexts/UserContext';
import { SectionLayout } from 'components/Main';
import { Container } from 'components/Common/styled';
import { WebtoonList, WebtoonNav, RecommendWebtoon } from './';

export const WebtoonSection = () => {
  const { user } = useUserContext();
  return (
    <SectionLayout title='오늘의 추천 웹툰' isOpened={true}>
      <WebtoonList />
      {user && (
        <Container padding={{ left: 15, right: 15 }}>
          <RecommendWebtoon />
        </Container>
      )}
      <WebtoonNav />
    </SectionLayout>
  );
};
