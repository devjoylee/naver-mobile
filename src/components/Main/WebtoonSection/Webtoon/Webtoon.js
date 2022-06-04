import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { fetchWebtoons } from '../service';
import { ScrollContainer } from 'components/Main';

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
        <S.WebtoonContainer key={id}>
          <S.Image src={image} alt='webtoon' />
          <S.TextWrapper>
            <S.Title>{title}</S.Title>
            <S.Author>{author}</S.Author>
          </S.TextWrapper>
        </S.WebtoonContainer>
      ))}
    </ScrollContainer>
  );
}

export default Webtoon;
