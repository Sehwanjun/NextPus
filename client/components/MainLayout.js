import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";
import UserProfile from "./UserProfile";

const SerchInput = styled(Input.Search)`
  vertical-align: middle;
`;

// children: node 타입
// return 안에 들어갈 수 있는 모든 것들
// (즉, <AppLayout> = children)

const MainLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link href="/main">
              <a>NextPus</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/profile">
              <a>내 정보</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/careerpath">
              <a>직업탐색</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/education">
              <a>학습페이지</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            {/* 태그 검색 */}
            <SerchInput enterButton />
          </Menu.Item>
        </Menu>

        {/* Grid sys`  sm(테블릿) */}
        {/* gutter: column사이의 간격 */}
        <Row gutter={8}>
          <Col xs={24} md={6}>
            <UserProfile />
          </Col>
          <Col xs={24} md={12}>
            {" "}
            {children}
          </Col>
          <Col xs={24} md={6}>
            <a
              href="https://www.zerocho.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Made by NextPus
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
