import React from 'react';
import { UserPayText, UserPayButtons, Button } from '../Main.elements';

function UserPay() {
  return (
    <>
      <UserPayText>
        네이버페이 포인트
        <p>
          <b>10,800</b>원
        </p>
      </UserPayText>
      <UserPayButtons>
        <Button>충전</Button>
        <Button>인출</Button>
        <Button>포인트선물</Button>
      </UserPayButtons>
    </>
  );
}

export default UserPay;
