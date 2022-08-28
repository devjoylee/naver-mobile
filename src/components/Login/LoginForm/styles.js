import styled from 'styled-components';
import { Button } from 'components/Common/styled';

// login form
export const LoginForm = styled.form`
  margin: 70px 40px 50px;
  @media (max-width: 450px) {
    margin: 50px 5px;
  }
`;

export const InputContainer = styled.div`
  border-radius: 6px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 5%);
  /* border: ${({ theme }) => theme.style.border_gray2}; */
  background-color: #fff;
`;

export const LoginInput = styled.div`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.style.input_height};
  border: ${({ theme }) => theme.style.border_gray2};

  input {
    flex: 1;
    padding-left: 5px;
    padding-top: 3px;
    height: 100%;
    font-size: 17px;
    &::placeholder {
      font-weight: 500;
      color: ${({ theme }) => theme.color.text4};
    }
  }

  &.id {
    border-radius: 6px 6px 0 0;
  }
  &.password {
    border-top: none;
    border-radius: 0 0 6px 6px;
  }

  &.focus {
    outline: 1px solid ${({ theme }) => theme.color.main00c};
    .icon {
      opacity: 0.7;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.style.input_height};
  height: ${({ theme }) => theme.style.input_height};
  font-size: 24px;
  opacity: 0.25;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.color.text_red};
  font-size: 14px;
  margin: 20px 10px 30px;
`;

export const LoginButton = styled(Button)`
  margin: 20px 0;
  font-size: 17px;
  height: ${({ theme }) => theme.style.input_height};
  border-radius: 6px;
  background-color: ${({ disabled, theme }) =>
    disabled ? '#bcbcbc' : theme.color.main00c};
`;

export const KeepLoggedIn = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-left: 5px;
    font-size: 15px;
    color: #555;
  }

  .icon {
    font-size: 21px;
    color: #ccc;
    .active {
      color: ${({ theme }) => theme.color.main00c};
    }
  }
`;
