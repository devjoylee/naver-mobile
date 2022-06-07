import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from 'styles/globalStyles';
import { LoginPage, MainPage, MyPage, SearchPage, JoinPage } from 'pages';

const Container = styled.div`
  max-width: 720px;
  height: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Routes>
        <Route path='/' index element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/join' element={<JoinPage />} />
      </Routes>
    </Container>
  );
}

export default App;
