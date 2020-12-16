import styled from 'styled-components';
import { Container } from '../../globalStyles';
import { ArrowLeftIcon, SearchIcon, ResetIcon } from '../icons';

// search bar
export const PageWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #1fcf89;
  padding: 15px 20px;
  background: #fff;
`;

export const InputContainer = styled(Container)`
  flex: 1;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  background-color: #fff;
  padding-right: 20px;
  box-sizing: border-box;
`;

export const BackBtn = styled(ArrowLeftIcon)`
  width: 25px;
  color: #333;
`;

export const SearchBtn = styled(SearchIcon)`
  width: 25px;
  color: #1fcf89;
  cursor: pointer;
`;

export const ResetBtn = styled(ResetIcon)`
  width: 20px;
  color: #ccc;
  position: absolute;
  right: 0;
  opacity: ${({ active }) => (active ? 1 : 0)};
  cursor: pointer;
`;

// history
export const ListContainer = styled.div`
  background: #fff;
  min-height: 200px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding: 15px 20px;
`;

export const Title = styled.span`
  color: #333;
`;

export const DeleteAll = styled.span`
  color: #a7a7a7;
`;

export const EmptyList = styled.div`
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
`;

export const RecentList = styled.ul`
  padding: 0 20px 15px;
`;

export const TextWrapper = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;

export const Icon = styled(SearchIcon)`
  width: 15px;
  padding: 5px;
  margin-right: 7px;
  border-radius: 50%;
  background: #ccc;
  color: #fff;
`;

export const Keyword = styled.span``;

export const RemoveBtn = styled.span`
  font-size: 14px;
  color: #666;
  margin-left: auto;
  cursor: pointer;
`;

// setting
export const Footer = styled.ul`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-top: 1px solid #ddd;
`;

export const FooterBtn = styled.li`
  font-size: 14px;
  color: #888;

  &:first-child {
    padding-right: 10px;
    margin-right: 10px;
    position: relative;
  }

  &:first-child::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 17px;
    background-color: #bbb;
  }
`;
