//각 페이지들의 공통되는 요소 처리
import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";

//component: index.js의 return 부분(index.js의 부모인 셈)
const App = ({ Component }) => {
  return <Component />;
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
