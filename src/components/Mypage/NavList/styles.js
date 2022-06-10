import styled from 'styled-components';

export const NavListContainer = styled.nav``;

export const NavItem = styled.div`
  display: block;
  padding: 20px 15px;
  border-bottom: 1px solid #ddd;
  background: #fff;
  cursor: pointer;

  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  svg {
    color: #bcbcbc;
    font-size: 22px;
  }
`;

export const ItemContent = styled.div`
  flex: 1;
  margin-left: 12px;
  letter-spacing: -0.8px;

  h3 {
    font-size: 16px;
    margin-bottom: 7px;
  }
  p {
    font-size: 14px;
    color: #999;
  }
`;
