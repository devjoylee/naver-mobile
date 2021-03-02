import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { LogoutButton } from './elements/Logout';

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

  return <LogoutButton onClick={handleLogOut}>Log Out</LogoutButton>;
}

export default Logout;
