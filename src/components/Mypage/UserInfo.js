import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
import {
  InfoContainer,
  ProfileImage,
  ProfileDetail,
  EditButton,
} from './Mypage.elements';

function UserInfo() {
  const { user } = useUserContext();
  if (!user) return null;

  const { id, name, image } = user;

  return (
    <InfoContainer padding={{ tb: 24, lr: 20 }}>
      <ProfileImage src={image} />
      <ProfileDetail>
        <h3>
          {name}
          <span>
            <EditButton />
          </span>
        </h3>
        <p>{id}@naver.com</p>
        <ul>
          <li>내 인증서</li>
          <li>QR체크인</li>
        </ul>
      </ProfileDetail>
    </InfoContainer>
  );
}

export default UserInfo;
