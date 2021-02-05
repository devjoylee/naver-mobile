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

svg{
  width: 25px;
}
`

export default createGlobalStyle`${reset}`;

export const Container = styled.div`
  ${({ margin }) =>
    margin &&
    `
  margin-top: ${margin.top || 0}px;
  margin-right: ${margin.right || 0}px;
  margin-bottom: ${margin.bottom || 0}px;
  margin-left: ${margin.left || 0}px;
  `}

  ${({ padding }) =>
    padding &&
    `
  padding-top: ${padding.top || 0}px;
  padding-right: ${padding.right || 0}px;
  padding-bottom: ${padding.bottom || 0}px;
  padding-left: ${padding.left || 0}px;
  `}
`;

export const PageWrapper = styled.div`
  height: 100%;
  background-color: ${({ graybg }) => (graybg ? '#eee' : '#fff')};
  padding: ${({ padding }) => (padding ? '20px' : 0)};
`;
