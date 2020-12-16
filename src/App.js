import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from './globalStyles';
import LoginPage from './pages/login';
import MainPage from './pages/main';
import MyPage from './pages/mypage';
import SearchPage from './pages/search';

const Container = styled.div`
  max-width: 720px;
  height: 100vh;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
