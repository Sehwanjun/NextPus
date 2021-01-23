import styled, { createGlobalStyle } from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

// 확대하기 전체화면으로 채우기 위한 CSS
export const Overlay = styled.div`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  height: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;

  /* Header내의 h1컴포넌트 변경 */
  & h1 {
    margin: 0;
    font-size: 17px;
    color: #333;
    line-height: 44px;
  }
`;

export const CloseButton = styled(CloseOutlined)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;

export const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
`;

export const ImageWrapper = styled.div`
  padding: 32px;
  text-align: center;

  & img {
    margin: 0 auto;
    max-height: 750px;
  }
`;

export const Indicator = styled.div`
  text-align: center;

  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;

// 기본으로 설정되는 라이브러리의 className과 기존 세팅된 css를 변경하기 위한 방법
// (ex. slick-slide는 slick라이브러리에서 이미 정해진 클래스명)
// Global로 할 경우 또한, classname이 변경되지 않고 정한 그대로..
export const Global = createGlobalStyle`
.slick-slide {
  display: inline-block;
}
`;
