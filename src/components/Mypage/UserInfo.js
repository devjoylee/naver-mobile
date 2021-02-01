import React from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';

function UserInfo() {
  const { user } = useUserContext();
  if (!user) return null;

  const { id, name, image } = user;

  return (
    <ul>
      <li>
        <img src={image} />
      </li>
      <li>아이디 : {id}@naver.com</li>
      <li>이름 : {name}</li>
      <Link to="/">HOME</Link>
    </ul>
  );
}

export default UserInfo;
