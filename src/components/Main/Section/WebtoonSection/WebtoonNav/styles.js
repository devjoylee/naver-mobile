import styled from 'styled-components';

export const LinkWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.bg4};
  border-top: ${({ theme }) => theme.style.border_gray2};
  border-radius: 0 0 8px 8px;
  cursor: pointer;
`;

export const WebtoonLink = styled.li`
  width: 33.33%;
  height: 45px;
  line-height: 45px;
  color: ${({ theme }) => theme.color.text1};
  font-size: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    font-size: 17px;
    padding-right: 5px;
  }
`;
