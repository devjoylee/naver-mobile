import React, { useEffect } from 'react';
import { UserInfo, Navbar, Logout, InfoLinks } from 'components/Mypage';
import { Container, PageWrapper } from 'components/Common/styled';
import { useUserContext } from 'contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

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
