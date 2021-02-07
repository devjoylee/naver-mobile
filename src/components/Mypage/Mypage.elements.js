import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ChevRightIcon, PencilIcon } from '../icons';
import { Container } from '../../globalStyles';

// Navbar
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

// UserInfo
export const InfoContainer = styled(Container)`
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
    width: 92px;
    padding: 10px 0;
    margin-right: 8px;
    font-size: 14px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    cursor: pointer;
  }
`;

export const Edit = styled.span`
  position: relative;
`;

export const EditButton = styled(PencilIcon)`
  position: absolute;
  bottom: 0;
  margin-left: 2px;
`;

// InfoLink
export const LinkWrapper = styled.div`
  display: block;
  position: relative;
  padding: 20px 15px;
  border-bottom: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
`;

export const LinkTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
`;

export const LinkText = styled.p`
  color: #999;
  font-size: 15px;
`;

export const LinkBtn = styled(ChevRightIcon)`
  display: block;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #bbb;
`;

// Logout Button
export const LogoutButton = styled.button`
  display: block;
  width: 80px;
  margin: 20px auto 0;
  border: 1px solid #ccc;
  background: #eaeaea;
  padding: 7px 12px;
  color: #666;
  cursor: pointer;
`;
