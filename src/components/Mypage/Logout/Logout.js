import React from 'react';
import * as S from './styles';
import { useHistory } from 'react-router-dom';
import { useUserContext } from 'contexts/UserContext';

function Logout() {
  const { setUser } = useUserContext();
  const history = useHistory();

  const handleLogOut = () => {
    // 1. context user 를 null 로 변경
    // 2. localStorage user 지우기
    // 3. history replace

    setUser(null);
    localStorage.removeItem('user');
    history.replace('./');
  };

  return <S.LogoutButton onClick={handleLogOut}>Log Out</S.LogoutButton>;
}

export default Logout;
