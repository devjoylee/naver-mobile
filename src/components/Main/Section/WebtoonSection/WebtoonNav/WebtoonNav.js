import React from 'react';
import * as S from './styles';
import { BiCalendar, BiBookHeart } from 'react-icons/bi';
import { SiWebtoon } from 'react-icons/si';

export const WebtoonNav = () => {
  const today = new Date();
  const day = today.toLocaleDateString('en', {
    weekday: 'long',
  });

  return (
    <S.LinkWrapper>
      <S.WebtoonLink>
        <SiWebtoon />
        Webtoon Home
      </S.WebtoonLink>
      <S.WebtoonLink>
        <BiCalendar />
        {day} Webtoons
      </S.WebtoonLink>
      <S.WebtoonLink>
        <BiBookHeart />
        My Subscriptions
      </S.WebtoonLink>
    </S.LinkWrapper>
  );
};
