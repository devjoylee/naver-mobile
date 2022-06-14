import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${({ theme }) => theme.style.border_green};
  height: ${({ theme }) => theme.style.header_height};
  background: #fff;
  .icon {
    padding: 18px;
  }
  svg {
    display: block;
  }
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  padding-right: 20px;
  padding-top: 3px;
  box-sizing: border-box;
  &::placeholder {
    color: ${({ theme }) => theme.color.text4};
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 58px;
  font-size: 26px;
  color: ${({ theme }) => theme.color.text2};
  transform: scale(0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.text2};
  }
`;

export const SearchButton = styled.div`
  font-size: 26px;
  color: ${({ theme }) => theme.color.main00c};
  margin: 16px;
  cursor: pointer;
`;

export const ResetButton = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.color.bg3};
  opacity: ${({ active }) => (active ? 1 : 0)};
  cursor: pointer;
`;
