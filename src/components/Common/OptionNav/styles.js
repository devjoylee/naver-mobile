import styled from 'styled-components';

export const OptionNavBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  border-top: ${({ borderNone, theme }) => (borderNone ? '' : theme.style.border_gray2)};
  padding: ${({ paddingNone }) => (paddingNone ? '' : '15px')};
`;

export const OptionNavItemBlock = styled.span`
  position: relative;
  padding-right: 10px;
  margin-right: 10px;
  font-size: 13px;
  font-weight: ${({ bold }) => (bold ? 'bold' : '500')};
  color: ${({ theme }) => theme.color.text2};
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 15px;
    background-color: #d3d3d3;
  }

  &:last-child::after {
    width: 0;
  }

  a {
    color: ${({ theme }) => theme.color.text2};
  }
`;
