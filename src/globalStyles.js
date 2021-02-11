import styled, { css, createGlobalStyle } from 'styled-components';

// prettier-ignore
export const reset = css`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none; 
  outline: none;
  color: #1b1b1b;
}
a:hover, a:active {text-decoration: none;}
input,
label,
select,
button,
textarea
{
	margin:0;
	border:0;
	padding:0;
	display:inline-block;
	vertical-align:middle;
	white-space:normal;
	background:none;
	line-height:1;
	
	/* Browsers have different default form fonts */
	font-size:13px;
	font-family:Arial;
}
/* Remove the stupid outer glow in Webkit */
input:focus
{
	outline:0;
}
html, body, #root{
  height: 100%;
}
`

export default createGlobalStyle`${reset}`;

export const Container = styled.div`
  ${({ margin }) =>
    margin &&
    `
    margin-top: ${margin.top ? margin.top + 'px' : ''};
    margin-right: ${margin.right ? margin.right + 'px' : ''};
    margin-bottom: ${margin.bottom ? margin.bottom + 'px' : ''};
    margin-left: ${margin.left ? margin.left + 'px' : ''};
    margin: ${margin.all ? margin.all + 'px' : ''};
    margin: ${
      margin.tb || margin.lr
        ? `${margin.tb || 0}px ${margin.lr || 0}px`
        : '    '
    }; 

  `}

  ${({ padding }) =>
    padding &&
    `
    padding-top: ${padding.top ? padding.top + 'px' : ''};
    padding-right: ${padding.right ? padding.right + 'px' : ''};
    padding-bottom: ${padding.bottom ? padding.bottom + 'px' : ''};
    padding-left: ${padding.left ? padding.left + 'px' : ''};
    padding: ${padding.all ? padding.all + 'px' : ''};
    padding: ${
      padding.tb || padding.lr
        ? `${padding.tb || 0}px ${padding.lr || 0}px`
        : ''
    }; 
  `}
`;

export const PageWrapper = styled.div`
  height: 100%;
  background-color: ${({ graybg }) => (graybg ? '#eee' : '#fff')};
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
