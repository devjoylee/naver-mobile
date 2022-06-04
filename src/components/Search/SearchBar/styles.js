import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';
import { RiCloseCircleFill } from 'react-icons/ri';

export const BarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #1fcf89;
  padding: 15px 20px;
  background: #fff;
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
  background-color: #fff;
  padding-right: 20px;
  box-sizing: border-box;

  &::placeholder {
    color: #dadada;
    font-size: 16px;
  }
`;

export const SearchButton = styled(GoSearch)`
  font-size: 26px;
  color: #1fcf89;
  cursor: pointer;
`;

export const ResetButton = styled(RiCloseCircleFill)`
  font-size: 24px;
  color: #ddd;
  opacity: ${({ active }) => (active ? 1 : 0)};
  cursor: pointer;
`;
