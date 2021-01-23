import styled from "styled-components";
import { Form, Radio } from "antd";

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
export const StyledBox = styled.div`
  margin-bottom: 0.5em;
  transition: all 0.3s;
  :focus-within {
    transform: scale(1.05, 1.05);
  }
`;

export const InputBox = styled.input`
  background-color: transparent;
  box-shadow: none;
  border-radius: 0;
  border-color: #a6a6a6;
  border-style: none none solid none;
  border-width: 0.1px;
  width: 100%;
  padding: 5px 3px;
  transition: all 0.5s;
  font-size: 1.04em;
  ::placeholder {
    color: transparent;
  }
  :focus {
    box-shadow: none;
    outline: none;
    border-color: #015cab;
  }
`;

export const TextAreaBox = styled.textarea`
  background-color: transparent;
  box-shadow: none;
  border-radius: 0;
  border-color: #a6a6a6;
  border-style: none none solid none;
  border-width: 0.1px;
  width: 100%;
  padding: 5px 3px;
  transition: all 0.5s;
  font-size: 1.04em;
  ::placeholder {
    color: transparent;
    font-size: 0.6em;
  }
  :focus {
    box-shadow: none;
    outline: none;
    border-color: #015cab;
  }
`;

export const StyledLabel = styled.label`
  cursor: text;
  font-size: 1em;
  color: #2c4d83;
  display: block;
  opacity: 1;
  transform: translateY(-1.25em);
  transform-origin: 0 0;
  transition: all 0.3s;

  ${InputBox}:focus ~ & {
    transform: translateY(-3em) scale(0.8);
  }
  ${InputBox}:valid ~ & {
    transform: translateY(-3em) scale(0.8);
  }
  ${InputBox}:not(:placeholder-shown) ~ & {
    transform: translateY(-3em) scale(0.8);
  }
`;

export const NormalLabel = styled.label`
  color: #2c4d83;
  margin-bottom: 17px;
`;
export const SpanLabel = styled.label`
  margin-bottom: 16px;
  margin-top: 16px;
  font-size: 1.1em;
  color: #015cab;
  cursor: pointer;
`;
export const ButtonWrapper = styled.div`
  margin: 4px auto;
  padding-top: 4px;
  text-align: center;
`;

export const StyledButton = styled.button`
  border: none;
  margin: 0;
  padding: 3px 6px 3px 0;
  background-color: transparent;
  color: #015cab;
  cursor: pointer;
  font-size: 1.2em;
`;

export const CheckboxGroup = styled.div`
  margin-top: 1em;
  margin-bottom: 1.8em;
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

export const SelectBox = styled.span`
  margin-bottom: 12px;
`;

export const StyledSelect = styled.select`
  font: 15px/24px "Lato", Arial, sans-serif;
  color: #333;
  box-sizing: border-box;
  letter-spacing: 0.5px;
  width: 21%;
  min-height: 0;
  margin-right: 4px;
  margin-bottom: 0;
  padding: 6px 0;
  border-radius: 3px;
  padding-left: 12px;
  display: inline-block;
  font-size: 0.88em;
  list-style: none;
  color: #192227;
  border: none;
  box-sizing: border-box;
  justify-content: space-between;
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
  border-bottom: 8px solid #dddfe2;
  border-color: #015cab;
  overflow: visible;
  margin-left: -24px;
  width: 440px;
  font-size: 1px;
  height: 8px;
  margin-top: 14px;
  padding: 14em 0;
  margin-bottom: 14px;
  display: block;
`;
