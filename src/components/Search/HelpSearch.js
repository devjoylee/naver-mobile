import React from 'react';
import { HelpBar, HelpBarItem } from '../common/HelpBar';

function HelpSearch() {
  return (
    <HelpBar>
      <HelpBarItem to="/" text="자동저장 끄기" isLinked={false} />
      <HelpBarItem to="/" text="도움말" isLinked={false} />
    </HelpBar>
  );
}

export default HelpSearch;
