import styled from 'styled-components';

export const LogoutButton = styled.button`
  display: block;
  width: 80px;
  margin: 0 auto;
  border: ${({ theme }) => theme.style.border_gray1};
  background: ${({ theme }) => theme.color.bg4};
  padding: 7px 12px;
  color: ${({ theme }) => theme.color.text1};
  outline: none;
  cursor: pointer;
`;
