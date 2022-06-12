import React from 'react';
import { Icon, Logo } from 'components/Common';
import { Container } from 'components/Common/styled';
import { useUserContext } from 'contexts/UserContext';
import { VscMenu } from 'react-icons/vsc';
import { BiMicrophone } from 'react-icons/bi';
import * as S from './styles';

export const MainHeader = () => {
  const { user } = useUserContext();

  return (
    <S.HeaderContainer>
      <Icon size='22' linkTo={user ? '/mypage' : '/login'}>
        <VscMenu />
      </Icon>
      <Container padding={{ top: 25, bottom: 30 }}>
        <Logo />
      </Container>
      <S.SearchBox to='/search'>
        <span>검색어를 입력해주세요</span>
        <Icon size='24' color='#09B65A'>
          <BiMicrophone />
        </Icon>
      </S.SearchBox>
    </S.HeaderContainer>
  );
};
