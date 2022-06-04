import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

function SearchBox() {
  return (
    <Link to='/search'>
      <S.InputBox placeholder='검색어를 입력해주세요' />
    </Link>
  );
}

export default SearchBox;
