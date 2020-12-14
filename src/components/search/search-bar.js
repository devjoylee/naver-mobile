import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeftIcon, SearchIcon, ResetIcon } from '../icons';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #1fcf89;
  padding: 15px;
  margin: 0 10px;
`;

const ArrowLeftIconStyle = styled(ArrowLeftIcon)`
  width: 25px;
  color: #333;
`;

const SearchIconStyle = styled(SearchIcon)`
  width: 25px;
  color: #1fcf89;
`;

const ResetIconStyle = styled(ResetIcon)`
  width: 20px;
  color: #ccc;
  position: absolute;
  right: 0;
`;

const InputContainer = styled.div`
  flex: 1;
  position: relative;
  margin: 0 10px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  background-color: #fff;
  padding-right: 20px;
  box-sizing: border-box;
`;

function SearchBar() {
  return (
    <Container>
      <Link to="/">
        <ArrowLeftIconStyle />
      </Link>
      <InputContainer>
        <Input placeholder="검색어를 입력해주세요." />
        <ResetIconStyle />
      </InputContainer>
      <SearchIconStyle />
    </Container>
  );
}

export default SearchBar;
