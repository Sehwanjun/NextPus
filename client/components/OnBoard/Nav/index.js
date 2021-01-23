import React from 'react';
import { Container, Wrapper, LogoDiv, H1 } from './styles';
import LogoImage from "public/img/nexpus_logo_600x400_row.svg";

const index = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <LogoDiv>
            <LogoImage alt="logoimage" />
          </LogoDiv>
        </Wrapper>
      </Container>
      {/* <H1>
        추가정보 입력은 적극적인 활동을 지원합니다.
      </H1> */}
    </>
  );
};

export default index;