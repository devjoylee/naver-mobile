import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SearchBar, History, Setting } from '../components/';

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

  const handleRemoveKeyword = (id) => {
    setKeywords(
      keywords.filter((keyword) => {
        return keyword.id !== id;
      })
    );
  };

  const handleClearList = () => {
    setKeywords([]);
  };

  return (
    <GrayBackground>
      <Container>
        <SearchBar onAddKeyword={handleAddKeyword} />
        <History
          keywords={keywords}
          onRemoveKeyword={handleRemoveKeyword}
          onClearList={handleClearList}
        />
        <Setting />
      </Container>
    </GrayBackground>
  );
}

export default SearchPage;
