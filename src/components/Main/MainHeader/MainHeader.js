import React from 'react';
import { VscMenu } from 'react-icons/vsc';
import Icon from 'components/Common/Icon';
import Logo from 'components/Common/Logo';
import { Container } from 'styles/globalStyles';
import { useUserContext } from 'contexts/UserContext';

function MainHeader() {
  const { user } = useUserContext();

  return (
    <>
      <Icon size='22' linkTo={user ? '/mypage' : '/login'}>
        <VscMenu />
      </Icon>
      <Container margin={{ top: 20, bottom: 25 }}>
        <Logo />
      </Container>
    </>
  );
}

export default MainHeader;
