import React from 'react';
import {
  StylePayText,
  StylePayButtonWrapper,
  StylePayButton,
} from '../../elements/NPay';

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
