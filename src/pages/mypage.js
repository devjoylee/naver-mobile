import React from 'react';
import { UserInfo } from '../components';
import Navbar from '../components/Mypage/Navbar';
import { PageWrapper } from '../globalStyles';

function MyPage() {
  return (
    <PageWrapper>
      <Navbar />
      <UserInfo />
    </PageWrapper>
  );
}

export default MyPage;
