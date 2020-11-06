import styled from "styled-components";
import { Row } from "antd";

export const GlobalContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  position: relative;
  line-height: 1.34;
  background-color: #f0f2f5;
`;

export const ContentContainer = styled.div`
  padding-top: 68px;
  padding-bottom: 64px;

  margin: auto;
  width: 980px;
`;

export const ContentRow = styled(Row)``;

// 이미지
export const ImageSection = styled.div``;
export const Image = styled.img`
  width: 90%;
  /* height: auto; */
  align-self: center;
  margin: auto;
  margin-left: -150px;
  /* height: 840px; */
  resize: both; /* 이미지 최대 사이즈에 적용 */
  float: center;
  max-width: 500px; /* 넓이를 지정 */
  height: auto; /* 높이를 지정 */
`;

export const ContentBox = styled.div`
  padding-right: 48px;
`;

export const LoginContainer = styled.div`
  padding-bottom: 24px;
  padding-top: 10px;
`;

export const LoginBox = styled.div`
  text-align: center;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 46px 0 0;
  padding: 42px 0 28px;
  width: 396px;
`;
// 만약에 1개만 export한다면 export default 행 맨 끝으로 보내서 구분시켜야 함(문법에러)

export const Title = styled.div`
  padding: 8px 0 34px 0;
`;
export const TitleLogo = styled.img`
  height: 70px;
  margin: -34px;
  border: 0;
`;
export const TitleTextBox = styled.div`
  font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
  padding-bottom: 8px;
`;
export const TitleSubtextBox = styled.div`
  padding-bottom: 12px;
  color: #606770;
  font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 12px;
`;

export const Footer = styled.div`
  display: block;
  padding-top: 20px;
  font-size: 12px;
  margin-bottom: 20px;
  background-color: #ffffff;
`;

export const FooterContainer = styled.div`
  color: #737373;
  margin: 0 auto;
  width: 980px;
  display: block;
  line-height: 1.3;
`;

export const ContentCurve = styled.div`
  border-bottom: 1px solid #dddfe2;
  font-size: 1px;
  height: 8px;
  margin-bottom: 8px;
  display: block;
`;

export const FooterList = styled.li`
  padding-right: 24px;
  padding-left: 0;
  border-width: 0;
  vertical-align: top;
  display: inline-block;
`;

export const FooterUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: block;
`;
