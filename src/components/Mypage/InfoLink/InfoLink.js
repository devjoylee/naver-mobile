import React from 'react';
import * as S from './styles';
import {
  VscAccount as Icon1,
  VscLock as Icon2,
  VscShield as Icon3,
  VscGistSecret as Icon4,
  VscPreview as Icon5,
  VscChevronRight as LinkButton,
} from 'react-icons/vsc';

function InfoLink({ icon, title, text }) {
  const getIcon = () => {
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
  };

  return (
    <S.LinkWrapper>
      {getIcon()}
      <S.LinkMenu>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
      </S.LinkMenu>
      <LinkButton />
    </S.LinkWrapper>
  );
}

export default InfoLink;
