import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyles';

const StyleHelpBar = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
`;

const StyleHelpBarItem = styled(Link)`
  position: relative;
  padding-right: 10px;
  margin-right: 10px;
  font-size: 14px;
  color: #888;
  cursor: pointer;

  ${({ $bold }) =>
    $bold &&
    `
  font-weight: bold;
  color: #03a742;
  `}

  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 17px;
    background-color: #bbb;
  }

  &:last-child::after {
    width: 0;
  }
`;

export function HelpBar({ children, ...rest }) {
  return <StyleHelpBar {...rest}>{children}</StyleHelpBar>;
}

export function HelpBarItem({ text, ...rest }) {
  return <StyleHelpBarItem {...rest}>{text}</StyleHelpBarItem>;
}
