import React, { useEffect, useState } from 'react';
import { WebtoonContainer, Image, Title, Author } from '../Main.elements';
import { fetchWebtoons } from '../service';
import ScrollContainer from './ScrollContainer';

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
    <ScrollContainer>
      {webtoons.map(({ id, title, image, author }) => (
        <WebtoonContainer key={id}>
          <Image src={image} alt="webtoon" />
          <Title>{title}</Title>
          <Author>{author}</Author>
        </WebtoonContainer>
      ))}
    </ScrollContainer>
  );
}

export default Webtoon;
