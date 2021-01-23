import styled from "styled-components";
import { Form, Input } from "antd";

export const FormWrapper = styled(Form)`
  line-height: 1.34;
  margin: 0;
  padding: 0;
  display: block;
`;

export const FormBox = styled.div`
  font-size: 17px;
  width: 364px;
  display: inline-block;
  margin: auto;
  padding: 6px 0;
`;

export const InputBox = styled(Input)`
  border-radius: 6px;
  font-size: 16px;
  font-weight: 400;
  padding: 14px 16px;
  width: 330px;
  background: #ffffff;
  border: 1px solid #dddfe2;
  color: #1d2129;
  line-height: 16px;
  vertical-align: middle;
`;

export const ButtonWrapper = styled.div`
  padding-top: 8px;
`;

export const PasswordForgot = styled.p`
  font-size: 1.22em;
  &:hover {
  color:#015cab;
  }
`

export const LogInButton = styled.button`
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
  &:hover {
  background-color: #2C4D83;
  }
`;

export const SignUpButton = styled(LogInButton)`
  background-color: #47a09e;
  width: 240px;
  font-size: 16px;
  &:hover {
  background-color: #0C7D4B;
  }
`;

export const LineDiv = styled.div`
  align-items: center;
  border-bottom: 1px solid #dadde1;
  display: flex;
  margin: 20px 16px;
  text-align: center;
`;
