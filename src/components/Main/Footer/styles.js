import styled from 'styled-components';

export const FooterContainer = styled.div`
  padding: 60px 0;
  background: #eff2f8;
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
