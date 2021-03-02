import React from 'react';
import styled from 'styled-components';

const Empty = styled.p`
  font-size: 14px;
  padding-bottom: 10px;
  color: #888;
  letter-spacing: -1px;
  text-align: center;
`;

function Weather() {
  return <Empty> 현재 위치의 날씨 정보를 찾을 수 없습니다.</Empty>;
}

export default Weather;
