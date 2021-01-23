import React from 'react';
import Link from 'next/link';
import { Container, BoxName, Name, BoxJob, Job } from './styles';

const Info: React.FC = () => (
  <Container>
    <Link href="/profile">
      <a>
        <BoxName>
          <Name>user.name</Name>
        </BoxName>
      </a>
    </Link>
    <BoxJob>
      <Job>Intern Developer | React | TypeScript | Redux</Job>
    </BoxJob>
  </Container>
);

export default Info;
