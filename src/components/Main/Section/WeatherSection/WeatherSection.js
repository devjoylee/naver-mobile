import React from 'react';
import { SectionLayout } from 'components/Main';
import * as S from './styles';

export const WeatherSection = () => {
  return (
    <SectionLayout title='Weather' isOpened={false} padding>
      <S.Empty>There is no weather information available for your current location.</S.Empty>
      {/* <S.Empty> 현재 위치의 날씨 정보를 찾을 수 없습니다.</S.Empty> */}
    </SectionLayout>
  );
};
