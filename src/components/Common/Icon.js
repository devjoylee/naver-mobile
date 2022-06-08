import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IconWrapper = styled.div`
  font-size: ${({ size }) => (size ? size + 'px' : '')};
  svg {
    fill: ${({ color }) => (color ? color : '')};
  }
  cursor: ${({ cursor }) => (cursor ? 'pointer' : 'auto')};
`;

function Icon({ children, ...props }) {
  if (!props.linkTo) {
    return <IconWrapper {...props}>{children}</IconWrapper>;
  }

  return (
    <IconWrapper {...props}>
      <Link to={props.linkTo}>{children}</Link>
    </IconWrapper>
  );
}

export default Icon;
