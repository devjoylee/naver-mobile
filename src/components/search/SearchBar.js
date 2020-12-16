import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PageWrapper,
  BackBtn,
  SearchBtn,
  ResetBtn,
  InputContainer,
  Input,
} from './Search.elements';

function SearchBar({ onAddKeyword }) {
  const [keyword, setKeyword] = useState('');

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const handleEnter = (e) => {
    if (keyword && e.keyCode === 13) {
      onAddKeyword(keyword);
      setKeyword('');
    }
  };

  const handleReset = () => {
    setKeyword('');
  };

  const hasKeyword = !!keyword;

  return (
    <PageWrapper>
      <Link to="/">
        <BackBtn />
      </Link>
      <InputContainer margin={{ left: 10, right: 10 }}>
        <Input
          placeholder="검색어를 입력해주세요."
          value={keyword}
          onChange={handleKeyword}
          onKeyDown={handleEnter}
        />
        <ResetBtn onClick={handleReset} active={hasKeyword} />
      </InputContainer>
      <SearchBtn />
    </PageWrapper>
  );
}

export default SearchBar;
