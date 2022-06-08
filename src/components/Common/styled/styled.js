import styled from 'styled-components';

export const Container = styled.div`
  ${({ margin }) =>
    margin &&
    `
  margin-top: ${margin.top ? margin.top + 'px' : ''};
  margin-right: ${margin.right ? margin.right + 'px' : ''};
  margin-bottom: ${margin.bottom ? margin.bottom + 'px' : ''};
  margin-left: ${margin.left ? margin.left + 'px' : ''};
  margin: ${margin.all ? margin.all + 'px' : ''};
  margin: ${margin.tb || margin.lr ? `${margin.tb || 0}px ${margin.lr || 0}px` : '    '}; 

`}

  ${({ padding }) =>
    padding &&
    `
  padding-top: ${padding.top ? padding.top + 'px' : ''};
  padding-right: ${padding.right ? padding.right + 'px' : ''};
  padding-bottom: ${padding.bottom ? padding.bottom + 'px' : ''};
  padding-left: ${padding.left ? padding.left + 'px' : ''};
  padding: ${padding.all ? padding.all + 'px' : ''};
  padding: ${padding.tb || padding.lr ? `${padding.tb || 0}px ${padding.lr || 0}px` : ''}; 
`}
`;

export const PageWrapper = styled.div`
  height: 100%;
  background-color: ${({ graybg }) => (graybg ? '#eff2f8' : '#fff')};
  padding: ${({ padding }) => (padding ? '20px' : 0)};
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #dadada;
  padding: 5px;
  background: #fff;
  box-sizing: border-box;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  line-height: 50px;
  height: 50px;
  width: 100%;
  text-align: center;
  display: block;
  color: #fff;
  cursor: pointer;
`;
