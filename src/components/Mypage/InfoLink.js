import React from 'react';
import { LinkWrapper, LinkMenu, Title, Text } from './elements/InfoLink';
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
      {() => {
        switch (icon) {
          case 'icon1':
            return <Icon1 />;
          case 'icon2':
            return <Icon2 />;
          case 'icon3':
            return <Icon3 />;
          case 'icon4':
            return <Icon4 />;
          case 'icon5':
            return <Icon5 />;
          default:
            return;
        }
      }}
      <LinkMenu>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </LinkMenu>
      <LinkButton />
    </LinkWrapper>
  );
}

export default InfoLink;
