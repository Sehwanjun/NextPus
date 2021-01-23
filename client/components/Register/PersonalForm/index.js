import React, { useCallback, useState } from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { ConfigProvider, Form, Select, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import moment from "moment";
import "moment/locale/ko";
// import locale from "antd/es/date-picker/locale/ko_KR";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../../../reducers/user";
import useInput from "../../../hooks/useinput";
import {
  ErrorMessage,
  StyledForm,
  FormBox,
  InputBox,
  ButtonWrapper,
  RegisterButton,
  StyledSelect,
  LineDiv,
  RadioGroup,
  RadioButton,
  StyledDatePicker,
} from "./styles";

const PersonalForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const { signUpLoading } = useSelector(state => state.user);

  // 오류검증(값 미입력)
  const [birthdayError, setBirthdayError] = useState(false);
  const [statusError, setStatusError] = useState(false);
  const [educationError, setEducationError] = useState(false);
  const [schoolError, setSchoolError] = useState(false);

  // @ 성별입력
  const [gender, setGender] = useState("");
  const onChangeGender = useCallback(
    e => {
      setGender(e.target.value);
      console.log(e.target.value);
    },
    [gender]
  );

  // @ 생년월일 폼
  const [birthday, setBirthday] = useState("");
  const onChangeDate = useCallback(
    dateString => {
      setBirthday(dateString);
      console.log(dateString);
      setBirthdayError(dateString === "");
    },
    [birthday]
  );

  // @ 상태값 폼
  const { Option } = Select;
  const [status, setStatus] = useState("");
  const onChangeStatus = useCallback(
    value => {
      setStatus(value);
      console.log(`selected ${value}, ${status.value}`);
      setStatusError(value === "");
    },
    [status]
  );

  // @ 학력 폼
  // @ education: 학력상태, school: 학교명, Major: 전공명
  const [education, setEducation] = useState("");
  const onChangeEducation = useCallback(
    value => {
      setEducation(value);
      console.log(`selected ${value}, ${setEducation}`);
      setEducationError(value === "");
    },
    [education]
  );
  const [school, setSchool] = useState("");
  const onChangeSchool = useCallback(
    e => {
      setSchool(e.target.value);
      console.log(e.target.value);
      setSchoolError(e.target.value.length === 0);
    },
    [school]
  );
  const [major, onChangeMajor] = useInput("");

  // @ 승인 및 데이터처리
  const onSubmit = useCallback(() => {
    // 에러검증
    if (birthday === "") {
      return setBirthdayError(true);
    }
    console.log(birthday);
    if (status === "") {
      return setStatusError(true);
    }
    console.log(status);
    if (education === "") {
      return setEducationError(true);
    }
    console.log(education);
    if (school === "") {
      return setSchoolError(true);
    }
    console.log(school);
    // redux
    return (
      dispatch({
        type: SIGN_UP_REQUEST,
        data: { gender, birthday, status, education, school },
      }),
      navigation.next()
    );
  }, [gender, birthday, status, education, school]);

  return (
    <>
      <Head>
        <title>정보입력 | NextPus</title>
      </Head>
      <StyledForm>
        <h1>기본정보 작성하기</h1>
        <LineDiv />
        <FormBox>
          <Form onFinish={onSubmit}>
            <div>
              <Form.Item name="gender-group" label="성별">
                <RadioGroup
                  defaultValue="male"
                  name="gender"
                  value={gender}
                  buttonStyle="solid"
                  onChange={onChangeGender}
                >
                  <RadioButton value="male" checked={false}>
                    남성
                  </RadioButton>
                  <RadioButton value="female" checked={false}>
                    여성
                  </RadioButton>
                  <RadioButton value="other" checked={false}>
                    기타
                  </RadioButton>
                  <RadioButton value="secret" checked={false}>
                    비공개
                  </RadioButton>
                </RadioGroup>
              </Form.Item>
            </div>
            {/* For date picker(생년월일) */}
            <Form.Item label="생년월일">
              <Tooltip title="회원님의 연령대에 맞는 NextPus 환경을 이용할 수 있습니다. 프로필의 정보 섹션에서 이 정보의 공개 범위를 변경할 수 있습니다.">
                <InfoCircleOutlined />
              </Tooltip>
              <ConfigProvider>
                <StyledDatePicker
                  selected={moment()}
                  onChange={onChangeDate}
                  value={birthday}
                  defaultValue={moment("2001-01-01")}
                  required
                />
              </ConfigProvider>

              {/* @Validation */}
              {birthdayError && (
                <ErrorMessage>생년월일을 선택해주세요.</ErrorMessage>
              )}
            </Form.Item>
            <Form.Item name="user-status" label="상태">
              <Select
                defaultValue="선택해주세요."
                style={{ width: 190 }}
                onChange={onChangeStatus}
                required
              >
                <Option value="worker">직장인</Option>
                <Option value="student">학생</Option>
                <Option value="business">자영업/개인사업</Option>
                <Option value="contract">계약직</Option>
                <Option value="intern">인턴</Option>
                <Option value="apprentice">수습생</Option>
                <Option value="parttime">아르바이트</Option>
                <Option value="freelancer">프리랜서</Option>
                <Option value="house">주부</Option>
                <Option value="inoccupation">무직</Option>
                <Option value="retire">은퇴</Option>
                <Option value="none">해당없음</Option>
              </Select>
            </Form.Item>
            {/* @Validation */}
            {statusError && (
              <ErrorMessage>상태값을 선택해주시기 바랍니다.</ErrorMessage>
            )}

            <Form.Item name="user-education" label="학력">
              <StyledSelect
                defaultValue="학력선택"
                style={{ width: 190 }}
                onChange={onChangeEducation}
                required
              >
                <Option value="bachelor">학사</Option>
                <Option value="master">석사</Option>
                <Option value="doctor">박사</Option>
                <Option value="highschool">고등학교졸업</Option>
                <Option value="middleschool">중학교졸업 이하</Option>
                <Option value="professional">전문학교</Option>
                <Option value="other">기타</Option>
              </StyledSelect>
              <InputBox
                placeholder="학교명(Ex: 한국대학교)"
                name="user-school"
                value={school}
                onChange={onChangeSchool}
              />
              <InputBox
                placeholder="전공(Ex: 경영학과)"
                name="user-major"
                value={major}
                onChange={onChangeMajor}
              />
            </Form.Item>
            {/* @Validation - 학력선택 */}
            {educationError && (
              <ErrorMessage>학력을 선택해주세요.</ErrorMessage>
            )}
            {/* @Validation - 학교명 입력 */}
            {schoolError && <ErrorMessage>학교명을 입력해주세요.</ErrorMessage>}
            <div>
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
          </Form>
        </FormBox>
      </StyledForm>
    </>
  );
};

PersonalForm.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default PersonalForm;
