import React from "react";
import Link from "next/link";
import explainImage from "public/img/first_bg_round_real.png";
import flowNextpusImage from "public/img/flow_Nextpus.png";
import careerpathImage from "public/img/careerpath_img.png";
import lifestyleImage from "public/img/lifestyle_img.png";
import { Body, Main, IntroSection, Intro, SublineText, HeadlineText } from "./styles"

const Introduce = () => {
  return (
    <Body>
      <Main className="main">
        <IntroSection>
          <Intro className="first-box_intro-text">
            <SublineText>
              새로운 분야에 도전하거나
              <br />
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
            <ExplainImg src={explainImage} alt="ExplainImg" />
          </ExplainSection>
        </Section>
        <NextPusFlowSection className="forth-box_flow">
          <NextPusFlowImage src={flowNextpusImage} alt="FlowNextpus" />
        </NextPusFlowSection>
        <CareerAndLifestyleSection className="career-and-lifestyle__section">
          <CareerDiv>
            <CareerImage src={careerpathImage} alt="careerpath" />
            <CareerContent>
              <CareerHeader>분야별 직업 및 학습정보</CareerHeader>
              <CareerText>
                {/* 미래에 유망한 직업 중심으로 다양한 직업분야를 탐색하고 본인에게
                맞는 가장 적절하고<br></br> 효과적인 학습방법을 확인하여 새로운
                직업에 도전해보세요. */}
                새로운 직업을 갖기 위해 배워야 하는 학습내용 모든 것들을
                담아내어 많은 사람들에게 정보를 제공하고자 합니다. <br />
                실질적이고 유용한 노하우와 지식을 후배들에게 들려주세요.
              </CareerText>
            </CareerContent>
          </CareerDiv>
          <LifestyleDiv>
            <LifestyleImage src={lifestyleImage} alt="lifestyle" />
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

export default Introduce;
