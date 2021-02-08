import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';
import { RiCloseCircleFill } from 'react-icons/ri';
import { VscClose } from 'react-icons/vsc';

// search bar
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

// history
export const ListContainer = styled.div`
  background: #fff;
  min-height: 200px;
  padding: 15px 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
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
  margin-bottom: 10px;
`;

export const Icon = styled(GoSearch)`
  font-size: 16px;
  padding: 6px;
  margin-right: 7px;
  border-radius: 50%;
  background: #ddd;
  color: #fff;
`;

export const Keyword = styled.span``;

export const RemoveButton = styled(VscClose)`
  font-size: 23px;
  color: #ccc;
  margin-left: auto;
  cursor: pointer;
`;
