import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 20px;
`;

const InputBox = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #1fcf89;
  border-radius: 3px;
`;

function SearchBox() {
  return (
    <Container>
      <Link to="/search">
        <InputBox />
      </Link>
    </Container>
  );
}

export default SearchBox;
