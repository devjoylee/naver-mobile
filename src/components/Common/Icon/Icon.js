import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

export const Icon = ({ children, ...props }) => {
  if (!props.linkTo) {
    return (
      <S.IconWrapper {...props} className='icon'>
        {children}
      </S.IconWrapper>
    );
  }

  return (
    <S.IconWrapper {...props} className='icon'>
      <Link to={props.linkTo}>{children}</Link>
    </S.IconWrapper>
  );
};
