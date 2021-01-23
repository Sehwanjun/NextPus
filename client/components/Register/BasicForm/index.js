import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { Form } from "antd";
import Link from "next/link";
import Router from 'next/router';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { SIGN_UP_REQUEST, loginRequestAction } from "reducers/user";
import useInput from "hooks/useinput";
import {
  ErrorMessage,
  FormWrapper,
  FormBox,
  InputBox,
  ButtonWrapper,
  RegisterButton,
  LineDiv,
  // ContentCurve,
  StyledSpan,
  StyledA,
} from "./styles";

const BasicInformation = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, logInDone, signUpError, me } = useSelector(state => state.user);

  // // 기로그인상태: 메인화면으로  
  // useEffect(() => {
  //   if (me && me.id) {
  //     Router.replace("/dashboard"); // push: 뒤로가기시 이전페이지로, replace: 기록에서 사라져버림
  //   }
  // }, [me && me.id]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError])

  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, setPassword] = useState("");

  // @ 비밀번호 길이 검토
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const onChangePassword = useCallback(
    e => {
      setPassword(e.target.value);
      setPasswordLengthError(e.target.value.length < 6);
      console.log(e.target.value);
    },
    [password]
  );
  // @ 비밀번호 확인
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const onChangePasswordCheck = useCallback(
    e => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password, passwordCheck]
  );

  // @동의 후 가입하기 --> 추가정보 입력화면으로
  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (passwordCheck.length < 8) {
      return setPasswordLengthError(true);
    }
    console.log(email, nickname, password);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });

  }, [email, password, passwordCheck]);


  useEffect(() => {
    if (signUpDone) {
      dispatch(loginRequestAction({ email, password, }));
    }
  }, [signUpDone]);


  // login 성공시 me가 생성되기때문에 해당코드 부여(회원가입후 곧바로 메인화면으로)
  useEffect(() => {
    if (logInDone) {
      Router.replace('/onboard');
    }
  }, [logInDone]);

  return (
    <>
      <Head>
        <title>회원가입 | NextPus</title>
      </Head>
      {/* <div>
        <SocialButton>
        </SocialButton>
      </div> */}
      <FormWrapper>
        <FormBox>
          <Form onFinish={onSubmit}>
            <div>
              {/* <label htmlFor="user-email">이메일 주소</label> */}
              {/* <br /> */}
              <InputBox
                name="user-email"
                placeholder="이메일 입력"
                value={email}
                type="email"
                required
                onChange={onChangeEmail}
              />
            </div>
            <div>
              {/* <label htmlFor="user-nickname">성명</label> */}
              <br />
              <InputBox
                name="user-nickname"
                placeholder="성명"
                value={nickname}
                required
                onChange={onChangeNickname}
              />
            </div>
            <div>
              {/* <label htmlFor="user-password">비밀번호(6자 이상)</label> */}
              {/* <br /> */}
              <InputBox
                name="user-password"
                placeholder="비밀번호 생성(8자 이상)"
                type="password"
                value={password}
                required
                onChange={onChangePassword}
              />
            </div>
            <div>
              {/* <label htmlFor="user-password-check">비밀번호 확인</label> */}
              {/* <br /> */}
              <InputBox
                name="user-password-check"
                type="password"
                placeholder="비밀번호 확인"
                value={passwordCheck}
                required
                onChange={onChangePasswordCheck}
              />
              {passwordError && (
                <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
              )}
              {passwordLengthError && (
                <ErrorMessage>비밀번호는 6자 이상이어야 합니다.</ErrorMessage>
              )}
            </div>
            <LineDiv />

            <StyledSpan>
              <p margin-top="16">
                동의 후 가입하기 버튼을 클릭하면 NextPus&nbsp;
                <Link href="/introduce">
                  <StyledA target="_blank">사용자약관</StyledA>
                </Link>
                ,
                <br />
                <Link href="/introduce">
                  <StyledA target="_blank">개인정보 취급방침</StyledA>
                </Link>
                ,
                <Link href="/introduce">
                  <StyledA target="_blank">&nbsp;쿠키정책</StyledA>
                </Link>
                에 동의하는 것으로 간주합니다.
              </p>
            </StyledSpan>
            {/* <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            이용약관을 읽고 동의합니다.
          </Checkbox>
          {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
        </div> */}
            <div>
              <ButtonWrapper>
                <RegisterButton type="primary" htmlType="submit" loading={signUpLoading} >
                  동의 후 가입하기
                </RegisterButton>
              </ButtonWrapper>
            </div>
            <LineDiv />
            <StyledSpan>
              <p>이미 NextPus의 회원이시면
                <Link href="/">
                  <StyledA>&nbsp;로그인</StyledA>
                </Link>
                하세요.
              </p>
            </StyledSpan>
          </Form>
        </FormBox>
      </FormWrapper>
    </>
  );
};

BasicInformation.propTypes = {
};

export default BasicInformation;
