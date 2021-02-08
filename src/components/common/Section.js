import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-top: 30px;
`;

const SectionTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 7px;
  color: #333;
`;

function Section({ children, title }) {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
}

export default Section;
