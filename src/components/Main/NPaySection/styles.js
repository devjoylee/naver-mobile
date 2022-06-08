import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PayContainer = styled.div`
  padding: 18px 15px;
  border: ${({ theme }) => theme.style.border_green};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 14px;
  color: #666;
  letter-spacing: -1px;
  word-break: keep-all;
  line-height: 1.3;
  strong {
    display: inline-block;
    margin-top: 6px;
    color: #333;
    font-weight: bold;
    font-size: 20px;
  }
  b {
    font-weight: bold;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  border-radius: 20px;
  background: ${({ theme }) => theme.color.main};
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    width: 170px;
  }
`;

export const LinkButton = styled(Link)`
  font-size: 14px;
  font-weight: bold;
  padding-right: 8px;
  color: #fff;
  position: relative;
  display: inline-block;
  vertical-align: top;
  letter-spacing: -0.5px;
  cursor: pointer;

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

  &:last-child {
    padding-right: 0;
    &::after {
      opacity: 0;
    }
  }

  &:focus,
  &:hover {
    color: #fff;
  }
`;
