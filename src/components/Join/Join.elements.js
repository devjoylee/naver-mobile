import styled from 'styled-components';
import { Input, Button } from '../../globalStyles';

export const LabelWrapper = styled.div`
  margin-bottom: 30px;
`;

export const JoinLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: bold;

  span {
    font-weight: 400;
    color: #777;
  }
`;

export const JoinInput = styled(Input)`
  margin-bottom: 12px;
`;

export const JoinButton = styled(Button)`
  background-color: ${({ disabled }) => (disabled ? '#bcbcbc' : '#1fcf89')};
`;
