import React from "react";
// import { Row, Col } from "antd";
import {
  GlobalContainer,
  GlobalBox,
  ContentContainer,
  ContentBox,
  Header,
  HeaderDiv,
  HeaderImage,
  HeaderTextBox,
  RegisterContainer,
  FooterContainer,
  Footer,
  FooterUl,
  FooterList,
} from "./styles";
import LogoImage from "public/img/nexpus_logo_600x400_full_row_inverse.svg";
import Register from "components/Register";

const register = () => {
  return (
    <GlobalContainer>
      <GlobalBox>
        <ContentContainer className="content" id="content">
          {/* <Row>
            <Col flex={3} xs={24} md={4} />
            <Col flex={2} xs={24} md={16}> */}
          <ContentBox>
            <Header>
              <HeaderDiv>
                <HeaderImage>
                  <LogoImage alt="logoimage" />
                </HeaderImage>
              </HeaderDiv>
              <HeaderTextBox>NextPus에서 꿈을 실현하세요.</HeaderTextBox>
            </Header>

            {/* @registerform */}
            <RegisterContainer>
              <Register />
            </RegisterContainer>
          </ContentBox>
          {/* </Col>
            <Col flex={2} xs={24} md={4}></Col>
          </Row> */}
        </ContentContainer>
        {/* <FooterContainer className="footer" id="footer"> */}
        <Footer>
          <FooterUl>
            <FooterList>
              <p>&copy; nextpus.com</p>
            </FooterList>
            <FooterList>
              <a href="/introduce">회사소개</a>
            </FooterList>
            <FooterList>
              <a href="/introduce">개인정보처리방침</a>
            </FooterList>
            <FooterList>
              <a href="/introduce">쿠키</a>
            </FooterList>
            <FooterList>
              <a href="/introduce">이용약관</a>
            </FooterList>
          </FooterUl>
        </Footer>
        {/* </FooterContainer> */}
      </GlobalBox>
    </GlobalContainer>
  );
};

export default register;
