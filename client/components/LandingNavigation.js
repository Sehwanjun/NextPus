import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styled, { css } from "styled-components";

import logo_image from "../static/img/nexpus_logo_ver2.0_green(40px).png";

const LandongNavigation = ({ children }) => {
  return (
    <div>
      <Root className="root">
        <NavRoot className="navbar_wrapper">
          <Container className="container">
            <LogoWrap href="/" className="logo-text-uppercase">
              <div>
                <LogoImage src={logo_image} alt="Logo"></LogoImage>
              </div>
              <Logo_TextDiv>NextPus</Logo_TextDiv>
            </LogoWrap>
            {/* <ButtonWrap> */}
            <Link href="/login">
              <Button>로그인</Button>
            </Link>
            <Link href="/signup">
              <SignupButton>회원가입</SignupButton>
            </Link>
            {/* </ButtonWrap> */}
          </Container>
        </NavRoot>
      </Root>
      <ChildDiv>{children}</ChildDiv>
    </div>
  );
};

const Root = styled.div`
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
  background: transparent;
  border: 0;
  font-size: 100%;
  box-sizing: border-box;
`;

const NavRoot = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: "#f5f9fa";
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
`;

const Container = styled.div`
  width: 100%;
  padding-right: 0px;
  padding-left: 0px;
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  /* @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 576px) {
    max-width: 540px;
  } */
  margin-right: auto;
  margin-left: auto;
  color: "#fff";
`;

const LogoWrap = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  color: #209648;
  &:hover {
    color: #209648;
  }
`;

const LogoImage = styled.img`
  float: left;
  height: 40px;
  &:hover {
    height: 42px;
  }
`;

const Logo_TextDiv = styled.div`
  text-align: center;
  font-size: 24px;
  margin: auto;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

const ButtonWrap = styled.div`
  /* width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto; */
`;

const Button = styled.button`
  width: 112px;
  height: 40px;
  align-items: center;
  text-align: center;
  outline: none;
  padding: 0 12px;
  font-size: 16px;
  font-weight: 600;
  margin-left: 0;
  margin-right: 10px;
  border: 2px solid #209648;
  border-radius: 24px;
  cursor: pointer;
  color: #209648;
  background-color: white;
  position: relative;

  &:hover {
    background-color: white;
    color: #176b33;
  }
`;

const SignupButton = styled(Button)`
  border: none;
  color: white;
  background-color: #209648;
  &:hover {
    background-color: #176b33;
    color: white;
  }
`;

const Anchor = styled(Button.withComponent("a"))`
  color: black;
`;

const ChildDiv = styled.div`
  position: relative;
`;

LandongNavigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LandongNavigation;
