import React from 'react';
import { useUserContext } from 'contexts/UserContext';
import { Link } from 'react-router-dom';
import logo from 'images/logo-s.png';
import defaultImage from 'images/default-profile.png';
import { RiEdit2Fill } from 'react-icons/ri';
import * as S from './styles';

export const MyHeader = () => {
  const { user } = useUserContext();
  const { id, name, image } = user;

  return (
    <S.MyHeaderContainer>
      <S.HeaderTitle>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>
        <h2>My Page</h2>
      </S.HeaderTitle>
      <S.UserProfile>
        <img src={image ? image : defaultImage} alt='profile' />
        <S.ProfileDetail>
          <p className='name'>
            {name}
            <S.EditIcon>
              <RiEdit2Fill />
            </S.EditIcon>
          </p>
          <p className='email'>{id}@naver.com</p>
          <S.Buttons>
            <span>내 인증서</span>
            <span>QR체크인</span>
          </S.Buttons>
        </S.ProfileDetail>
      </S.UserProfile>
    </S.MyHeaderContainer>
  );
};
