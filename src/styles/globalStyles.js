import { css, createGlobalStyle } from 'styled-components';

// prettier-ignore
export const reset = css`
* { 
  margin: 0; 
  padding: 0;
  box-sizing: border-box;
}
html, body, #root{
  height: 100%;
  line-height: 1;
}
body {
  font-size: 15px;
  color: #333;
  background: #fafafa;
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
a:hover, 
a:active {
  text-decoration: none;
  color: inherit;
}
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
`

export default createGlobalStyle`${reset}`;
