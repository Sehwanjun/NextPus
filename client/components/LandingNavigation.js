import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu } from "antd";
import styled, { css } from "styled-components";

import logo_image from "../../img/nexpus_logo_ver2.0_green(40px).png";

const LandongNavigation = ({ children }) => {
  return (
    <div>
      <div className="navbar sticky stiky-dark navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a href="/" className="logo text-uppercase navbar-brand"></a>
          <div id="navbarCollapse" className="collapse navbar-collapse">
            {/* <div data-nav="list" className="navbar-collapse">

            </div> */}
            <div className="nav-button ml-auto">
              <ul className="navbar-right navbar-nav">
                <li>
                  <button
                    type="button"
                    className="btn-custom navbar-btn-rounded waves-effect waves-light btn btn-none"
                  >
                    로그인
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="root">
        <div className="root_navbar">
          <div className="container">
            <a href="/" className="logo text-uppercase">
              <img src={logo_image} alt="Logo"></img>
              <p>NextPus</p>
            </a>
          </div>
        </div>
        <div>
          <Menu mode="horizontal">
            <Menu.Item>
              <Link href="/loginpage">
                <a>로그인</a>
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/profile">
                <a>회원가입</a>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
        {children}
      </div>
    </div>
  );
};

LandongNavigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LandongNavigation;
