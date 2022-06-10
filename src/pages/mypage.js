import React, { useEffect } from 'react';
import { MyHeader, Logout, NavList } from 'components/Mypage';
import { Container, PageWrapper } from 'components/Common/styled';
import { useUserContext } from 'contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export const MyPage = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  return (
    <PageWrapper graybg>
      <MyHeader />
      <NavList />
      <Container padding={{ tb: 20 }}>
        <Logout />
      </Container>
    </PageWrapper>
  );
};
