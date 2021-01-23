import React from "react";
// import PropTypes from "prop-types";
import { CheckCircleFilled } from "@ant-design/icons";

// const Success = ({ user }) => (
const Success = () => (
  <div>
    <CheckCircleFilled />
    <p>{/* 환영합니다, <b>{`${user.Name}`}님</b> */}</p>
    <p>회원가입에 성공하였습니다.</p>
    <p>You have successfully registered</p>
  </div>
);

Success.propTypes = {
  // user: PropTypes.object,
};
export default Success;
