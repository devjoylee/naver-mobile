import React from 'react';
import { VscMenu } from 'react-icons/vsc';
import Icon from 'components/shared/Icon';
import Logo from 'components/shared/Logo';
import { Container } from 'styles/globalStyles';

function NavBtn() {
  return (
    <>
      <Icon size='22' linkTo='/mypage'>
        <VscMenu />
      </Icon>
      <Container margin={{ top: 20, bottom: 25 }}>
        <Logo />
      </Container>
    </>
  );
}

export default NavBtn;
