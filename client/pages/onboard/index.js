import React from 'react';
import Head from 'next/head';
import OnBoard from 'components/OnBoard'
import { Container } from './styles'

const index = () => {
  return (
    <Container>
      <Head>
        <title>Starting NextPus</title>
      </Head>
      <OnBoard />
    </Container>
  );
};

export default index;