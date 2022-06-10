import React, { useState } from 'react';
import { BackButton } from 'components/Common';
import * as S from './styles';

export const SearchBar = ({ onAddKeyword }) => {
  const [keyword, setKeyword] = useState('');

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = () => {
    if (keyword) {
      onAddKeyword(keyword);
      setKeyword('');
    }
  };

  const handleReset = () => {
    setKeyword('');
  };

  const hasKeyword = !!keyword;

  return (
    <S.BarWrapper>
      <BackButton />
      <S.InputWrapper>
        <S.Input
          autoFocus
          placeholder='검색어를 입력해주세요.'
          value={keyword}
          onChange={handleKeyword}
          onKeyDown={(e) => {
            if (e.keyCode === 13) handleSearch();
          }}
        />
        <S.ResetButton onClick={handleReset} active={hasKeyword ? 1 : 0} />
      </S.InputWrapper>
      <S.SearchButton onClick={() => handleSearch()} />
    </S.BarWrapper>
  );
};
