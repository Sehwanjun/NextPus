import React from 'react';
import Link from 'next/link';

import { Container, List, Item } from './styles';

const Terms: React.FC = () => (
  <Container>
    <List>
      <Item>
        <Link href="/">Política de Privacidade</Link>
      </Item>
      <Item>
        <Link href="/">Contrato do Usuário</Link>
      </Item>
      <Item>
        <Link href="/">Política de Cookies</Link>
      </Item>
      <Item>
        <Link href="/">Política de Direitos Autorais</Link>
      </Item>
    </List>
  </Container>
);

export default Terms;
