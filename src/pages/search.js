import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SearchBar, History, Setting } from '../components/';
import { PageWrapper } from '../globalStyles';

const SearchContainer = styled.div`
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
    <PageWrapper graybg>
      <SearchContainer>
        <SearchBar onAddKeyword={handleAddKeyword} />
        <History
          keywords={keywords}
          onRemoveKeyword={handleRemoveKeyword}
          onClearList={handleClearList}
        />
        <Setting />
      </SearchContainer>
    </PageWrapper>
  );
}

export default SearchPage;
