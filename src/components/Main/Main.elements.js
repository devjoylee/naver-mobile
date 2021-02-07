import styled from 'styled-components';
import { MenuIcon } from '../icons';

// hamburger
export const Hamburger = styled(MenuIcon)`
  width: 25px;
  color: #555;
`;

// search box
export const InputBox = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #1fcf89;
  border-radius: 3px;
`;

// webtoon list
export const ScrollContainer = styled.div`
  overflow-x: scroll;
  white-space: nowrap;

  -webkit-overflow-scrolling: touch; // only IOS

  &::-webkit-scrollbar {
    /* display: none; */
  }
`;

export const WebtoonContainer = styled.div`
  display: inline-block;
  width: 45%;
  border-radius: 5px;
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const Image = styled.img`
  width: 100%;
  vertical-align: top;
`;

export const Title = styled.div`
  margin-top: 9px;
  font-weight: bold;
`;

export const Author = styled.div`
  margin-top: 4px;
  font-size: 14px;
  color: #797b84;
`;
