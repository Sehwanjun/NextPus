import React from 'react';

import { Container, Wrapper, Content } from './styles';
import Search from './Search';
import Nav from './Nav';

const Header: React.FC = () => (
  <Container>
    <Wrapper>
      <Content>
        <Search />
        <Nav />
      </Content>
    </Wrapper>
  </Container>
);

export default Header;
