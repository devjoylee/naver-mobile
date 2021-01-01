import React from 'react';
import { Link } from 'react-router-dom';
import { InputBox } from './Main.elements';

function SearchBox() {
  return (
    <Link to="/search">
      <InputBox />
    </Link>
  );
}

export default SearchBox;
