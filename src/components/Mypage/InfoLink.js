import React from 'react';
import { LinkContainer, LinkTitle, LinkText, LinkBtn } from './Mypage.elements';

function InfoLink({ title, text, to }) {
  return (
    <LinkContainer to={to}>
      <LinkTitle>{title}</LinkTitle>
      <LinkText>{text}</LinkText>
      <LinkBtn style={{ position: 'absolute' }} />
    </LinkContainer>
  );
}

export default InfoLink;
