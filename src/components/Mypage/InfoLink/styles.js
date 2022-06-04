import styled from 'styled-components';

export const LinkWrapper = styled.div`
  display: block;
  padding: 20px 15px;
  border-bottom: 1px solid #ddd;
  background: #fff;
  cursor: pointer;

  display: flex;
  align-items: center;

  & > svg:first-child {
    color: #ccc;
    font-size: 22px;
  }

  & > svg:last-child {
    color: #999;
    font-size: 25px;
  }
`;

export const LinkMenu = styled.div`
  flex: 1;
  margin-left: 12px;
`;

export const Title = styled.h3`
  color: #333;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: #999;
  font-size: 15px;
`;
