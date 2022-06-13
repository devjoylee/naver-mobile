import styled from 'styled-components';

export const ListContainer = styled.div`
  background: #fff;
  min-height: 200px;
  padding: 15px 20px;
  display: table;
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
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

export const RecentList = styled.ul``;

export const TextWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  height: 30px;
  line-height: 30px;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Icon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #ddd;
  color: #fff;
  box-sizing: unset;
`;

export const Keyword = styled.p`
  flex: 1;
  padding-left: 10px;
`;

export const Date = styled.span`
  color: #aaa;
  font-size: 15px;
  padding-right: 5px;
`;

export const RemoveButton = styled.div`
  font-size: 23px;
  color: #ccc;
  cursor: pointer;
`;
