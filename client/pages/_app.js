// 각 페이지들의 공통되는 요소 처리
import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head"; // Next에서 Head 수정할 수 있는 모듈
import { createGlobalStyle, ThemeProvider } from "styled-components";
import withReduxSaga from "next-redux-saga";
import wrapper from "../store/configureStore";

const GlobalStyle = createGlobalStyle`
      /* * {
         box-sizing:border-box;
     }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
         font-size: 14px;
         background-color:rgba(240,242,245,1);
  }
    a{
            text-decoration:none;
         color:inherit;
     } */
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
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
  vertical-align: baseline;
  font-family: Helvetica, Arial, sans-serif;
  /* font-size: 14px; */
  /* background-color:rgba(240,242,245,1); */
  line-height: 1.34;}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {text-decoration: none; color: #8a8d91;
   a:link {  text-decoration: none; color: #8a8d91;}
 a:visited {  text-decoration: none; color: #8a8d91;}
  a:active {  text-decoration: none; color: #8a8d91;}
 a:hover { text-decoration: none; color: #8a8d91;}
}
`;
const theme = {
  colors: {
    primary: "#0070f3",
  },
};

// component: index.js의 return 부분(index.js의 부모인 셈)
const App = ({ Component }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta charSet="utf-8" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>NextPus</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(App));
