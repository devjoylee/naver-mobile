import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

export const OptionNav = ({ children, ...rest }) => {
  return <S.OptionNavBlock {...rest}>{children}</S.OptionNavBlock>;
};

export const OptionNavItem = ({ text, to, onClick }) => {
  return (
    <S.OptionNavItemBlock>
      {to ? (
        <Link to={to}>{text}</Link>
      ) : onClick ? (
        <span onClick={onClick}>{text}</span>
      ) : (
        <span>{text}</span>
      )}
    </S.OptionNavItemBlock>
  );
};
