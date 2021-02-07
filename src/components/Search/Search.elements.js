import styled from 'styled-components';
import { ArrowLeftIcon, SearchIcon, ResetIcon } from '../icons';

// search bar
export const BarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #1fcf89;
  padding: 15px 20px;
  background: #fff;
`;

export const InputWrapper = styled.div`
  flex: 1;
  position: relative;
  margin: 0 10px;
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
  color: #919191;
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
  padding: 15px 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding-bottom: 15px;
`;

export const Title = styled.span`
  color: #333;
`;

export const DeleteAll = styled.span`
  color: #a7a7a7;
  cursor: pointer;
`;

export const EmptyList = styled.div`
  width: 100%;
  height: 200px;
  line-height: 200px;
  text-align: center;
`;

export const RecentList = styled.ul``;

export const TextWrapper = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 7px;
`;

export const Icon = styled(SearchIcon)`
  width: 14px;
  padding: 5px;
  margin-right: 7px;
  border-radius: 50%;
  background: #ccc;
  color: #fff;
`;

export const Keyword = styled.span``;

export const RemoveBtn = styled.span`
  font-size: 13px;
  color: #666;
  margin-left: auto;
  cursor: pointer;
`;
