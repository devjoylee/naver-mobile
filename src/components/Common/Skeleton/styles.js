import styled from 'styled-components';

export const SkeletonContainer = styled.div`
  margin-bottom: 7px;
  border-radius: 3px;
  opacity: 0.7;
  overflow: hidden;
  background: ${({ theme }) => theme.color.bg3};
  position: relative;

  width: 100%;
  height: 100%;
`;

export const Hightlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: loading 1.5s infinite;

  &::before {
    content: '';
    width: 5%;
    height: 100%;
    background-color: #ccc;
    box-shadow: 0 0 30px 30px #ccc;
    position: absolute;
  }

  @keyframes loading {
    0% {
      transform: translateX(-20%);
    }
    100% {
      transform: translate(150%);
    }
  }
`;
