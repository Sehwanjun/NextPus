import React from 'react';

import Container from './styles';
import Records from './Records';
import Skills from './Skills';

const Main: React.FC = () => (
  <Container>
    <Records />
    <Skills />
  </Container>
);

export default Main;
