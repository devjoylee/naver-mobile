import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { useUserContext } from 'contexts/UserContext';
import { fetcher } from 'utils/fetcher';

export const RecommendWebtoon = () => {
  const [recommend, setRecommend] = useState([]);
  const {
    user: { name },
  } = useUserContext(); // 로그인 한 유저정보에서 이름 값 추출

  useEffect(() => {
    fetcher('/api/recommend').then((data) => setRecommend(data.webtoons));
  }, []);

  return (
    <>
      <S.RecommendTitle>{name}님을 위한 추천</S.RecommendTitle>
      {recommend?.map(({ id, title, image, author }) => (
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
