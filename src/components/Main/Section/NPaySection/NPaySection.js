import React from 'react';
import { useUserContext } from 'contexts/UserContext';
import { SectionLayout } from 'components/Main';
import logoNpay from 'images/logo-npay.png';
import * as S from './styles';

export const NPaySection = () => {
  const { user } = useUserContext();
  const npay = <img src={logoNpay} alt='네이버페이'></img>;

  return (
    <SectionLayout title={npay} isOpened={true} padding>
      {user ? (
        // Logged in
        <S.PayContainer>
          <S.Text>
            Naver Pay Points
            <br />
            <strong>10,800</strong> won
          </S.Text>
          <S.Buttons>
            <S.LinkButton to='/'>Charge</S.LinkButton>
            <S.LinkButton to='/'>Withdraw</S.LinkButton>
            {/* <S.LinkButton to='/'>충전 인출 포인트선물</S.LinkButton> */}
          </S.Buttons>
        </S.PayContainer>
      ) : (
        // Not logged in
        <S.PayContainer>
          <S.Text>
            Enjoy your safe and hassle-free banking experience with <b>Naver Pay</b>
            {/* 편리하고 안전한 <b>네이버페이를 시작하세요</b> */}
          </S.Text>
          <S.Buttons>
            <S.LinkButton to='/login'>Get Started</S.LinkButton>
            {/* <S.LinkButton to='/login'>로그인 후 시작</S.LinkButton> */}
          </S.Buttons>
        </S.PayContainer>
      )}
    </SectionLayout>
  );
};
