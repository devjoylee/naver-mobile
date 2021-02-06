import styled from 'styled-components';

export const LabelWrapper = styled.div`
  margin-bottom: 40px;
`;

export const JoinLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: bold;
`;

export const JoinButton = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  background-color: ${({ disabled }) => (disabled ? '#bcbcbc' : '#1fcf89')};
  color: #fff;
`;
