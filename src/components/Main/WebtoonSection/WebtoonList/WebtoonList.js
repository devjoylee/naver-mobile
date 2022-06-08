import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { ScrollContainer } from '../';
import { fetcher } from 'utils/fetcher';

function WebtoonList() {
  const [webtoons, setWebtoons] = useState([]);

  useEffect(() => {
    let isRendered = false;
    fetcher('/api/webtoons').then((data) => {
      if (!isRendered) setWebtoons(data.webtoons);
    });

    return () => {
      isRendered = true;
    };
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

export default WebtoonList;
