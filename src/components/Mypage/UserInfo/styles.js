import styled from 'styled-components';
import { RiEdit2Fill } from 'react-icons/ri';

export const InfoWrapper = styled.div`
  background-color: #00bb38;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  border-top: 1px solid #00ac34;
  padding: 24px 20px;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
`;

export const ProfileDetail = styled.div`
  padding-left: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const EditButton = styled(RiEdit2Fill)`
  margin-bottom: -2px;
  margin-left: 4px;
  font-size: 22px;
  cursor: pointer;
`;

export const Email = styled.p`
  font-size: 15px;
  margin-left: 3px;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 15px;

  span {
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
