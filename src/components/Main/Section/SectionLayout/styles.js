import styled from 'styled-components';

export const SectionContainer = styled.section`
  background: #fff;
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
  color: #333;
`;

export const OpenIcon = styled.div`
  font-size: 22px;
  color: #777;
  cursor: pointer;
  transform: rotate(${({ open }) => (open ? 0 : -180)}deg);
`;

export const Content = styled.div`
  padding: ${({ padding }) => (padding ? '5px 15px 20px 15px' : '')};
`;
