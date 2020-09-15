//각 페이지들의 공통되는 요소 처리
import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
//Next에서 Head 수정할 수 있는 모듈
import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const theme = {
  colors: {
    primary: "#0070f3",
  },
};

//component: index.js의 return 부분(index.js의 부모인 셈)
const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <meta charSet="utf-8" />
        <title>NextPus</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
