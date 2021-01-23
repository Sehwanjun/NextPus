import React from 'react';
import Record from './Record';

import Container from './styles';

const Records: React.FC = () => (
  <Container>
    <Record text="진행중인 코스" number={2.749} />
    <Record text="진행중인 학습" number={3.729} />
    <Record text="작성글" number={3.729} />
  </Container>
);

export default Records;
