import React, { useEffect } from 'react';
import Nav from './Nav';
import Body from './Body';
import { GlobalContainer, SecondContainer, Container, Wrapper } from './styles'
import { useSelector } from "react-redux";
import Router from "next/router";


const index = () => {
  // const { me } = useSelector(state => state.user);

  // useEffect(() => {
  //   if (!(me && me.id)) {
  //     Router.push("/");
  //   }
  // }, [me && me.id]);
  // if (!me) {
  //   return null;
  // }
  return (
    <GlobalContainer>
      <SecondContainer>
        <Container>
          {/* <Wrapper> */}
            <Nav />
            <Body />
          {/* </Wrapper> */}
        </Container>
      </SecondContainer>
    </GlobalContainer>
  );
};

export default index;