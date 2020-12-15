import React, { useEffect, useState } from 'react';
import SearchBar from '../components/search/search-bar';

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

  return <SearchBar onAddKeyword={handleAddKeyword} />;
}

export default SearchPage;
