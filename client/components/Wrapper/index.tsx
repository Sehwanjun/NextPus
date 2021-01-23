import React from 'react';

import Container from './styles';

interface Props {
  margin?: boolean;
  top?: boolean;
  pannel?: boolean;
  shadow?: boolean;
}

const Wrapper: React.FC<Props> = ({
  children,
  margin = false,
  top = false,
  pannel = false,
  shadow = false,
}) => (
  <Container margin={margin} top={top} pannel={pannel} shadow={shadow}>
    {children}
  </Container>
);

export default Wrapper;
