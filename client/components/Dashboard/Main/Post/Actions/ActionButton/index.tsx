import React from 'react';

import { Container, Icon } from './styles';

const ActionButton: React.FC = ({ children }) => {
  return (
    <Container>
      <Icon>{children}</Icon>
    </Container>
  );
};

export default ActionButton;
