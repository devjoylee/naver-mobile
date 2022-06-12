import styled from 'styled-components';

export const NavBarContainer = styled.div`
  background-image: linear-gradient(to right, #09c665 0, #07bb7b 100%);
  transition: all 0.2s ease-in-out;
  transform: translateY(-120px);
  position: relative;
  z-index: 900;

  &::before,
  &::after {
    content: '';
    width: 20px;
    height: 100%;
    top: 0;
    position: absolute;
    z-index: 100;
  }
  &::before {
    left: 0;
    background-image: linear-gradient(to right, #09c665 0, rgba(9, 198, 101, 0) 100%);
  }
  &::after {
    right: 0;
    background-image: linear-gradient(to left, #07bb7b 0, rgba(7, 187, 123, 0) 100%);
  }
`;

export const NavBar = styled.ul`
  width: auto;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

export const NavItem = styled.li`
  height: 55px;
  line-height: 55px;
  font-weight: 600;
  opacity: 0.6;
  color: #fff;
  &.active {
    opacity: 1;
  }
  a {
    display: block;
    height: 100%;
    color: inherit;
    padding: 0 10px;
    position: relative;
  }
  &.active a::after {
    content: '';
    height: 5px;
    width: 80%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.7);
    border-radius: 2px;
  }
  &:last-child {
    padding-right: 10px;
  }
`;
