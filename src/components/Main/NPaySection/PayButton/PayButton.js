import React from 'react';
import * as S from './styles';

export function PayText({ children }) {
  return <S.StylePayText>{children}</S.StylePayText>;
}

export function PayButtonWrapper({ children }) {
  return <S.StylePayButtonWrapper>{children}</S.StylePayButtonWrapper>;
}

export function PayButton({ text, isLinked, ...rest }) {
  const preventClick = (e) => {
    if (!isLinked) e.preventDefault();
  };

  return (
    <S.StylePayButton {...rest} onClick={preventClick}>
      {text}
    </S.StylePayButton>
  );
}
