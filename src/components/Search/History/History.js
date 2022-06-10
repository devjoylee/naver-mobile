import React from 'react';
import * as S from './styles';

export const History = ({ keywords, onRemoveKeyword, onClearList }) => {
  if (keywords.length === 0) {
    return (
      <S.ListContainer>
        <S.EmptyList>최근 검색어 내역이 없습니다.</S.EmptyList>
      </S.ListContainer>
    );
  }

  return (
    <S.ListContainer>
      <S.Header>
        <S.Title>최근 검색어</S.Title>
        <S.DeleteAll onClick={onClearList}>Clear</S.DeleteAll>
      </S.Header>
      <S.RecentList>
        {keywords.map(({ id, text, date }) => {
          return (
            <S.TextWrapper key={id}>
              <S.Icon />
              <S.Keyword>{text}</S.Keyword>
              <S.Date>{date}</S.Date>
              <S.RemoveButton onClick={() => onRemoveKeyword(id)} />
            </S.TextWrapper>
          );
        })}
      </S.RecentList>
    </S.ListContainer>
  );
};
