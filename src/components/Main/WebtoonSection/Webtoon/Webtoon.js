import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { ScrollContainer } from 'components/Main';
import { fetcher } from 'utils/fetcher';

function Webtoon() {
  const [webtoons, setWebtoons] = useState([]);

  useEffect(() => {
    fetcher('/api/webtoons').then((data) => setWebtoons(data.webtoons));
  }, []);

  return (
    <ScrollContainer>
      {webtoons?.map(({ id, title, image, author }) => (
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
