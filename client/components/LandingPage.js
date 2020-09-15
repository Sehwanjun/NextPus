import React from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import explain_image from "../static/img/first_bg_round_real.png";
import flow_Nextpus_image from "../static/img/flow_Nextpus.png";
import careerpath_image from "../static/img/careerpath_img.png";
import lifestyle_image from "../static/img/lifestyle_img.png";

const LandingPage = () => {
  return (
    <Body>
      <Main className="main">
        <IntroSection>
          <Intro className="first-box_intro-text">
            <SublineText>
              새로운 분야에 도전하거나
              <br></br>
              직업에 대한 전문성을 키우고 싶은 분들을 위한 학습 종합 플랫폼 -
            </SublineText>
            <HeadlineText>
              <b>NextPus</b>에 오신 걸 환영합니다.
            </HeadlineText>
          </Intro>
        </IntroSection>

        {/* 두번째 섹터: 서비스 개요 */}
        <ServiceSection>
          <ServiceDiv>
            <ServiceButtonWrap>
              <h2>Service</h2>
              <ServiceButton>직업, 학습정보 살펴보기</ServiceButton>
              <ServiceButton>전문가의 자기개발</ServiceButton>
              <ServiceButton>학습노하우 및 강의</ServiceButton>
              <ServiceButton>효율적인 학습방법</ServiceButton>
            </ServiceButtonWrap>

            <ServiceCommingButtonWrap>
              <ServiceButtonWrap>
                <div>
                  <h2>Comming Soon</h2>
                </div>
                <ServiceCommingButton>채용정보</ServiceCommingButton>
                <ServiceCommingButton>학습컨텐츠(추가)</ServiceCommingButton>
                <ServiceCommingButton>모임(그룹)</ServiceCommingButton>
                <ServiceCommingButton>뉴스/직무관련 정보</ServiceCommingButton>
              </ServiceButtonWrap>
              <ServiceButtonWrap>
                <ServiceCommingButton>재능판매</ServiceCommingButton>
                <ServiceCommingButton>멘토링/후견인</ServiceCommingButton>
                <ServiceCommingButton>출판플랫폼</ServiceCommingButton>
                <ServiceCommingButton>모바일 서비스</ServiceCommingButton>
              </ServiceButtonWrap>
            </ServiceCommingButtonWrap>
          </ServiceDiv>
          <ServiceText> 현재, 다양한 서비스를 기획중입니다.</ServiceText>
        </ServiceSection>

        {/* 세번째 섹터 */}
        <Section className="third-box_explain">
          <ExplainSection className="explain__section">
            <ExplainDiv className="explain-section__div">
              <ExplainText>
                수많은 매력적인 직업들에 대한 정보를 얻고, 전문지식을
                습득하거나, 이직을 위해 관심있는 분야에 대해서 새롭게
                도전해보세요.
              </ExplainText>
              <ExplainText>
                직업 사회로의 변환, 산업과 기술환경의 급변함에 맞서서 NextPus를
                통해 새로운 전문인으로 본인을 성장시켜나가시기 바랍니다.
              </ExplainText>
            </ExplainDiv>
            <ExplainImg src={explain_image} alt="ExplainImg"></ExplainImg>
          </ExplainSection>
        </Section>
        <NextPusFlowSection className="forth-box_flow">
          <NextPusFlowImage
            src={flow_Nextpus_image}
            alt="FlowNextpus"
          ></NextPusFlowImage>
        </NextPusFlowSection>
        <CareerAndLifestyleSection className="career-and-lifestyle__section">
          <CareerDiv>
            <CareerImage src={careerpath_image} alt="careerpath"></CareerImage>
            <CareerContent>
              <CareerHeader>분야별 직업 및 학습정보</CareerHeader>
              <CareerText>
                {/* 미래에 유망한 직업 중심으로 다양한 직업분야를 탐색하고 본인에게
                맞는 가장 적절하고<br></br> 효과적인 학습방법을 확인하여 새로운
                직업에 도전해보세요. */}
                새로운 직업을 갖기 위해 배워야 하는 학습내용 모든 것들을
                담아내어 많은 사람들에게 정보를 제공하고자 합니다. <br></br>
                실질적이고 유용한 노하우와 지식을 후배들에게 들려주세요.
              </CareerText>
            </CareerContent>
          </CareerDiv>
          <LifestyleDiv>
            <LifestyleImage
              src={lifestyle_image}
              alt="lifestyle"
            ></LifestyleImage>
            <LifestyleContent>
              <LifestyleHeader>라이프스타일 정보공유</LifestyleHeader>
              <CareerText>
                관심있는 분야의 선배, 동료들의 생활 정보를 확인하실 수 있습니다.
                그들이 관심갖는 책과 정보, 삶의 태도와 업무노하우를 살펴보세요.
              </CareerText>
            </LifestyleContent>
          </LifestyleDiv>
        </CareerAndLifestyleSection>
        <JoinusBanner>
          <JoinusContainer>
            <JoinusTextarea>
              <div>
                <h6>
                  <JoinusTextHeadline>Welcome to NextPus!</JoinusTextHeadline>
                </h6>
                <JoinusTextSubline>
                  미래의 학습에 대한 모든 것들을 탐구하고 꿈을 이뤄보세요.
                </JoinusTextSubline>
              </div>
              <Link href="/signup">
                <SignupButton>시작하기</SignupButton>
              </Link>
            </JoinusTextarea>
          </JoinusContainer>
        </JoinusBanner>
        <FooterWrap>
          <FooterDiv>
            <FooterContainer>
              <FooterHeader>
                <FooterRow>
                  <FooterRowHalf>
                    <FooterHeadline href="/">NextPus</FooterHeadline>
                    <FooterNavbar>
                      <FooterNavbarList>
                        <FooterNavbarListA>개인정보 처리방침</FooterNavbarListA>
                      </FooterNavbarList>
                      <FooterNavbarList>
                        <FooterNavbarListA>이용약관</FooterNavbarListA>
                      </FooterNavbarList>
                      <FooterNavbarList>
                        <FooterNavbarListA>FAQ/문의</FooterNavbarListA>
                      </FooterNavbarList>
                    </FooterNavbar>
                  </FooterRowHalf>
                </FooterRow>
                <FooterAddress>
                  <FooterAddressText>
                    {" "}
                    ⓒ 넥스트퍼스 NextPus / 대표 전세환 / 서울특별시 관악구 /
                    사업자등록번호 / 통신판매업신고 제 호 / 직업정보제공사업
                    신고번호
                  </FooterAddressText>
                  <FooterAddressText>
                    ☎ 서비스관련 문의: 010-7578-1252
                  </FooterAddressText>
                  <FooterAddressText>ⓘ arthursmind@naver.com</FooterAddressText>
                </FooterAddress>
              </FooterHeader>
            </FooterContainer>
          </FooterDiv>
        </FooterWrap>
      </Main>
    </Body>
  );
};

