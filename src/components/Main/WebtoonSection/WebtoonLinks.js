import React from 'react';
import { LinkWrapper, WebtoonLink } from '../Main.elements';
import { BiCalendar, BiBookHeart } from 'react-icons/bi';
import { SiLinewebtoon } from 'react-icons/si';

function WebtoonLinks() {
  const today = new Date();
  const day = today.toLocaleDateString('ko-KR', {
    weekday: 'short',
  });

  return (
    <LinkWrapper>
      <WebtoonLink>
        <SiLinewebtoon />
        웹툰 홈
      </WebtoonLink>
      <WebtoonLink>
        <BiCalendar />
        {day}요웹툰
      </WebtoonLink>
      <WebtoonLink>
        <BiBookHeart />
        MY웹툰
      </WebtoonLink>
    </LinkWrapper>
    //
  );
}

export default WebtoonLinks;
