import React from 'react';
import { LinkWrapper, WebtoonLink } from '../Main.elements';

function WebtoonLinks() {
  const today = new Date();
  const day = today.toLocaleDateString('ko-KR', {
    weekday: 'short',
  });

  return (
    <LinkWrapper>
      <WebtoonLink>웹툰 홈</WebtoonLink>
      <WebtoonLink>{day}요웹툰</WebtoonLink>
      <WebtoonLink>MY웹툰</WebtoonLink>
    </LinkWrapper>
    //
  );
}

export default WebtoonLinks;
