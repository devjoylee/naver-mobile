import React from 'react';
import { SectionLayout } from 'components/Main';
import * as S from './styles';

export const WeatherSection = () => {
  return (
    <SectionLayout title='날씨' isOpened={false} padding>
      <S.Empty> 현재 위치의 날씨 정보를 찾을 수 없습니다.</S.Empty>
    </SectionLayout>
  );
};
