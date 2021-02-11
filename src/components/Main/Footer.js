import React from 'react';
import { HelpBar, HelpBarItem } from '../common/HelpBar';
import { FooterContainer, FooterLogoImage } from './Main.elements';
import logoFooter from '../../images/logo-footer.png';

function Footer() {
  return (
    <FooterContainer>
      <HelpBar center borderNone paddingNone>
        <HelpBarItem to="/" text="로그아웃" isLinked={false} />
        <HelpBarItem to="/" text="전체서비스" isLinked={false} />
        <HelpBarItem to="/" text="PC버전" isLinked={false} />
      </HelpBar>
      <HelpBar center borderNone paddingNone>
        <HelpBarItem to="/" text="이용약관" isLinked={false} />
        <HelpBarItem to="/" text="개인정보처리방침" isLinked={false} />
        <HelpBarItem to="/" text="고객센터" isLinked={false} />
      </HelpBar>
      <FooterLogoImage src={logoFooter} alt="푸터로고" />
    </FooterContainer>
  );
}

export default Footer;
