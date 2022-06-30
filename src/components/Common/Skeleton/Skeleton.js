import React from 'react';
import * as S from './styles';

export const Skeleton = ({ type, h, w }) => {
  return (
    <S.SkeletonContainer
      className={`skeleton ${type}`}
      style={{ height: h + 'px', width: w + 'px' }}
    >
      <S.Hightlight />
    </S.SkeletonContainer>
  );
};
