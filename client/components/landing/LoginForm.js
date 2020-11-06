import React, { useCallback, useEffect } from "react";
import { Form, Input } from "antd";
import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useinput";
import { loginRequestAction } from "../../reducers/user";

/// /////////// Styled Component //////////////////

const FormWrapper = styled(Form)`
  line-height: 1.34;
  margin: 0;
  padding: 0;
  display: block;
`;

const FormBox = styled.div`
  font-size: 17px;
  width: 364px;
  display: inline-block;
  margin: auto;
  padding: 6px 0;
`;

const InputBox = styled(Input)`
  border-radius: 6px;
  font-size: 17px;
  padding: 14px 16px;
  width: 330px;
  background: #ffffff;
  border: 1px solid #dddfe2;
  color: #1d2129;
  line-height: 16px;
  vertical-align: middle;
`;

const ButtonWrapper = styled.div`
  padding-top: 8px;
`;

const LogInButton = styled.button`
  margin: 0;
  background-color: #015cab;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  line-height: 48px;
  padding: 0 16px;
  width: 332px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  white-space: nowrap;
  font-weight: bold;
  color: #ffffff;
  transition: 200ms cubic-bezier(0.08, 0.52, 0.52, 1) background-color,
    200ms cubic-bezier(0.08, 0.52, 0.52, 1) box-shadow,
    200ms cubic-bezier(0.08, 0.52, 0.52, 1) transform;
`;

const SignUpButton = styled(LogInButton)`
  background-color: #47a09e;
  font-size: 16px;
`;

const LineDiv = styled.div`
  align-items: center;
  border-bottom: 1px solid #dadde1;
  display: flex;
  margin: 20px 16px;
  text-align: center;
`;

// const style= useMemo(()=>({marginTop: 10}),[]);
// return(<Input.Search style={style}></Input.Search>)
// 리랜더링 방지하면서 style 꾸밀수 있게끔

const LoginForm = () => {
  const dispatch = useDispatch();

  // 로그인을 위한 리덕스 연결고리
  // initialstate >user > isloggedin(state.user: state.user.isLoggedin과 동일)
  // 구조분해할당
  const { logInLoading, logInError } = useSelector(state => state.user);

  // hooks/useinput.js 활용(라이브러리 개념 hooks)
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  // const [id, setId] = useState(""); 8줄을 hooks로 줄임
  // const onChangeId = useCallback(e => {
  //   setId(e.target.value);
  // }, []);
  // const [password, setPassword] = useState("");
  // const onChangePassword = useCallback(e => {
  //   setPassword(e.target.value);
  // }, []);

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onSubmitForm = useCallback(() => {
    // if (isloggedIn) {
    //   Router.push("/main");
    // } else {
    //   alert("로그인에 실패하였습니다.");
    // }
    // if (isLoggedIn){
    // dispatch(loginAction(id, password));
    // console.log(id, password);
    // Router.push("/main")}else{alert("Login failure")}
    dispatch(
      loginRequestAction({
        email,
        password,
      })
    );
    console.log(email, password);
    Router.push("/main");
  }, [email, password]);

  return (
    // onFinish: e.preventdefault 자동으로 설정되어 있음(antd)
    <FormWrapper onFinish={onSubmitForm}>
      <FormBox>
        {/* <label htmlFor="user-id">아이디</label>
        <br /> */}
        <InputBox
          name="user-email"
          placeholder="이메일주소를 입력하세요."
          value={email}
          type="email"
          onChange={onChangeEmail}
          required
        />
      </FormBox>
      <FormBox>
        {/* <label htmlFor="user-password">비밀번호</label>
        <br /> */}
        <InputBox
          name="user-password"
          type="password"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={onChangePassword}
          required
        />
      </FormBox>
      <ButtonWrapper>
        <Link href="/main">
          <a>
            <LogInButton
              // onClick={onSubmitForm}
              htmlType="submit"
              loading={logInLoading}
            >
              로그인
            </LogInButton>
          </a>
        </Link>
      </ButtonWrapper>
      <ButtonWrapper>
        <Link href="/passwordfinder">
          <a>
            <p>비밀번호를 잊으셨다면?</p>
          </a>
        </Link>
      </ButtonWrapper>
      <LineDiv />
      <ButtonWrapper>
        <Link href="/signup">
          <a>
            <SignUpButton>회원가입</SignUpButton>
          </a>
        </Link>
      </ButtonWrapper>

      <div />
    </FormWrapper>
  );
};

export default LoginForm;
