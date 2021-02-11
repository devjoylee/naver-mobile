import React from 'react';
import { HelpBar, HelpBarItem } from '../common/HelpBar';

function HelpLogin() {
  return (
    <HelpBar center>
      <HelpBarItem to="/" text="아이디 찾기" isLinked={false} />
      <HelpBarItem to="/" text="비밀번호 찾기" isLinked={false} />
      <HelpBarItem to="/join" text="회원가입" $bold isLinked={true} />
    </HelpBar>
  );
}

export default HelpLogin;
