import React, { useState } from 'react';
import styled from 'styled-components';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';

const SectionContainer = styled.div`
  margin-bottom: 10px;
  background: #fff;
  &:last-child {
    margin-bottom: 0;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  padding: 20px 15px;
  cursor: pointer;
`;

const Title = styled.h3`
  font-weight: bold;
  color: #333;
`;

const OpenIcon = styled.div`
  position: absolute;
  font-size: 22px;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  color: #777;
  cursor: pointer;
`;

const Content = styled.div`
  padding: ${({ padding }) => (padding ? '0 15px 20px 15px' : '')};
`;

function Section({ children, title, isOpened, padding }) {
  const [open, setOpen] = useState(isOpened);
  const handleToggle = () => {
    setOpen((isOpened = !open));
  };

  return (
    <SectionContainer>
      <TitleWrapper onClick={handleToggle}>
        <Title>{title}</Title>
        <OpenIcon>{open ? <VscChevronUp /> : <VscChevronDown />}</OpenIcon>
      </TitleWrapper>
      {open && <Content padding={padding}>{children}</Content>}
    </SectionContainer>
  );
}

export default Section;
