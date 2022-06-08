import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  padding: 20px;
  background: #fff;
`;

export const SearchBox = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px;
  border: ${({ theme }) => theme.style.border_green};
  border-radius: 3px;
  span {
    color: #dadada;
    font-size: 15px;
  }
`;
