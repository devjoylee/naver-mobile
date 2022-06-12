import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 20px;
  background: #fff;
  position: relative;
  z-index: 100;
`;

export const HomeNav = styled.nav`
  display: flex;
  div:first-child {
    margin-right: auto;
  }
  div:last-child {
    margin-left: 15px;
  }
`;

export const SearchBarContainer = styled.div`
  margin: 80px 50px 40px;
  border-radius: 40px;
  outline: 1px solid #03cf5d;
  box-shadow: 0 5px 10px 0 rgb(117 145 181 / 12%);
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  .search {
    padding: 18px 15px;
    flex: 1;
    height: 100%;
    font-size: 18px;
    font-weight: 500;
    color: #ccc;
    cursor: text;
  }
  .mic {
    padding-right: 15px;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  padding-left: 20px;
  cursor: pointer;
  img {
    display: block;
    width: 25px;
    height: 25px;
  }
`;
