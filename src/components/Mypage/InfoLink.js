import React from 'react';
import { LinkContainer, LinkTitle, LinkText } from './Mypage.elements';

function InfoLink({ title, text, to }) {
  return (
    <LinkContainer to={to}>
      <LinkTitle>{title}</LinkTitle>
      <LinkText>{text}</LinkText>
    </LinkContainer>
  );
}

export default InfoLink;
