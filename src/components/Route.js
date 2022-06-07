import React from 'react';
import { Route as BaseRoute, useNavigate } from 'react-router-dom';
import { useUserContext } from 'contexts/UserContext';

function Route({ auth, ...props }) {
  const { user } = useUserContext();
  const navigate = useNavigate();

  // 로그인 x : 로그인페이지로
  if (auth && !user) {
    navigate('/login');
  }

  // 로그인 o : 해당 링크로
  // return <BaseRoute {...props} />;
}

export default Route;
