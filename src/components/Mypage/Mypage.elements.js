import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Navbar
export const NavContainer = styled.div`
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

// UserInfo
export const InfoContainer = styled.div`
  padding: 30px 20px;
  background-color: #00bb38;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  border-top: 1px solid #00ac34;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
`;

export const ProfileDetail = styled.div`
  padding-left: 10px;
  padding-top: 10px;
  color: #fff;

  h3 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
  }

  p {
    font-size: 15px;
    margin-left: 3px;
  }

  ul {
    display: flex;
    margin-top: 15px;
  }

  ul li {
    width: 90px;
    padding: 12px 8px;
    margin-right: 8px;
    font-size: 15px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 25px;
  }
`;

// Logout Button
export const LogoutButton = styled.button`
  display: block;
  width: 80px;
  margin: 30px auto 0;
  border: 1px solid #ccc;
  background: #eaeaea;
  padding: 7px 12px;
  color: #666;
  cursor: pointer;
`;
