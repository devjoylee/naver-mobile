import React from 'react';
import { GoSearch } from 'react-icons/go';
import { VscClose } from 'react-icons/vsc';
import * as S from './styles';

export const History = ({ keywords, onRemoveKeyword, onClearList }) => {
  if (keywords.length === 0) {
    return (
      <S.ListContainer>
        <S.EmptyList>
          There is no recent searches.
          {/* 최근 검색어 내역이 없습니다. */}
          <span>
            If you need a help, please check our <b>F&Q</b>.
            {/* 설정이 초기화된다면 <b>도움말</b>을 확인해주세요. */}
          </span>
        </S.EmptyList>
      </S.ListContainer>
    );
  }

  return (
    <S.ListContainer>
      <S.Header>
        <p>Search History</p>
        <S.DeleteAll onClick={onClearList}>Clear All</S.DeleteAll>
      </S.Header>
      <S.RecentList>
        {keywords.map(({ id, text, date }) => (
          <S.TextWrapper key={id}>
            <S.Icon className='icon'>
              <GoSearch />
            </S.Icon>
            <S.Keyword>{text}</S.Keyword>
            <S.Date>{date}</S.Date>
            <S.RemoveButton
              onClick={() => onRemoveKeyword(id)}
              className='icon'
            >
              <VscClose />
            </S.RemoveButton>
          </S.TextWrapper>
        ))}
      </S.RecentList>
    </S.ListContainer>
  );
};
