import React from 'react';
import Profile from './Profile';
import Interest from './Interest';

import Container from './styles';

const Left: React.FC = () => (
  <Container>
    <Profile />
    <Interest />
  </Container>
);

export default Left;
