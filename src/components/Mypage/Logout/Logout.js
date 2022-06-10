import React from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from 'contexts/UserContext';

export const Logout = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return <S.LogoutButton onClick={handleLogOut}>Log Out</S.LogoutButton>;
};