const Body = styled.div`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0, 9);
  font-family: sans-serif;
  box-sizing: border-box;
  display: block;

  outline: 0;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
`;

const Main = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  display: block;
`;

//Main- contents box
const Section = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  min-height: 840px;
  padding: 60px, 0;
  position: relative;
  margin: auto;
  background-color: #f5f9fa;
`;

// 첫번째 section(intro와 Service 분야)
const IntroSection = styled(Section)`
  align-content: start;
  min-height: 300px;
  padding-bottom: 138px;
  padding-top: 40px;

  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1128px;
  margin: auto;
  padding: 52px 0;
`;

const Intro = styled.div`
  width: 100%;
`;

const ServiceSection = styled(Section)`
  align-content: start;
  min-height: 0px;
  padding-bottom: 138px;
  padding-top: 40px;
  top: 0;
  right: 0;
  left: 0;

  flex-wrap: wrap;
  align-items: center;
  background-color: #d1f7e4;
  max-width: 1128px;
  margin: auto;
  padding: 24px 0 36px;
`;

const ServiceDiv = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  margin: auto;
  @media (min-width: 1161px) {
    padding: 28px 0;
  }
`;

const ServiceButtonWrap = styled.div`
  margin-right: 0px;
  padding: 0;
  display: inline-flex;
  flex-grow: 1;
  flex-wrap: wrap;
  width: max-content;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  box-sizing: content-box;
