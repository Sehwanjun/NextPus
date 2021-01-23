import styled from "styled-components";

export const GlobalContainer = styled.body`
  background: linear-gradient(45deg, #2c4d83, #015cab);
  background-attachment: fixed; // 스크롤시 고정
  background-color: #0073b1;
  line-height: 1.41;
  font-size: 1.2em;

  height:100%;
`;

export const GlobalBox = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100%;
position: relative;
padding-bottom: 50px; /* footer height */
`;

export const ContentContainer = styled.div`
  max-width: 1128px;
  margin: auto;
  flex: 1 0 auto;

  min-height: 100%;
padding-top: 44px;
padding-bottom: 50px;
`;

export const ContentBox = styled.form`
  background-color: transparent;
  width: auto;
  padding-bottom: 0;
  flex-direction: column;
  display: flex;
  /* flex-flow: row wrap; */
  margin: auto;
  border-radius: 2px;
`;

// export const ContentRow = styled(Row)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-size: cover;
// `;

export const Header = styled.header`
  flex-direction: column;
  display: block;
`;

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderImage = styled.div`
  margin: 0 auto;
  display: block;
  width: 14.8em;
  height: 3.8em;
  line-height: initial;
  border: 0;
`;
export const HeaderTextBox = styled.div`
  font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
  padding: 24px 24px;
  line-height: 1.42;
  font-size: 2.64rem;
`;

// @registerForm

export const RegisterContainer = styled.div`
  padding: 24px;
  width: 440px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  background-color: #edf0f3;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;

// @Footer
export const FooterContainer = styled.footer`

  /* 하단고정 */
  /* padding-bottom: 4rem; */
  background-color: #fff;
  height:50px;
  margin-top: -50px;
  position: relative;
  /* bottom: 0px; */
  
  width: 100%;
  /* left: 0px; */
`;

export const Footer = styled.div`
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  transform: translateY(100%);
  text-align: center;
  font-weight: 400;
  
bottom: 0;
left: 0;
right: 0;
`

export const FooterUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 4px;
  padding: auto;
  max-width: 1128px;
  list-style-type: none;
  position: relative;
`;

export const FooterList = styled.li`
  line-height: 1.23;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  padding: 1.32em;
  position: relative;
  text-align: left;
  align-items: center;
  font-weight: 600;
  font-size: 1.16rem;
  a{
  font-size: 0.96em;
  color: rgba(0, 0, 0, 0.4);
:hover {
  color: var(--blue-70);
}
  }
`;
