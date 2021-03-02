import React, { useEffect, useState } from 'react';
import {
  RecommendTitle,
  RecommendRow,
  Image,
  Title,
  Author,
  ImgWrapper,
  TextWrapper,
  WatchNow,
} from '../../elements/Webtoon';
import { useUserContext } from '../../../../contexts/UserContext';
import { fetchRecommend } from '../../service';

function RecommendWebtoon() {
  const [recommend, setRecommend] = useState([]);
  const {
    user: { name },
  } = useUserContext(); // 로그인 한 유저정보에서 이름 값 추출

  useEffect(() => {
    async function fetchAndSetRecommend() {
      const data = await fetchRecommend();
      setRecommend(data);
    }

    fetchAndSetRecommend();
  }, []);

  if (!recommend.length) {
    return null;
  }

  return (
    <>
      <RecommendTitle>{name}님을 위한 추천</RecommendTitle>
      {recommend.map(({ id, title, image, author }) => (
        <RecommendRow key={id}>
          <ImgWrapper>
            <Image src={image} />
          </ImgWrapper>
          <TextWrapper>
            <Title>{title}</Title>
            <Author>{author}</Author>
          </TextWrapper>
          <WatchNow>
            <b>첫 화</b>
            <br />
            바로보기
          </WatchNow>
        </RecommendRow>
      ))}
    </>
  );
}

export default RecommendWebtoon;
