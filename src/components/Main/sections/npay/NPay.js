import React from 'react';
import { useUserContext } from 'contexts/UserContext';
import { PayWrapper } from '../../elements/NPay';
import { PayText, PayButtonWrapper, PayButton } from './PayButton';

function NPay() {
  const { user } = useUserContext();
  return (
    <PayWrapper>
      {user ? (
        // 로그인했을 때
        <>
          <PayText>
            네이버페이 포인트
            <p>
              <strong>10,800</strong> 원
            </p>
          </PayText>
          <PayButtonWrapper>
            <PayButton to='/' text='충전' isLinked={false} />
            <PayButton to='/' text='인출' isLinked={false} />
            <PayButton to='/' text='포인트선물' isLinked={false} />
          </PayButtonWrapper>
        </>
      ) : (
        // 로그인 안 했을 때
        <>
          <PayText>
            편리하고 안전한 <b>네이버페이를 시작하세요</b>
          </PayText>
          <PayButtonWrapper>
            <PayButton to='/login' text='로그인 후 시작' isLinked={true} />
          </PayButtonWrapper>
        </>
      )}
    </PayWrapper>
  );
}

export default NPay;
