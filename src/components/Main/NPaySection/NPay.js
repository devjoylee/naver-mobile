import React from 'react';
import { PayWrapper, PayLink } from '../Main.elements';
import { VscChevronRight } from 'react-icons/vsc';

function NPay() {
  return (
    <PayWrapper>
      <p>
        편리하고 안전한 <b>네이버페이를 시작하세요</b>
      </p>
      <PayLink>
        <VscChevronRight />
      </PayLink>
    </PayWrapper>
  );
}

export default NPay;
