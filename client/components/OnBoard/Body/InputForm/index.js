// // @ 추가정보 입력폼

import React, { useCallback, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import { Checkbox } from "antd";
import PropTypes from "prop-types";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
// import moment from "moment";
// import "moment/locale/ko";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
// import { UPDATE_USERDATA_REQUEST } from "../../reducers/user";
import {
  ButtonWrapper,
  RegisterButton,
  StyledForm,
  InputBox,
  TextAreaBox,
  FormBox,
  ContentCurve,
  StyledSelect,
  SelectBox,
  StyledLabel,
  StyledBox,
  StyledButton,
  NormalLabel,
  SpanLabel,
  CheckboxGroup,
  LineDiv,
} from "./styles";

const index = () => {
  const { signUpLoading } = useSelector(state => state.user);
  const dispatch = useDispatch();
  //   // // Hooks 사용
  //   // const [email, onChangeEmail] = useInput("");
  //   // const [nickname, onChangeNickname] = useInput("");
  //   // const [password, onChangePassword] = useInput("");

  //   // // useState 사용
  //   // const [passwordCheck, setPasswordCheck] = useState("");
  //   // const [passwordError, setPasswordError] = useState(false);
  //   // const [passwordLengthError, setPasswordLengthError] = useState(false);

  //   // event함
  //   const onSubmit = useCallback(() => {
  //     // 에러검증

  //     // redux
  //     return (
  //       dispatch({
  //         type: SIGN_UP_REQUEST,
  //         data: { company, position, detail },
  //       }),
  //       Router.push("/main")
  //     );
  //   }, [email, password, passwordCheck]);

  //    // /////////////////////////////
  const [newid] = React.useState(nanoid);
  const [inputFields, setInputFields] = useState([
    {
      id: { newid },
      userCompany: "",
      userPosition: "",
      careerLocation: "",
      careerDetail: "",
      isWorking: true,
      careerPeriodStart: [],
      careerPeriodEnd: [],
    },
  ]);

  // inputField.id: 기존의 inputfields의 것, id: event가 발생하는 해당 id
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(inputField => {
      if (id === inputField.id) {
        inputField[event.target.name] = event.target.value;
      }
      console.log(event.target.value);
      return inputField;
    });
    setInputFields(newInputFields);
  };

  const handleAddFields = useCallback(() => {
    setInputFields([
      ...inputFields,
      {
        id: { newid },
        userCompany: "",
        userPosition: "",
        careerLocation: "",
        careerDetail: "",
        nowWorking: false,
        userCareerPeriodStartMonth: "",
        userCareerPeriodStartYear: "",
        userCareerPeriodEndMonth: "",
        userCareerPeriodEndYear: "",
        isWorking: "",
      },
    ]);
  }, [inputFields]);

  const handleRemoveFields = useCallback(
    id => {
      setInputFields(inputFields.filter(inputField => inputField.id !== id));
      // setInputFields(inputFields.filter(inputField => inputField.id !== id));
      // const values = [...inputFields];
      // values.filter(value => value.id !== id);
      // setInputFields(values);
    },
    [inputFields]
  );

  const years = () => {
    const allYears = [];
    const thisYear = new Date().getFullYear();

    for (let i = thisYear; i >= thisYear - 40; i -= 1)
      allYears.push(
        <option key={i} value={i}>
          {i}년
        </option>
      );
    return (
      <>
        <option selected>년</option>
        {allYears}
      </>
    );
  };

  const months = () => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return (
      <>
        <option selected>월</option> {/* 선택창 초기값 */}
        {monthNames.map(month => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </>
    );
  };

  // 1. 체크시(e.target.checked) end의 month와 year폼 조건부 가리기
  // 2. 체크시 end의 month와 year값은 new Date.year? 가져다 넣기
  // (inputfield의 userCareerPeriodEndMonth) submit 할때

  const onToggleWorking = useCallback(
    (id, e) => {
      const toggleInputFields = inputFields.map(inputField => {
        if (id === inputFields.id) {
          inputField[e.target.name] = e.target.checked;
        }
        inputFields.isWorking(prev => !prev);
        console.log(inputFields.isWorking);
        return inputField;
      });
      setInputFields(toggleInputFields);
    },
    [inputFields]
  );

  const [noWorking, setNoWorking] = useState(true);
  const onToggleNoWorking = useCallback(e => {
    e.preventDefault();
    setNoWorking(prev => !prev);
  }, []);

  // 저장 후 다음
  const onSubmit = useCallback(() => {
    // 재직중일시 date 처리
    if (isWorking) {
      /* 체크시 2. */
      // setIsWorking(true);
    } else {
      // setIsWorking();
    }
    // 에러검증
    if (birthday === "") {
      return setBirthdayError(true);
    }
    console.log(birthday);
    // redux
    return (
      // dispatch({
      //   type: UPDATE_USERDATA_REQUEST,
      //   data: { userCompany, userPosition, careerDetail, nowWorking },
      // }),
      navigation.next()
    );
  }, []);
  // }, [userCompany, userPosition, careerLocation, careerDetail, nowWorking]);

  // const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  // const [endDate, setEndDate] = useState(new Date("2014/02/10"));

  return (
    <>
      <Head>
        <title>정보입력 | NextPus</title>
      </Head>
      <StyledForm name="career-input" onSubmit={onSubmit}>
        {inputFields.map(inputField => (
          <FormBox key={inputField.id}>
            <StyledBox>
              <InputBox
                id="userCompany"
                autoFocus="false"
                name="userCompany"
                placeholder="ex. ABC회사"
                required
                value={inputField.userCompany}
                onChange={event => handleChangeInput(inputField.id, event)}
              />
              <StyledLabel for="userCompany">회사명</StyledLabel>
            </StyledBox>
            <StyledBox>
              <InputBox
                id="userPosition"
                name="userPosition"
                autoFocus="false"
                required
                placeholder="ex. 대리"
                value={inputField.userPosition}
                onChange={event => handleChangeInput(inputField.id, event)}
              />
              <StyledLabel for="userPosition">직급</StyledLabel>
            </StyledBox>
            <StyledBox>
              <InputBox
                id="careerLocation"
                name="careerLocation"
                autoFocus="false"
                required
                placeholder="ex. 서울특별시 강남구"
                value={inputField.careerLocation}
                onChange={event => handleChangeInput(inputField.id, event)}
              />
              <StyledLabel for="careerLocation">위치</StyledLabel>
            </StyledBox>
            <StyledBox>
              <TextAreaBox
                id="careerDetail"
                name="careerDetail"
                autoFocus="false"
                required
                placeholder="관련정보를 입력해주세요."
                value={inputField.careerDetail}
                onChange={event => handleChangeInput(inputField.id, event)}
              />
              <StyledLabel for="careerDetail">세부내용</StyledLabel>
            </StyledBox>
            <div>
              <StyledBox>
                <NormalLabel htmlFor="user-career-period">기간</NormalLabel>
              </StyledBox>
              <span className="user-career-period-select">
                <SelectBox>
                  <StyledSelect
                    id="user-career-period"
                    name="userCareerPeriodStartYear"
                    autoFocus="false"
                    onChange={event => handleChangeInput(inputField.id, event)}
                    value={inputField.userCareerPeriodStartYear}
                  >
                    {years()}
                  </StyledSelect>
                </SelectBox>
                <SelectBox>
                  <StyledSelect
                    id="user-career-period"
                    name="userCareerPeriodStartMonth"
                    autoFocus="false"
                    onChange={event => handleChangeInput(inputField.id, event)}
                    value={inputField.userCareerPeriodStartMonth}
                  >
                    {months()}
                  </StyledSelect>
                </SelectBox>
                <span> &nbsp;~ &nbsp;</span>
                {!inputFields.isWorking && (
                  <>
                    <SelectBox>
                      <StyledSelect
                        id="user-career-period"
                        name="userCareerPeriodEndYear"
                        autoFocus="false"
                        onChange={event =>
                          handleChangeInput(inputField.id, event)
                        }
                        value={inputField.userCareerPeriodEndYear}
                      >
                        {years()}
                      </StyledSelect>
                    </SelectBox>
                    <SelectBox>
                      <StyledSelect
                        id="user-career-period"
                        name="userCareerPeriodEndMonth"
                        autoFocus="false"
                        onChange={event =>
                          handleChangeInput(inputField.id, event)
                        }
                        value={inputField.userCareerPeriodEndMonth}
                      >
                        {months()}
                      </StyledSelect>
                    </SelectBox>
                  </>
                )}
              </span>

              <CheckboxGroup>
                <Checkbox
                  defaultChecked="true" /* 체크박스 초기값 */
                  // checked={isWorking}
                  id="isWorking"
                  name="isWorking"
                  value="isWorking"
                  autoFocus="false"
                  onChange={(inputField.id, onToggleWorking)}
                />
                <label htmlFor="isWorking"> &nbsp;현재 재직중</label>
              </CheckboxGroup>
            </div>
            <StyledButton
              type="submit"
              id="careerRemoveOn"
              autoFocus="false"
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              <MinusCircleOutlined />
            </StyledButton>
            <SpanLabel for="careerRemoveOn">경력삭제</SpanLabel>
            <br />
            <StyledButton
              id="careerAddOn"
              type="submit"
              onClick={handleAddFields}
            >
              <PlusCircleOutlined />
            </StyledButton>
            <SpanLabel for="careerAddOn">경력추가</SpanLabel>
            <ContentCurve />
          </FormBox>
        ))}
        <div>
          <CheckboxGroup>
            <Checkbox
              defaultChecked="false"
              id="noWorking"
              name="noWorking"
              value="noWorking"
              onChange={onToggleNoWorking}
            // checked={value}
            />
            <label htmlFor="noWorking"> &nbsp;경력없음</label>
          </CheckboxGroup>
          <ButtonWrapper>
            <RegisterButton
              type="primary"
              htmlType="submit"
              loading={signUpLoading}
            >
              다음
            </RegisterButton>
          </ButtonWrapper>
        </div>
        <LineDiv />
      </StyledForm>
    </>
  );
};

index.propTypes = {
  navigation: PropTypes.object.isRequired,
  options: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};
export default index;
