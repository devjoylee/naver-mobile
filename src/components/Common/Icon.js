import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ size }) => (size ? size + 'px' : '')};
  svg {
    fill: ${({ color }) => (color ? color : '')};
  }
  cursor: pointer;
`;

function Icon({ children, ...props }) {
  if (!props.linkTo) {
    return (
      <IconWrapper {...props} className='icon'>
        {children}
      </IconWrapper>
    );
  }

  return (
    <IconWrapper {...props} className='icon'>
      <Link to={props.linkTo}>{children}</Link>
    </IconWrapper>
  );
}

export default Icon;
