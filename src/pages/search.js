import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PageWrapper } from 'components/Common/styled';
import { OptionNav, OptionNavItem } from 'components/Common';
import { SearchBar, History } from 'components/Search';

export const SearchPage = () => {
  const [keywords, setKeywords] = useState(JSON.parse(localStorage.getItem('keywords') || '[]'));

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  const getDate = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${month}.${day}`;
  };

  const handleAddKeyword = (text) => {
    const newKeyword = {
      id: Date.now(),
      text,
      date: getDate(),
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
        <OptionNav>
          <OptionNavItem text='자동저장 끄기' />
          <OptionNavItem text='도움말' />
        </OptionNav>
      </SearchContainer>
    </PageWrapper>
  );
};

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  min-height: 200px;
`;
