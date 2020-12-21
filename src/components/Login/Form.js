import React from 'react';
import { Input, LoginButton } from './Login.elements';

function Form() {
  return (
    <>
      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" />
      <LoginButton to="/">로그인</LoginButton>
    </>
  );
}

export default Form;
