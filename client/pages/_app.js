// 각 페이지들의 공통되는 요소 처리
import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head"; // Next에서 Head 수정할 수 있는 모듈
import { ThemeProvider } from "styled-components";
import withReduxSaga from "next-redux-saga";
import wrapper from "../store/configureStore";
import GlobalStyle, { theme } from './styles/global';



const App = ({ Component }) => {


  return (
    <>
      <GlobalStyle />
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color</meta>" content="#ffffff" />
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
