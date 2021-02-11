import React from 'react';
import { HelpBar, HelpBarItem } from '../common/HelpBar';

function HelpSearch() {
  return (
    <HelpBar>
      <HelpBarItem
        to="/"
        text="자동저장 끄기"
        onClick={(e) => e.preventDefault()}
      />
      <HelpBarItem to="/" text="도움말" onClick={(e) => e.preventDefault()} />
    </HelpBar>
  );
}

export default HelpSearch;
