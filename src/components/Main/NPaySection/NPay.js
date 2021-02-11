import React from 'react';
import { useUserContext } from '../../../contexts/UserContext';
import { PayWrapper } from '../Main.elements';
import StartPay from './StartPay';
import UserPay from './UserPay';

function NPay() {
  const { user } = useUserContext();
  return <PayWrapper>{user ? <UserPay /> : <StartPay />}</PayWrapper>;
}

export default NPay;
