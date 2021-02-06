import React from 'react';
import { HelpBar, HelpBarItem } from '../common/HelpBar';

function HelpSearch() {
  return (
    <HelpBar padding={{ all: 15 }}>
      <HelpBarItem to="/" text="자동저장 끄기" />
      <HelpBarItem to="/" text="도움말" />
    </HelpBar>
  );
}

export default HelpSearch;
