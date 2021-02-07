import React from 'react';
import { LinkWrapper, LinkTitle, LinkText, LinkBtn } from './Mypage.elements';

function InfoLink({ title, text }) {
  return (
    <LinkWrapper>
      <LinkTitle>{title}</LinkTitle>
      <LinkText>{text}</LinkText>
      <LinkBtn />
    </LinkWrapper>
  );
}

export default InfoLink;