`;

const ServiceCommingButtonWrap = styled(ServiceButtonWrap)`
  @media (min-width: 1161px) {
  }
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
`;

const ExplainSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 640px;
  width: 100%;
`;

const ExplainDiv = styled.div`
  min-width: 50%;
  width: 50%;
  margin: auto;
  padding-right: 50px;
`;

const NextPusFlowSection = styled(Section)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-height: 540px;
  width: 100%;
  margin: 0 auto;
`;

const CareerAndLifestyleSection = styled(Section)`
  min-height: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 1161px) {
    padding: 60px 0;
  }
`;

const CareerDiv = styled.div`
  display: flex;
  flex-grow: 2;
  flex-wrap: wrap;
  height: 100%;
  margin-right: 14px;
  flex-direction: column;
`;

const LifestyleDiv = styled.div`
  display: flex;
  flex-grow: 2;
  flex-wrap: wrap;
  height: 100%;
  margin-right: 14px;
  flex-direction: column;
`;

const CareerContent = styled.div`
  width: 456px;
  margin: auto 0;
`;
const LifestyleContent = styled(CareerContent)``;

const JoinusBanner = styled.div`
  padding: 2rem 0;
  background: linear-gradient(90deg, #582401 1.2rem, transparent 1%) center,
    linear-gradient(#582401 1.3125rem, transparent 1%) center, #24211a;
  background-size: 1.5rem 1.5rem;
  color: white;
  position: relative;
`;

const JoinusContainer = styled.div`
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1196px) {
    max-width: 1128px;
  }
  width: 100%;
`;

const FooterWrap = styled.div`
  height: 18rem;
  color: #44576c;
  @media (min-width: 768px) {
    margin-top: 5rem !important;
  }
`;
const FooterDiv = styled.div`
  box-shadow: inset 0 0.0625rem 0 0 #d7e2eb;
  width: 100%;
  max-width: 100%;
  padding: 3.2rem 0;
  padding-left: 0 !important;
  padding-right: 0 !important;
`;
const FooterContainer = styled.div`
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1196px) {
    max-width: 1128px;
  }
  width: 100%;
  padding-left: 0px;
  padding-right: 0px;
`;
const FooterHeader = styled.div`
  width: auto;
`;
const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 0;
  margin-left: 0;
`;

const FooterRowHalf = styled.div`
  @media (min-width: 768px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  @media (min-width: 576px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
  position: relative;
  width: 100%;
`;
const FooterHeadline = styled.a`
  -webkit-font-smoothing: antialiased;
  margin-left: 0;
  color: #582401;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 0;
  transition-duration: 0.08s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  text-align: left;
  &:hover {
    color: #24211a;
  }
`;
const FooterNavbar = styled.ul`
  float: none;
  margin-top: 0.625rem;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  list-style: none;
  flex-wrap: wrap;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;
const FooterAddress = styled.div`
  margin-top: 1rem;
  font-size: 0.6875rem;
  line-height: 1rem;
  color: #a6a6a6;
`;

const FooterAddressText = styled.p`
  line-height: 1rem;
  margin: 0;
  font-weight: 400;
  letter-spacing: -0.1px;
  font-family: "Inter", "NotoSansKR", "Helvetica Neue", Helvetica, Arial,
    "맑은 고딕", malgun gothic, "돋움", Dotum, sans-serif, "Apple Color Emoji",
    "Noto Color Emoji";
  letter-spacing: -0.1px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #a6a6a6;
`;

const FooterNavbarList = styled.a`
  float: none;
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.009em;
  display: list-item;
  text-align: -webkit-match-parent;
`;

const FooterNavbarListA = styled.a`
  display: table;
  margin: 0;
  padding: 0;
  font-size: 0.8125rem;
  color: #8ca5af;
  line-height: 1.25rem;
  transition-duration: 0.08s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  transition-delay: initial;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
