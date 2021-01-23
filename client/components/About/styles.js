import styled from "styled-components";

export const Body = styled.div`
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
  background: transparent;
`;

export const Main = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  display: block;
`;

// Main- contents box
export const Section = styled.div`
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
export const IntroSection = styled(Section)`
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

export const Intro = styled.div`
  width: 100%;
`;

export const ServiceSection = styled(Section)`
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

export const ServiceDiv = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  margin: auto;
  @media (min-width: 1161px) {
    padding: 28px 0;
  }
`;

export const ServiceButtonWrap = styled.div`
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

export const ServiceCommingButtonWrap = styled(ServiceButtonWrap)`
  @media (min-width: 1161px) {
  }
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
`;

export const ExplainSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 640px;
  width: 100%;
`;

export const ExplainDiv = styled.div`
  min-width: 50%;
  width: 50%;
  margin: auto;
  padding-right: 50px;
`;

export const NextPusFlowSection = styled(Section)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  min-height: 540px;
  width: 100%;
  margin: 0 auto;
`;

export const CareerAndLifestyleSection = styled(Section)`
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

export const CareerDiv = styled.div`
  display: flex;
  flex-grow: 2;
  flex-wrap: wrap;
  height: 100%;
  margin-right: 14px;
  flex-direction: column;
`;

export const LifestyleDiv = styled.div`
  display: flex;
  flex-grow: 2;
  flex-wrap: wrap;
  height: 100%;
  margin-right: 14px;
  flex-direction: column;
`;

export const CareerContent = styled.div`
  width: 456px;
  margin: auto 0;
`;
export const LifestyleContent = styled(CareerContent)``;

export const JoinusBanner = styled.div`
  padding: 2rem 0;
  background: linear-gradient(90deg, #582401 1.2rem, transparent 1%) center,
    linear-gradient(#582401 1.3125rem, transparent 1%) center, #24211a;
  background-size: 1.5rem 1.5rem;
  color: white;
  position: relative;
`;

export const JoinusContainer = styled.div`
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1196px) {
    max-width: 1128px;
  }
  width: 100%;
`;

export const FooterWrap = styled.div`
  height: 18rem;
  color: #44576c;
  @media (min-width: 768px) {
    margin-top: 5rem !important;
  }
`;
export const FooterDiv = styled.div`
  box-shadow: inset 0 0.0625rem 0 0 #d7e2eb;
  width: 100%;
  max-width: 100%;
  padding: 3.2rem 0;
  padding-left: 0 !important;
  padding-right: 0 !important;
`;
export const FooterContainer = styled.div`
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
export const FooterHeader = styled.div`
  width: auto;
`;
export const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 0;
  margin-left: 0;
`;

export const FooterRowHalf = styled.div`
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
export const FooterHeadline = styled.a`
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
export const FooterNavbar = styled.ul`
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
export const FooterAddress = styled.div`
  margin-top: 1rem;
  font-size: 0.6875rem;
  line-height: 1rem;
  color: #a6a6a6;
`;

export const FooterAddressText = styled.p`
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

export const FooterNavbarList = styled.a`
  float: none;
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: -0.009em;
  display: list-item;
  text-align: -webkit-match-parent;
`;

export const FooterNavbarListA = styled.a`
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

/// ///////////////////////////////////////
/// ////  Text & Text Wrapper ///////////
/// /////////////////////////////////////

export const HeadlineText = styled.h1`
  font-size: 3rem;
  color: #209648;
  font-weight: 300;
  line-height: 70px;

  @media (min-width: 1160px) {
    width: 90%;
    padding-bottom: 24px;
  }
`;

export const SublineText = styled(HeadlineText)`
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

export const ServiceText = styled(SublineText)`
  color: #209648;
  font-weight: 400;
  margin-top: 34px;
  text-align: center;
  margin: 32px auto;
`;

export const ExplainText = styled(SublineText)`
  font-size: 20px;
  font-weight: 400;
  @media (min-width: 800px) {
    font-size: 22px;
  }
`;

export const CareerHeader = styled(SublineText)`
  margin-bottom: 24px;
  font-size: 2.2rem;
  line-height: 1.16667;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
`;
export const LifestyleHeader = styled(CareerHeader)``;

export const CareerText = styled(SublineText)`
  font-size: 18px;
  font-weight: 300;
  @media (min-width: 800px) {
    font-size: 20px;
  }
`;

export const JoinusTextarea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const JoinusTextHeadline = styled.p`
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

export const JoinusTextSubline = styled.h4`
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

/// ///////////////////////////////////////
/// ////  Image  /////////////////////////
/// /////////////////////////////////////

// const LogoWrap = styled.a`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-right: auto;
//   color: #209648;
//   &:hover {
//     color: #209648;
//   }
// `;

// const LogoImage = styled.img`
//   float: left;
//   height: 40px;
//   &:hover {
//     height: 42px;
//   }
// `;

// const Logo_TextDiv = styled.div`
//   text-align: center;
//   font-size: 24px;
//   margin: auto;
//   display: flex;
//   align-items: center;
//   padding-left: 5px;
// `;

export const ExplainImg = styled.img`
  height: 840px;
  align-self: center;
  margin-left: 96px;
`;

export const NextPusFlowImage = styled.img`
  width: 80%;
  height: auto;
  align-self: center;
  margin: auto;
`;

export const CareerImage = styled.img`
  flex-grow: 2;
  height: auto;
  max-width: 340px;
  margin: 0 72px 56px 0;
`;

export const LifestyleImage = styled.img`
  flex-grow: 2;
  height: auto;
  max-width: 340px;
  margin: 0 72px 56px 0;
`;

/// ///////////////////////////////////////
/// ////  Button /////////////////////////
/// /////////////////////////////////////

// const ButtonWrap = styled.div`
//   width: 400px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 50px auto;
// `;

export const Button = styled.button`
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

export const SignupButton = styled(Button)`
  border: none;
  color: white;
  background-color: #209648;
  &:hover {
    background-color: #176b33;
    color: white;
  }
`;

export const ServiceButton = styled.button`
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

export const ServiceCommingButton = styled(ServiceButton)`
  background-color: white;
  color: #209648;
  border: 2px solid #209648;
  border-radius: 28px;
`;
