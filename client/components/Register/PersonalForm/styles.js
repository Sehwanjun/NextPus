import styled from "styled-components";
import { DatePicker, Form, Input, Radio, Select } from "antd";

export const RadioGroup = styled(Radio.Group)`
  text-align: center;
`;

export const RadioButton = styled(Radio.Button)`
  margin-left: 6px;
  background-color: #ffffff;
  border-width: thin;
  border-color: #e9ecf3;
  border-radius: 3px;
  font-size: 12px;
  line-height: 34px;
  padding: 0 16px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  white-space: nowrap;
  color: #015cab;
  ::selection {
    background-color: #015cab;
  }

  :hover {
    background-color: rgb(232, 240, 254);
  }
`;

export const ErrorMessage = styled.div`
  font-size: 0.96em;
  background: red;
  color: white;
  padding-left: 12px;
`;

export const StyledDatePicker = styled(DatePicker)`
  margin-left: 12px;
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

export const StyledSelect = styled(Select)`
  margin-bottom: 6px;
`;

export const StyledForm = styled(Form)`
  line-height: 1.34;
  margin: 0 auto;
  padding: 0;
  display: block;
  width: 100%;
`;

export const FormBox = styled.div`
  font-size: 17px;
  width: 100%;
  display: inline-block;
  margin: auto;
  padding: 6px 0;
`;

export const InputBox = styled(Input)`
  border-radius: 3px;
  font-size: 1.02em;
  padding: 6px 10px;
  max-width: 352px;
  background: #ffffff;
  border: 1px solid #dddfe2;
  color: #1d2129;
  line-height: 12px;
  vertical-align: middle;
  margin-top: 2px;
  margin-bottom: 8px;
`;

export const ButtonWrapper = styled.div`
  margin: 4px auto;
  padding-top: 4px;
  text-align: center;
`;

export const RegisterButton = styled.button`
  margin: 0;
  background-color: #015cab;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  line-height: 38px;
  padding: 0 28px;
  max-width: 352px;
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

export const SignUpButton = styled(RegisterButton)`
  background-color: #47a09e;
  width: 240px;
  font-size: 16px;
`;

export const StyledSpan = styled.span`
  line-height: 1.12;
  font-size: 12px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  margin: 12px 0 12px 0;
  text-align: center;
`;

export const StyledA = styled.a`
  line-height: 1.12;
  text-decoration: none;
  font-weight: 600;
  margin: 12px 0 12px 0;
  color: rgba(0, 0, 0, 0.7);

  background-color: transparent;
  border: 0;
  :visited {
    color: #665ed0;
  }
`;

export const LineDiv = styled.div`
  align-items: center;
  border-bottom: 1px solid #dadde1;
  display: flex;
  margin: 14px 12px;
  text-align: center;
`;

export const ContentCurve = styled.div`
  border-bottom: 1px solid #dddfe2;
  font-size: 1px;
  height: 8px;
  margin-bottom: 8px;
  display: block;
`;
