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
        // 로그인했을 때
        <S.PayContainer>
          <S.Text>
            네이버페이 포인트 <br />
            <strong>10,800</strong> 원
          </S.Text>
          <S.Buttons>
            <S.LinkButton to='/'>충전</S.LinkButton>
            <S.LinkButton to='/'>인출</S.LinkButton>
            <S.LinkButton to='/'>포인트선물</S.LinkButton>
          </S.Buttons>
        </S.PayContainer>
      ) : (
        // 로그인 안 했을 때
        <S.PayContainer>
          <S.Text>
            편리하고 안전한 <b>네이버페이를 시작하세요</b>
          </S.Text>
          <S.Buttons>
            <S.LinkButton to='/login'>로그인 후 시작</S.LinkButton>
          </S.Buttons>
        </S.PayContainer>
      )}
    </SectionLayout>
  );
};
