import React from 'react';
import Link from 'next/link';
import { Container, User, CTAContainer } from './styles';
import UserPhoto from './Photo';
import UserInfo from './Info';
import CTA from './CTA';

const Header: React.FC = () => (
  <Container>
    <Link href="/profile">
      <a>
        <User>
          <UserPhoto />
          <UserInfo />
        </User>
        <CTAContainer>
          <CTA />
        </CTAContainer>
      </a>
    </Link>
  </Container>
);

export default Header;
