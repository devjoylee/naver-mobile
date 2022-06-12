import React, { useState } from 'react';
import { VscChevronUp } from 'react-icons/vsc';
import * as S from './styles';

export const SectionLayout = ({ children, title, isOpened, padding }) => {
  const [open, setOpen] = useState(isOpened);
  const handleToggle = () => setOpen((isOpened = !open));

  return (
    <S.SectionContainer>
      <S.TitleWrapper onClick={handleToggle}>
        <S.Title>{title}</S.Title>
        <S.OpenIcon open={open}>
          <VscChevronUp />
        </S.OpenIcon>
      </S.TitleWrapper>
      {open && <S.Content padding={padding}>{children}</S.Content>}
    </S.SectionContainer>
  );
};

export default SectionLayout;
