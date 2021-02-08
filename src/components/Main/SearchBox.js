import React from 'react';
import { Link } from 'react-router-dom';
import { InputBox } from './Main.elements';

function SearchBox() {
  return (
    <Link to="/search">
      <InputBox placeholder="검색어를 입력해주세요" />
    </Link>
  );
}

export default SearchBox;
