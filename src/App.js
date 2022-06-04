import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyles from 'styles/globalStyles';
import Route from './components/Route';
import ScrollToTop from 'utils/ScrollToTop';
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
      <Router>
        <ScrollToTop />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/login' component={LoginPage} />
          <Route auth path='/mypage' component={MyPage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/join' component={JoinPage} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
