import React, { useCallback, useEffect } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useinput";
import { loginRequestAction } from "../reducers/user";

/// /////////// Styled Component //////////////////
const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
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

  // hooks의 useinput.js 활용(라이브러리 개념 hooks)
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

  // props로 넘기는 함수: callback으로 처리(always)

  // const handleLoginClick = useCallback(e => {
  //   Router.push("/main");
  // });

  const onSubmitForm = useCallback(
    () => {
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
    },
    [email, password]
  );

  return (
    // onFinish: e.preventdefault 자동으로 설정되어 있음(antd)
    <FormWrapper onFinish={onSubmitForm} style={{ padding: "10px" }}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input
          name="user-email"
          value={email}
          type="email"
          onChange={onChangeEmail}
          required
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button
          // onClick={handleLoginClick}
          type="primary"
          htmlType="submit"
          loading={logInLoading}
        >
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
      <div />
    </FormWrapper>
  );
};

export default LoginForm;
