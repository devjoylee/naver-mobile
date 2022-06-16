import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  max-width: 720px;
  width: 100%;
  z-index: 999;
  transform: translateY(-120px);
  transition: transform 0.2s ease-in-out;
  &.visible {
    transform: translateY(0);
  }
`;

export const SearchBar = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  background: #fff;
  position: relative;
  z-index: 1000;

  .search {
    flex: 1;
    height: 100%;
    line-height: 58px;
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.text4};
    cursor: text;
  }
  .icon {
    padding-right: 15px;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  transform: scale(0);
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  &.visible {
    transform: scale(1);
  }
  img {
    display: block;
    width: 25px;
    height: 25px;
  }
`;
