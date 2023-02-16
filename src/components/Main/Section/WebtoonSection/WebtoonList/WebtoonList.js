import React from 'react';
import { ScrollContainer, Skeleton } from 'components/Common';
import { Webtoons } from 'constants/Webtoons';
import * as S from './styles';

export const WebtoonList = () => {
  // const { data: webtoons } = useSWR(GET_WEBTOONS, fetcher);

  return (
    <ScrollContainer>
      {Webtoons
        ? Webtoons.popular?.map(({ id, title, image, author }) => (
            <S.WebtoonContainer key={id}>
              <S.Image src={image} alt='webtoon' />
              <S.TextWrapper>
                <S.Title>{title}</S.Title>
                <S.Author>{author}</S.Author>
              </S.TextWrapper>
            </S.WebtoonContainer>
          ))
        : [...Array(4)].map((_, i) => (
            <S.WebtoonContainer key={i}>
              <Skeleton h='115' />
              <Skeleton h='12' />
              <Skeleton h='12' />
            </S.WebtoonContainer>
          ))}
    </ScrollContainer>
  );
};
