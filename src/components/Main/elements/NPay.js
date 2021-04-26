import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PayWrapper = styled.div`
  padding: 18px 15px;
  border: 1px solid #03c75a;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  b {
    font-weight: bold;
  }
`;

// pay button
export const StylePayText = styled.div`
  font-size: 14px;
  color: #666;
  letter-spacing: -1px;
  word-break: keep-all;
  line-height: 1.3;

  p {
    margin-top: 6px;
    color: #333;

    strong {
      font-weight: bold;
      font-size: 20px;
    }
  }
`;

export const StylePayButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px 15px;
  border-radius: 20px;
  background-color: #09b65a;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 170px;
  }
`;

export const StylePayButton = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  padding-right: 8px;
  color: #fff;
  position: relative;

  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.5px;
  cursor: pointer;

  &:last-child {
    padding-right: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 4px;
    width: 1px;
    background-color: #fff;
    opacity: 0.5;
  }

  &:last-child::after {
    opacity: 0;
  }
`;
