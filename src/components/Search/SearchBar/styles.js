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
  font-weight: 500;
  padding-right: 20px;
  box-sizing: border-box;
  &::placeholder {
    color: #ccc;
  }
`;

export const BackButton = styled(Link)`
  font-size: 26px;
  color: #aaa;
  margin: 16px;
  cursor: pointer;
  &:hover {
    color: #aaa;
  }
`;

export const SearchButton = styled.div`
  font-size: 26px;
  color: ${({ theme }) => theme.color.main00c};
  margin: 16px;
  cursor: pointer;
`;

export const ResetButton = styled.div`
  font-size: 24px;
  color: #ddd;
  opacity: ${({ active }) => (active ? 1 : 0)};
  cursor: pointer;
`;
