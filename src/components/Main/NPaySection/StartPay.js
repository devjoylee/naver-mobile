import React from 'react';
import { VscChevronRight } from 'react-icons/vsc';
import { StartPayText, StartPayButton } from '../Main.elements';

function StartPay() {
  return (
    <>
      <StartPayText>
        편리하고 안전한 <b>네이버페이를 시작하세요</b>
      </StartPayText>
      <StartPayButton>
        <VscChevronRight />
      </StartPayButton>
    </>
  );
}

export default StartPay;
