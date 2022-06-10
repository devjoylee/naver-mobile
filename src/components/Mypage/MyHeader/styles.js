import styled from 'styled-components';

export const MyHeaderContainer = styled.header``;

export const HeaderTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.color.main00a};
  a {
    width: 45px;
    height: 45px;
  }

  h2 {
    width: 100%;
    height: 45px;
    padding: 10px;
    color: #fff;
    font-size: 20px;
    letter-spacing: -1px;
    box-sizing: border-box;
    font-weight: 500;
  }
`;

export const UserProfile = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  background: ${({ theme }) => theme.color.main00b};
  border-top: 1px solid ${({ theme }) => theme.color.main00b};
  padding: 24px 20px;
  img {
    border-radius: 50%;
    width: 100px;
    opacity: 0.9;
  }
`;
export const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
  color: #fff;

  .name {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 4px;
  }
  .email {
    font-size: 15px;
    margin-left: 2px;
  }
`;

export const EditIcon = styled.button`
  margin-left: 7px;
  color: inherit;
  svg {
    font-size: 22px;
    cursor: pointer;
  }
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
    background: rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    cursor: pointer;
  }
`;
