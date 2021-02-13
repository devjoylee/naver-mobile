import React from 'react';
import { LinkWrapper, LinkMenu, Title, Text } from './Mypage.elements';
import {
  VscAccount as Icon1,
  VscLock as Icon2,
  VscShield as Icon3,
  VscGistSecret as Icon4,
  VscPreview as Icon5,
  VscChevronRight as LinkButton,
} from 'react-icons/vsc';

function InfoLink({ icon, title, text }) {
  return (
    <LinkWrapper>
      {icon === 'icon1' ? (
        <Icon1 />
      ) : icon === 'icon2' ? (
        <Icon2 />
      ) : icon === 'icon3' ? (
        <Icon3 />
      ) : icon === 'icon4' ? (
        <Icon4 />
      ) : icon === 'icon5' ? (
        <Icon5 />
      ) : (
        ''
      )}
      <LinkMenu>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </LinkMenu>
      <LinkButton />
    </LinkWrapper>
  );
}

export default InfoLink;
