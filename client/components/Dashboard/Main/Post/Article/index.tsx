import React from 'react';
import Link from 'next/link';

import { Container, Text } from './styles';

const Article: React.FC = () => (
  <Container>
    <Text>
      <p>라이프스타일 포스팅하기</p>
      관심분야와 문화활동, 직업 또는 업무관련 정보 등 일상 스타일을
      공유해주세요.
    </Text>
  </Container>
);

export default Article;
