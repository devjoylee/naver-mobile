import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuIcon } from '../icons';

const Container = styled.div`
  padding: 15px 20px;
`;

const MenuIconStyle = styled(MenuIcon)`
  width: 25px;
  color: #333;
`;

function NavBtn() {
  return (
    <Container>
      <Link to="/login">
        <MenuIconStyle />
      </Link>
    </Container>
  );
}

export default NavBtn;
