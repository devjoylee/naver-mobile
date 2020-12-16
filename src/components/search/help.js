import React from 'react';
import styled from 'styled-components';

const Footer = styled.ul`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-top: 1px solid #ddd;
  color: #888;

  & > li:first-child {
    padding-right: 10px;
    margin-right: 10px;
    position: relative;
  }

  & > li:first-child::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 17px;
    background-color: #aaa;
  }
`;

function Help() {
  return (
    <Footer>
      <li>자동저장 끄기</li>
      <li>도움말</li>
    </Footer>
  );
}

export default Help;
