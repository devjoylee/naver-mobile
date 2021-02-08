import React from 'react';
import styled from 'styled-components';
import { Container } from '../../globalStyles';

const SectionContainer = styled.div`
  margin-top: 30px;
  background: #eee;
`;

const Title = styled.h3`
  font-weight: bold;
  color: #333;
`;

function Section({ children, title }) {
  return (
    <SectionContainer>
      <Container padding={{ all: 15 }}>
        <Title>{title}</Title>
      </Container>
      <Container padding={{ bottom: 15 }}>{children}</Container>
    </SectionContainer>
  );
}

export default Section;
