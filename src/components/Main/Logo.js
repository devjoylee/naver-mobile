import React from 'react';
import { LogoContainer, LogoImage } from './Main.elements';

function Logo() {
  return (
    <LogoContainer padding={{ top: 40, bottom: 60 }}>
      <LogoImage to="/" />
    </LogoContainer>
  );
}

export default Logo;
