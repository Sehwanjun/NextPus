import styled from 'styled-components';
import { Row, Col } from 'antd';

export const GlobalContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  position: relative;
  line-height: 1.34;
  background-color: #f0f2f5;
`;

export const ContentContainer = styled.div`
  padding-bottom: 132px;
  padding-top: 92px;
  height: 100%;
  margin: auto;
  width: 980px;
  min-width: 500px;
`;

export const StyledRow = styled(Row)`
  display: flex;
`;

export const StyledCol = styled(Col)`
  flex: 1, 1, auto;
`;

// 이미지
export const ImageSection = styled.div`
  svg { width: 90%;
    /* height: auto; */
    align-self: center;
    margin: auto;
    margin-left: -280px;
    /* height: 840px; */
    resize: both; /* 이미지 최대 사이즈에 적용 */
    float: center;
    max-width: 500px; /* 넓이를 지정 */
    height: auto; /* 높이를 지정 */
    }
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
  padding: 8px 0 8px 0;
`;
export const TitleLogo = styled.div`
  height: 70px;
  /* margin: -24px; */
  /* margin-bottom: -44px; */
  /* margin-left: -42px; */
  border: 0;

  svg {
    height: 70px;
  }
`;

export const TitleTextBox = styled.div`
  font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
  font-size: 2.21rem;
  font-weight: normal;
  line-height: 28px;
  padding-bottom: 8px;
  b {
  font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
  font-size: inherit;
  font-weight: 400;
   }
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
  padding-bottom: 24px;
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
  a {
    font-size: 1.076rem;
    }

`;

export const FooterUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: block;
  li {
    font-size: 1.076rem;
  }
`;
