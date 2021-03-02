import React, { useState } from 'react';
import { BackButton } from '..';
import {
  BarWrapper,
  ResetButton,
  InputWrapper,
  Input,
  SearchButton,
} from './elements/SearchBar';

function SearchBar({ onAddKeyword }) {
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
    <BarWrapper>
      <BackButton />
      <InputWrapper>
        <Input
          autoFocus
          placeholder="검색어를 입력해주세요."
          value={keyword}
          onChange={handleKeyword}
          onKeyDown={(e) => {
            if (e.keyCode === 13) handleSearch();
          }}
        />
        <ResetButton onClick={handleReset} active={hasKeyword ? 1 : 0} />
      </InputWrapper>
      <SearchButton onClick={() => handleSearch()} />
    </BarWrapper>
  );
}

export default SearchBar;
