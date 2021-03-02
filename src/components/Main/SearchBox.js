import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const InputBox = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #1fcf89;
  border-radius: 3px;
  padding-left: 12px;
  box-sizing: border-box;

  &::placeholder {
    color: #dadada;
    font-size: 16px;
  }
`;

function SearchBox() {
  return (
    <Link to="/search">
      <InputBox placeholder="검색어를 입력해주세요" />
    </Link>
  );
}

export default SearchBox;
