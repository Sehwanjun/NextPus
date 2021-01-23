import React from 'react';
import { Container, Wrapper, Box, Header, Section, ContentDiv, H1, H2 } from './styles';
import { useSelector } from "react-redux";
import InputForm from "./InputForm";

const index = () => {
  const { me } = useSelector(state => state.user);

  return (
    <Container>
      <Wrapper>
        <Box>
          <Header>
            <H1>
              {me.nickname}님 가입을 환영합니다.
            </H1>
            <H2>
              추가정보 입력은 적극적인 활동을 지원합니다.
          </H2>
          </Header>
          <Section>
            <ContentDiv>
              {/* 입력폼 */}
              <InputForm />
            </ContentDiv>
          </Section>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default index;