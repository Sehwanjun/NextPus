import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import Link from "next/link";
import {
  GlobalContainer,
  ContentContainer,
  ContentBox,
  StyledRow,
  StyledCol,
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
  FooterList
} from "./styles";
import CampusImage from "public/landing/first_bg_round_real.svg";
import LogoImage from "public/landing/nexpus_logo_600x400_row.svg";
import { useDispatch, useSelector } from "react-redux";
import Router from 'next/router';




const Landing = () => {
  return (
    <GlobalContainer>
      <ContentContainer>
        <StyledRow>
          <StyledCol xs={24} md={14}>
            <ContentBox>
              <Title>
                <TitleLogo>
                  <LogoImage alt="logoimage" />
                </TitleLogo>
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
                (탤런트가든 CEO)
              </TitleSubtextBox>

              <ImageSection className="forth-box_flow">
                <CampusImage alt="campusImage" />
              </ImageSection>
            </ContentBox>
          </StyledCol>
          <StyledCol xs={24} md={10}>
            <LoginContainer>
              <LoginBox>
                <LoginForm />
              </LoginBox>
            </LoginContainer>
          </StyledCol>
        </StyledRow>
      </ContentContainer>
      <Footer>
        <FooterContainer>
          <FooterUl>
            <li>&copy; {new Date().getFullYear()}, 넥스트퍼스(Nextpus)</li>
            <li>대표자: 전세환</li>
            <li>연락처: 010-7578-1252</li>
            <li>Email: arthursmind@naver.com</li>
          </FooterUl>
          <ContentCurve />
          <FooterUl>
            <FooterList>
              <Link href="/introduce" target="_blank">
                <a >회사소개</a>
              </Link>
            </FooterList>
            <FooterList>
              <Link href="/introduce" target="_blank">
                <a >개인정보처리방침</a>
              </Link>
            </FooterList>
            <FooterList>
              <Link href="/introduce" target="_blank">
                <a >쿠키</a>
              </Link>
            </FooterList>
            <FooterList>
              <Link href="/introduce" target="_blank">
                <a >이용 약관</a>
              </Link>
            </FooterList>
            <FooterList><Link href="/introduce" target="_blank">
              <a >
                문의 및 서비스 개선사항에 대한 조언을 주세요.
              </a>
            </Link></FooterList>
          </FooterUl>
        </FooterContainer>
      </Footer>
    </GlobalContainer>
  );
};

export default Landing;
