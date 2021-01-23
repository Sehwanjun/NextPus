import React, { useCallback, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Router from 'next/router';
import useInput from "hooks/useinput";
import { loginRequestAction } from "reducers/user";
import {
  FormWrapper,
  FormBox,
  InputBox,
  ButtonWrapper,
  LineDiv,
  LogInButton,
  SignUpButton,
  PasswordForgot
} from "./styles";

const LoginForm = () => {
  const dispatch = useDispatch();
  // 구조분해할당
  // initialstate >user > isloggedin(state.user: state.user.isLoggedin과 동일)
  const { logInLoading, logInDone, logInError, me } = useSelector(state => state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    dispatch(loginRequestAction({ email, password, }));
  }, [email, password]);

  return (
    // onFinish: e.preventdefault 자동으로 설정되어 있음(antd)
    <FormWrapper onFinish={onSubmitForm}>
      <FormBox>
        {/* <label htmlFor="user-id">아이디</label>
        <br /> */}
        <InputBox
          name="user-email"
          placeholder="이메일"
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
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
          required
        />
      </FormBox>
      <ButtonWrapper>
        {/* <Link href="/dashboard">
          <a> */}
        {/* 에러로 인해  loading={logInLoading} 삭제 */}
        <LogInButton htmlType="submit">
          로그인
        </LogInButton>
        {/* </a>
        </Link> */}
      </ButtonWrapper>
      <ButtonWrapper>
        <Link href="/passwordfinder">
          <a>
            <PasswordForgot>비밀번호를 잊으셨나요?</PasswordForgot>
          </a>
        </Link>
      </ButtonWrapper>
      <LineDiv />
      <ButtonWrapper>
        <Link href="/register">
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
