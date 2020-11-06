import React from "react";
import { Row, Col } from "antd";
import LoginForm from "./LoginForm";
import {
  GlobalContainer,
  ContentContainer,
  ContentBox,
  ImageSection,
  Image,
  LoginBox,
  LoginContainer,
  Title,
  TitleLogo,
  TitleTextBox,
  TitleSubtextBox,
  Footer,
  FooterContainer,
  ContentCurve,
  FooterUl,
  FooterList,
} from "./styles";
import CampusImage from "../../static/img/first_bg_round_real.png";
import LogoImage from "../../static/img/nexpus_logo_600x400_row.svg";

const landing = () => {
  return (
    <GlobalContainer>
      <ContentContainer>
        <Row>
          <Col flex={3} xs={24} md={14}>
            <ContentBox>
              <Title>
                <TitleLogo src={LogoImage} alt="logoimage" />
              </Title>
              <TitleTextBox>
                지식전문성 향상과 타지식분야로의 도전을 위한 <br />
                <b>학습종합플랫폼</b>
              </TitleTextBox>
              <TitleSubtextBox>
                평생 같은 일을 하며 새로운 무언가를 배워도 되지 않는다는 생각은
                개인의 커리어를 망친다. 나아가 개인이 일하고 있는 기업을 망치는
                길이기도 하다. 이러한 일이 일어나지 않도록 사람들이 스스로
                성공적인 미래를 꾸려나가게 해야 한다. – 다비데 다톨리
                (공유오피스 탤런트가든 CEO)
              </TitleSubtextBox>

              <ImageSection className="forth-box_flow">
                <Image src={CampusImage} alt="campusImage" />
              </ImageSection>
            </ContentBox>
          </Col>
          <Col flex={2} xs={24} md={10}>
            <LoginContainer>
              <LoginBox>
                <LoginForm />
              </LoginBox>
            </LoginContainer>
          </Col>
        </Row>
      </ContentContainer>
      <Footer>
        <FooterContainer>
          <FooterUl>
            <li>Ⓒ Nextpus(넥스트퍼스)</li>
            <li>대표자: 전세환</li>
            <li>연락처: 010-7578-1252</li>
            <li>Email: arthursmind@naver.com</li>
          </FooterUl>

          {/* 가운데 줄로 컨텐츠 구분 */}
          <ContentCurve />

          <FooterUl>
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
              <a href="/introduce">이용 약관</a>
            </FooterList>
            <FooterList>
              <a href="/introduce">
                문의 및 서비스 개선사항에 대한 조언을 주세요.
              </a>
            </FooterList>
          </FooterUl>
        </FooterContainer>
      </Footer>
    </GlobalContainer>

    /* <Row gutter={8}>
        <Col xs={24} md={6} />
        <Col xs={24} md={12}>
          <LoginForm />
        </Col>
        <Col xs={24} md={6} />
      </Row> */
  );
};

export default landing;
