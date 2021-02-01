import React from 'react';
import { UserInfo, Navbar, Logout, InfoLinks } from '../components';
import { PageWrapper } from '../globalStyles';

function MyPage() {
  return (
    <PageWrapper graybg>
      <Navbar />
      <UserInfo />
      <InfoLinks />
      <Logout />
    </PageWrapper>
  );
}

export default MyPage;
