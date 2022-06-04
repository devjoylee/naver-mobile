import React from 'react';
import { useUserContext } from 'contexts/UserContext';
import {
  InfoWrapper,
  ProfileImage,
  ProfileDetail,
  Name,
  EditButton,
  Email,
  Buttons,
} from './elements/UserInfo';

import defaultImage from '../../images/default-profile.png';

function UserInfo() {
  const { user } = useUserContext();
  if (!user) return null;

  const { id, name, image } = user;

  return (
    <InfoWrapper>
      <ProfileImage src={image ? image : defaultImage} />
      <ProfileDetail>
        <Name>
          {name}
          <EditButton />
        </Name>
        <Email>{id}@naver.com</Email>
        <Buttons>
          <span>내 인증서</span>
          <span>QR체크인</span>
        </Buttons>
      </ProfileDetail>
    </InfoWrapper>
  );
}

export default UserInfo;
