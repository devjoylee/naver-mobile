import React from 'react';
import { useUserContext } from 'contexts/UserContext';
import { GET_RECOMMENDS, fetcher } from 'utils/api';
import useSWR from 'swr';
import * as S from './styles';

export const RecommendWebtoon = () => {
  const { data: recommends } = useSWR(GET_RECOMMENDS, fetcher);
  const {
    user: { name },
  } = useUserContext(); // 로그인 한 유저정보에서 이름 값 추출

  return (
    <>
      <S.RecommendTitle>{name}님을 위한 추천</S.RecommendTitle>
      {recommends?.map(({ id, title, image, author }) => (
        <S.RecommendRow key={id}>
          <S.ImgWrapper>
            <S.Image src={image} />
          </S.ImgWrapper>
          <S.TextWrapper>
            <S.Title>{title}</S.Title>
            <S.Author>{author}</S.Author>
          </S.TextWrapper>
          <S.WatchNow>
            <b>첫 화</b>
            <br />
            바로보기
          </S.WatchNow>
        </S.RecommendRow>
      ))}
    </>
  );
};
