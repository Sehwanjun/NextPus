import React from 'react';
import Link from 'next/link';
import NextpusLogo from 'public/main/logo/nexpus_logo_600x400_full_row_inverse.svg';
import Container from './styles';

const Logo: React.FC = () => (
  <Container>
    <Link href="/dashboard">
      <a>
        <NextpusLogo />
      </a>
    </Link>
  </Container>
);

export default Logo;
