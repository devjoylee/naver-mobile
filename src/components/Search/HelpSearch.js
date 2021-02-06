import React from 'react';
import { HelpBar, HelpBarItem } from '../common/HelpBar';
import { HelpContainer } from './Search.elements';

function HelpSearch() {
  return (
    <HelpContainer>
      <HelpBar>
        <HelpBarItem to="/" text="자동저장 끄기" />
        <HelpBarItem to="/" text="도움말" />
      </HelpBar>
    </HelpContainer>
  );
}

export default HelpSearch;
