import React, { useState } from 'react';
import styled from 'styled-components';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { Container } from '../../globalStyles';

const SectionContainer = styled.div`
  margin-bottom: 10px;
  border: 1px solid rgb(221, 221, 221);
`;

const TitleWrapper = styled.div`
  position: relative;
  padding: 20px 15px;
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

function Section({ children, title, isOpened }) {
  const [open, setOpen] = useState(isOpened);
  const handleToggle = () => {
    setOpen(isOpened === !open);
    console.log(open);
  };

  return (
    <SectionContainer>
      <TitleWrapper>
        <Title>{title}</Title>
        <OpenIcon onClick={handleToggle}>
          {open ? <VscChevronUp /> : <VscChevronDown />}
        </OpenIcon>
      </TitleWrapper>
      {open && <Container>{children}</Container>}
    </SectionContainer>
  );
}

export default Section;
