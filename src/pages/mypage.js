import React from 'react';
import { UserInfo } from '../components';
import Navbar from '../components/Mypage/Navbar';
import Logout from '../components/Mypage/Logout';
import { PageWrapper } from '../globalStyles';

function MyPage() {
  return (
    <PageWrapper graybg>
      <Navbar />
      <UserInfo />
      <Logout />
    </PageWrapper>
  );
}

export default MyPage;
