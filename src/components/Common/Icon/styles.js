import styled from 'styled-components';

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ size }) => (size ? size + 'px' : '')};
  svg {
    display: block;
    fill: ${({ color }) => (color ? color : '')};
  }
  cursor: pointer;
`;
