import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  max-width: 720px;
  width: 100%;
  z-index: 999;
`;

export const SearchBar = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  background: #fff;
  opacity: 0;
  position: relative;
  z-index: 1000;
  .logo {
    padding: 18px;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
    img {
      display: block;
      width: 25px;
      height: 25px;
    }
  }
  .search {
    flex: 1;
    height: 100%;
    line-height: 58px;
    font-size: 18px;
    font-weight: 500;
    color: #ccc;
    cursor: text;
  }
  .mic {
    padding-right: 18px;
  }
`;
