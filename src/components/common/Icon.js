import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IconWrapper = styled.span`
  font-size: ${({ size }) => (size ? size + 'px' : '')};
  color: ${({ color }) => (color ? color : '')};
`;

function Icon({ children, size, color, linkTo }) {
  if (!linkTo) {
    return (
      <IconWrapper size={size} color={color}>
        {children}
      </IconWrapper>
    );
  }

  return (
    <IconWrapper size={size} color={color}>
      <Link to={linkTo}>{children}</Link>
    </IconWrapper>
  );
}

export default Icon;
