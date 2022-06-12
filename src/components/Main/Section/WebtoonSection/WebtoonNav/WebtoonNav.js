import React from 'react';
import * as S from './styles';
import { BiCalendar, BiBookHeart } from 'react-icons/bi';
import { SiWebtoon } from 'react-icons/si';

export const WebtoonNav = () => {
  const today = new Date();
  const day = today.toLocaleDateString('ko-KR', {
    weekday: 'short',
  });

  return (
    <S.LinkWrapper>
      <S.WebtoonLink>
        <SiWebtoon />
        웹툰 홈
      </S.WebtoonLink>
      <S.WebtoonLink>
        <BiCalendar />
        {day}요웹툰
      </S.WebtoonLink>
      <S.WebtoonLink>
        <BiBookHeart />
        MY웹툰
      </S.WebtoonLink>
    </S.LinkWrapper>
  );
};
