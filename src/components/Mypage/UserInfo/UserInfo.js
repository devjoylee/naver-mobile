import React from 'react';
import * as S from './styles';
import { useUserContext } from 'contexts/UserContext';
import defaultImage from 'images/default-profile.png';

function UserInfo() {
  const { user } = useUserContext();
  const { id, name, image } = user;

  return (
    <S.InfoWrapper>
      <S.ProfileImage src={image ? image : defaultImage} />
      <S.ProfileDetail>
        <S.Name>
          {name}
          <S.EditButton />
        </S.Name>
        <S.Email>{id}@naver.com</S.Email>
        <S.Buttons>
          <span>내 인증서</span>
          <span>QR체크인</span>
        </S.Buttons>
      </S.ProfileDetail>
    </S.InfoWrapper>
  );
}

export default UserInfo;
