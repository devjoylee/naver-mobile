import React from 'react';
import { Link } from 'react-router-dom';
import { BoxContainer, InputBox } from './Main.elements';

function SearchBox() {
  return (
    <BoxContainer padding={{ left: 20, right: 20 }}>
      <Link to="/search">
        <InputBox />
      </Link>
    </BoxContainer>
  );
}

export default SearchBox;
