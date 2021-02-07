import React, { useEffect, useState } from 'react';
import {
  ScrollContainer,
  WebtoonContainer,
  Image,
  Title,
  Author,
} from './Main.elements';
import { fetchWebtoons } from './service';

function Webtoon() {
  const [webtoons, setWebtoons] = useState([]);
  useEffect(() => {
    async function fetchAndSetWebtoons() {
      const data = await fetchWebtoons();
      setWebtoons(data);
    }

    fetchAndSetWebtoons();
  }, []);

  if (!webtoons.length) {
    return null;
  }

  return (
    <>
      <h3>오늘의 추천 웹툰</h3>
      <ScrollContainer>
        {webtoons.map(({ id, title, image, author }) => (
          <WebtoonContainer key={id}>
            <Image src={image} alt="webtoon" />
            <Title>{title}</Title>
            <Author>{author}</Author>
          </WebtoonContainer>
        ))}
      </ScrollContainer>
    </>
  );
}

export default Webtoon;
