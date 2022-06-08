import styled from 'styled-components';

export const OptionNavBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
  border-top: ${({ borderNone }) => (borderNone ? '' : '1px solid #e1e1e1')};
  padding: ${({ paddingNone }) => (paddingNone ? '' : '15px')};
`;

export const OptionNavItemBlock = styled.span`
  position: relative;
  padding-right: 10px;
  margin-right: 10px;
  font-size: 13px;
  color: #888;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 1px;
    height: 17px;
    background-color: #bbb;
  }

  &:last-child::after {
    width: 0;
  }

  a {
    color: #888;
  }
`;
