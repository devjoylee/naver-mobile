import React, { useEffect, useRef, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { RiCloseCircleFill } from 'react-icons/ri';
import { VscArrowLeft } from 'react-icons/vsc';
import * as S from './styles';

export const SearchBar = ({ onAddKeyword }) => {
  const [keyword, setKeyword] = useState('');
  const iconRef = useRef(null);

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

  useEffect(() => {
    iconRef.current.style.transform = 'scale(1)';
  }, []);

  return (
    <S.BarWrapper>
      <S.BackButton to='/' ref={iconRef}>
        <VscArrowLeft />
      </S.BackButton>
      <S.InputWrapper>
        <S.Input
          autoFocus
          placeholder='Search here.'
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
