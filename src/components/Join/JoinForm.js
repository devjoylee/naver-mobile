import React from 'react';
import { Input } from '../Login/Login.elements';
import { LabelWrapper, JoinLabel, JoinButton } from './Join.elements';

function JoinForm() {
  return (
    <>
      <LabelWrapper>
        <JoinLabel htmlFor="id">아이디</JoinLabel>
        <Input type="text" id="id" name="id" />

        <JoinLabel htmlFor="psw1">비밀번호</JoinLabel>
        <Input type="password" id="psw1" name="psw1" />

        <JoinLabel htmlFor="psw2">비밀번호 재확인</JoinLabel>
        <Input type="password" id="psw2" name="psw2" />
      </LabelWrapper>
      <LabelWrapper>
        <JoinLabel htmlFor="name">이름</JoinLabel>
        <Input type="text" id="name" name="name" />
      </LabelWrapper>
      <JoinButton>가입하기</JoinButton>
    </>
  );
}

export default JoinForm;
