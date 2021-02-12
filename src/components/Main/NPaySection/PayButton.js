import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StylePayText = styled.div`
  font-size: 14px;
  color: #666;
  letter-spacing: -1px;
  word-break: keep-all;

  p {
    margin-top: 6px;
    color: #333;

    strong {
      font-weight: bold;
      font-size: 20px;
    }
  }
`;

export const StylePayButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 15px;
  border-radius: 20px;
  background-color: #09b65a;
  cursor: pointer;
`;

export const StylePayButton = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  padding-right: 8px;
  color: #fff;
  position: relative;

  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.5px;
  cursor: pointer;

  &:last-child {
    padding-right: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 4px;
    width: 1px;
    background-color: #fff;
    opacity: 0.5;
  }

  &:last-child::after {
    opacity: 0;
  }
`;

export function PayText({ children }) {
  return <StylePayText>{children}</StylePayText>;
}

export function PayButtonWrapper({ children }) {
  return <StylePayButtonWrapper>{children}</StylePayButtonWrapper>;
}

export function PayButton({ text, isLinked, ...rest }) {
  const preventClick = (e) => {
    if (!isLinked) e.preventDefault();
  };

  return (
    <StylePayButton {...rest} onClick={preventClick}>
      {text}
    </StylePayButton>
  );
}
