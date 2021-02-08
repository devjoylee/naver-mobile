import React, { useEffect, useState, useRef } from 'react';
import {
  ScrollContainer,
  WebtoonContainer,
  Image,
  Title,
  Author,
} from '../Main.elements';
import { fetchWebtoons } from '../service';

function Webtoon() {
  const [webtoons, setWebtoons] = useState([]);
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

  useEffect(() => {
    async function fetchAndSetWebtoons() {
      const data = await fetchWebtoons();
      setWebtoons(data);
    }

    fetchAndSetWebtoons();
  }, []);

  if (!webtoons.length) {
    return null;
  }

  return (
    <ScrollContainer
      ref={slider}
      onMouseDown={mouseDown}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      onMouseUp={mouseUp}
    >
      {webtoons.map(({ id, title, image, author }) => (
        <WebtoonContainer key={id}>
          <Image src={image} alt="webtoon" />
          <Title>{title}</Title>
          <Author>{author}</Author>
        </WebtoonContainer>
      ))}
    </ScrollContainer>
  );
}

export default Webtoon;
