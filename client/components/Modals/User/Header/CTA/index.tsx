import React from 'react';
import Link from 'next/link';
import Content from './styles';

const CTA: React.FC = () => (
  <Link href="/profile">
    <Content>
      <a>프로필 보기</a>
    </Content>
  </Link>
);

export default CTA;
