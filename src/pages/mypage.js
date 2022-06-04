import React from 'react';
import { UserInfo, Navbar, Logout, InfoLinks } from 'components/Mypage';
import { Container, PageWrapper } from 'styles/globalStyles';

function MyPage() {
  return (
    <PageWrapper graybg>
      <Navbar />
      <UserInfo />
      <InfoLinks />
      <Container padding={{ tb: 20 }}>
        <Logout />
      </Container>
    </PageWrapper>
  );
}

export default MyPage;
