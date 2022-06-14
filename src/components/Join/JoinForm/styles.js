import styled from 'styled-components';
import { Input, Button } from 'components/Common/styled';

export const Form = styled.form`
  padding-bottom: 40px;
`;

export const FormRow = styled.div`
  &:nth-child(3) {
    margin-bottom: 30px;
  }
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

export const Validation = styled.p`
  color: ${({ theme }) => theme.color.text_red};
  font-size: 15px;
  margin: -5px 0 20px 3px;
`;

export const JoinButton = styled(Button)`
  margin-top: 40px;
  background-color: ${({ disabled, theme }) => (disabled ? '#bcbcbc' : theme.color.main00c)};
`;
