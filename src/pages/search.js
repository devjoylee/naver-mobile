import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../components/search/search-bar';
import History from '../components/search/history';

function SearchPage() {
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('keywords') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  const handleAddKeyword = (text) => {
    const newKeyword = {
      id: Date.now(),
      text,
    };

    setKeywords([newKeyword, ...keywords]);
  };

  console.log(keywords);

  const Container = styled.div`
    height: 100%;
    background: #e1e1e1;
  `;

  return (
    <Container>
      <SearchBar onAddKeyword={handleAddKeyword} />
      <History keywords={keywords} />
    </Container>
  );
}

export default SearchPage;
