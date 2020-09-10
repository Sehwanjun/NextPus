import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu } from "antd";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link href="/">
              <a>노드버드</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/profile">
              <a>프로필</a>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/signup">
              <a>노드버드</a>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
      {children}
    </div>
  );
};

// children: node 타입
// return 안에 들어갈 수 있는 모든 것들
// (즉, <AppLayout> = children)

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
