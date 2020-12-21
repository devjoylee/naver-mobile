import React from 'react';
import { Container } from '../../globalStyles';
import { Input, LoginButton } from './Login.elements';

function Form() {
  return (
    <Container padding={{ top: 100, left: 20, right: 20 }}>
      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" />
      <LoginButton>로그인</LoginButton>
    </Container>
  );
}

export default Form;
