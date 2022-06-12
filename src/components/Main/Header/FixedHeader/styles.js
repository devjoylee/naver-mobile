import styled from 'styled-components';

export const HeaderContainer = styled.div``;

export const SearchBar = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  background: #fff;
  .logo {
    padding: 18px;
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

export const NavBar = styled.ul`
  width: 1200px;
  height: 55px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(to right, #09c665 0, #07bb7b 100%);
  a {
    display: block;
    color: #fff;
    padding: 18px 10px 0;
  }
`;
