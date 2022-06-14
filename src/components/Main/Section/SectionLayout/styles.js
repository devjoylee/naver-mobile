import styled from 'styled-components';

export const SectionContainer = styled.section`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 6%);
  & + & {
    margin-top: 10px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 15px;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

export const OpenIcon = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.color.text1};
  cursor: pointer;
  transform: rotate(${({ open }) => (open ? 0 : -180)}deg);
`;

export const Content = styled.div`
  padding: ${({ padding }) => (padding ? '5px 15px 20px 15px' : '')};
`;
