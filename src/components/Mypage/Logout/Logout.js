import React from 'react';
import * as S from './styles';
import { useLogout } from 'hooks/useLogout';

export const Logout = () => {
  const { handleLogOut } = useLogout();

  return <S.LogoutButton onClick={handleLogOut}>로그아웃</S.LogoutButton>;
};
