import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'styles/DefaultTheme';
import GlobalStyles from 'styles/globalStyles';
import * as P from 'pages';

const Container = styled.div`
  max-width: 720px;
  height: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyles />
        <Routes>
          <Route path='/' index element={<P.MainPage />} />
          <Route path='/login' element={<P.LoginPage />} />
          <Route path='/mypage' element={<P.MyPage />} />
          <Route path='/search' element={<P.SearchPage />} />
          <Route path='/join' element={<P.JoinPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
