import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { RiCloseCircleFill } from 'react-icons/ri';
import { VscArrowLeft } from 'react-icons/vsc';
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
      <S.BackButton to='/'>
        <VscArrowLeft />
      </S.BackButton>
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
        <S.ResetButton onClick={handleReset} active={hasKeyword ? 1 : 0}>
          <RiCloseCircleFill />
        </S.ResetButton>
      </S.InputWrapper>
      <S.SearchButton onClick={() => handleSearch()}>
        <GoSearch />
      </S.SearchButton>
    </S.BarWrapper>
  );
};
