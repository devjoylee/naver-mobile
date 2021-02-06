import React from 'react';
import { HelpBar, HelpBarItem } from '../common/HelpBar';

function HelpLogin() {
  return (
    <HelpBar center padding={{ top: 15 }}>
      <HelpBarItem to="/" text="아이디 찾기" />
      <HelpBarItem to="/" text="비밀번호 찾기" />
      <HelpBarItem to="/" text="회원가입" $bold />
    </HelpBar>
  );
}

export default HelpLogin;
