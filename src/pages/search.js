import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SearchBar, History, Setting } from '../components/';

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

  const GrayBackground = styled.div`
    height: 100%;
    background: #e1e1e1;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    min-height: 200px;
  `;

  return (
    <GrayBackground>
      <Container>
        <SearchBar onAddKeyword={handleAddKeyword} />
        <History keywords={keywords} />
        <Setting />
      </Container>
    </GrayBackground>
  );
}

export default SearchPage;
