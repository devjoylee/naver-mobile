import React from 'react';
import { HelpBar, HelpBarItem } from '../common/HelpBar';

function HelpLogin() {
  return (
    <HelpBar center>
      <HelpBarItem to="/" text="아이디 찾기" />
      <HelpBarItem to="/" text="비밀번호 찾기" />
      <HelpBarItem to="/join" text="회원가입" $bold />
    </HelpBar>
  );
}

export default HelpLogin;
