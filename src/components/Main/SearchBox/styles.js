import styled from 'styled-components';

export const InputBox = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #1fcf89;
  border-radius: 3px;
  padding-left: 12px;
  box-sizing: border-box;

  &::placeholder {
    color: #dadada;
    font-size: 16px;
  }
`;
