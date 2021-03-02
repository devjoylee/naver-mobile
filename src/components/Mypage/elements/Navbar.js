import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HomeLogo = styled(Link)`
  width: 45px;
  height: 45px;
`;

export const NavTitle = styled.div`
  background-color: #08c741;
  width: 100%;
  height: 45px;
  padding: 10px;
  color: #fff;
  font-size: 20px;
  letter-spacing: -1px;
  box-sizing: border-box;
`;
