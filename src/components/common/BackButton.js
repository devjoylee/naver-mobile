import React from 'react';
import Icon from './Icon';
import { VscArrowLeft } from 'react-icons/vsc';

function BackButton() {
  return (
    <Icon size="26" color="#999" linkTo="/">
      <VscArrowLeft />
    </Icon>
  );
}

export default BackButton;
