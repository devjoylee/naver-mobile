import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
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
