import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BarWrapper,
  BackBtn,
  SearchBtn,
  ResetBtn,
  InputWrapper,
  Input,
} from './Search.elements';

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
      <Link to="/">
        <BackBtn />
      </Link>
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
        <ResetBtn onClick={handleReset} active={hasKeyword ? 1 : 0} />
      </InputWrapper>
      <SearchBtn onClick={() => handleSearch()} />
    </BarWrapper>
  );
}

export default SearchBar;
