import React, { useRef } from 'react';
import styled from 'styled-components';

export const ScrollContainer = ({ children }) => {
  const slider = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  const mouseDown = (e) => {
    isDown = true;
    slider.current.classList.add('active');
    startX = e.pageX - slider.current.offsetLeft;
    scrollLeft = slider.current.scrollLeft;
  };

  const mouseLeave = () => {
    isDown = false;
    slider.current.classList.remove('active');
  };

  const mouseUp = () => {
    isDown = false;
    slider.current.classList.remove('active');
  };

  const mouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.current.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <Container
      ref={slider}
      onMouseDown={mouseDown}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      onMouseUp={mouseUp}
    >
      {children}
    </Container>
  );
};

const Container = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  cursor: pointer;

  -webkit-overflow-scrolling: touch; // only IOS

  &::-webkit-scrollbar {
    display: none;
  }
`;
