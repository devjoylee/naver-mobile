import React from 'react';
import InfoLink from './InfoLink';

function InfoLinks() {
  return (
    <>
      <InfoLink
        icon="icon1"
        title="회원정보 수정"
        text="휴대전화 등 내 정보를 변경하세요."
      />
      <InfoLink
        icon="icon2"
        title="보안 설정 및 비밀번호 변경"
        text="안전한 보안설정으로 정보를 보호하세요."
      />
      <InfoLink
        icon="icon3"
        title="네이버 인증서"
        text="공인인증서 대신 네이버 인증서 간편발급"
      />
      <InfoLink
        icon="icon4"
        title="네이버 전자문서"
        text="나만 봐야하는 고지서·안내문을 안전하게"
      />
      <InfoLink
        icon="icon5"
        title="자격증"
        text="빠르고 정확하게 내 자격증 확인 "
      />
    </>
  );
}

export default InfoLinks;