`;

//////////////////////////////////////////
///////  Text & Text Wrapper ///////////
////////////////////////////////////////

const HeadlineText = styled.h1`
  font-size: 3rem;
  color: #209648;
  font-weight: 300;
  line-height: 70px;

  @media (min-width: 1160px) {
    width: 90%;
    padding-bottom: 24px;
  }
`;

const SublineText = styled(HeadlineText)`
  font-size: 1.2rem;
  color: black;
  font-weight: 200;
  line-height: 35px;
  padding-bottom: 8px;

  @media (min-width: 800px) {
    font-size: 1.5rem;
    width: 90%;
    padding-bottom: 8px;
  }
`;

const ServiceText = styled(SublineText)`
  color: #209648;
  font-weight: 400;
  margin-top: 34px;
  text-align: center;
  margin: 32px auto;
`;

const ExplainText = styled(SublineText)`
  font-size: 20px;
  font-weight: 400;
  @media (min-width: 800px) {
    font-size: 22px;
  }
`;

const CareerHeader = styled(SublineText)`
  margin-bottom: 24px;
  font-size: 2.2rem;
  line-height: 1.16667;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
`;
const LifestyleHeader = styled(CareerHeader)``;

const CareerText = styled(SublineText)`
  font-size: 18px;
  font-weight: 300;
  @media (min-width: 800px) {
    font-size: 20px;
  }
`;

const JoinusTextarea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const JoinusTextHeadline = styled.p`
  font-size: 24px;
  margin-bottom: 0.25rem;
  font-weight: 600;
  color: #f9c4a4;
  line-height: 1.6;
  letter-spacing: -0.1px;
  margin-top: 0;
  display: block;
  font-family: "Inter", "NotoSansKR", "Helvetica Neue", Helvetica, Arial,
    "맑은 고딕", malgun gothic, "돋움", Dotum, sans-serif, "Apple Color Emoji",
    "Noto Color Emoji";
`;

const JoinusTextSubline = styled.h4`
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.009em;
  font-weight: 400;
  color: inherit;
  margin-top: 0;
  margin-bottom: 0;
  display: block;
  font-family: "Inter", "NotoSansKR", "Helvetica Neue", Helvetica, Arial,
    "맑은 고딕", malgun gothic, "돋움", Dotum, sans-serif, "Apple Color Emoji",
    "Noto Color Emoji";
`;

//////////////////////////////////////////
///////  Image  /////////////////////////
////////////////////////////////////////

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

const ExplainImg = styled.img`
  height: 840px;
  align-self: center;
  margin-left: 96px;
`;

const NextPusFlowImage = styled.img`
  width: 80%;
  height: auto;
  align-self: center;
  margin: auto;
`;

const CareerImage = styled.img`
  flex-grow: 2;
  height: auto;
  max-width: 340px;
  margin: 0 72px 56px 0;
`;

const LifestyleImage = styled.img`
  flex-grow: 2;
  height: auto;
  max-width: 340px;
  margin: 0 72px 56px 0;
`;

//////////////////////////////////////////
///////  Button /////////////////////////
////////////////////////////////////////

const ButtonWrap = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
`;

const Button = styled.button`
  width: 96px;
  height: 40px;
  align-items: center;
  text-align: center;
  outline: none;
  padding: 0 12px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 0;
  margin-right: 12px;
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

const ServiceButton = styled.button`
  align-items: center;
  text-align: center;
  outline: none;
  padding: 0 12px;
  font-weight: bold;
  border-radius: 24px;
  cursor: pointer;

  position: relative;
  font-size: 16px;
  width: 200px;
  height: 50px;
  margin-left: 0;
  margin-right: 12px;
  border: none;
  border-radius: 28px;
  margin: 0 0 5px 0;

  color: white;
  background-color: #209648;
`;

const ServiceCommingButton = styled(ServiceButton)`
  background-color: white;
  color: #209648;
  border: 2px solid #209648;
  border-radius: 28px;
`;

const Anchor = styled(Button.withComponent("a"))`
  color: black;
`;

export default LandingPage;
