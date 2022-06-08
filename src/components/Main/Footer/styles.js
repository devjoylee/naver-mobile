import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 60px 0;
  background: ${({ theme }) => theme.color.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px -20px;

  & > div {
    margin-bottom: 13px;
  }
`;

export const FooterLogoImage = styled.img`
  display: inline-block;
  margin-top: 15px;
  width: 80px;
  height: 15px;
  cursor: pointer;
`;
