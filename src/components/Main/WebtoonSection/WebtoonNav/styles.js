import styled from 'styled-components';

export const LinkWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fafc;
  border-top: 1px solid #eee;
  cursor: pointer;
`;

export const WebtoonLink = styled.li`
  width: 33.33%;
  height: 45px;
  line-height: 45px;
  color: #777;
  font-size: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    font-size: 17px;
    padding-right: 5px;
  }
`;