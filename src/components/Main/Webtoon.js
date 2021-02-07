import React from 'react';
import {
  ScrollContainer,
  WebtoonContainer,
  Image,
  Title,
  Author,
} from './Main.elements';

function Webtoon() {
  return (
    <>
      <ScrollContainer>
        <WebtoonContainer>
          <Image />
          <Title>바른연애 길잡이</Title>
          <Author>남수</Author>
        </WebtoonContainer>
      </ScrollContainer>
    </>
  );
}

export default Webtoon;
