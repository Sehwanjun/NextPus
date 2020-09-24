import React from "react";
import { Row, Col } from "antd";
import LoginForm from "../components/LoginForm";

const login = () => {
  return (
    <div>
      {" "}
      <Row gutter={8}>
        <Col xs={24} md={6} />
        <Col xs={24} md={12}>
          <LoginForm />
        </Col>
        <Col xs={24} md={6} />
      </Row>
    </div>
  );
};

export default login;
