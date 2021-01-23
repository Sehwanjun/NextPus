import React from 'react';
import Link from 'next/link';
import More from 'public/right/more.svg';
import { Container, Items, Item } from './styles';

const List: React.FC = () => (
  <Container>
    <Items>
      <Item>
        <Link href="/">
          <a>Sobre</a>
        </Link>
      </Item>
      <Item>
        <Link href="/">
          <a>Acessibilidade</a>
        </Link>
      </Item>
      <Item>
        <Link href="/">
          <a>Central de ajuda</a>
        </Link>
      </Item>
      <Item>
        <Link href="/">
          <a>
            Termos e Privacidade
            <span>
              <More />
            </span>
          </a>
        </Link>
      </Item>
      <Item>
        <Link href="/">
          <a>Preferências de anúncios</a>
        </Link>
      </Item>
      <Item>
        <Link href="/">
          <a>Publicidade</a>
        </Link>
      </Item>
      <Item>
        <Link href="/">
          <a>
            Serviços empresariais
            <span>
              <More />
            </span>
          </a>
        </Link>
      </Item>
      <Item>
        <Link href="/">
          <a>Baixe o aplicativo do LinkedIn</a>
        </Link>
      </Item>
      <Item>
        <Link href="/">
          <a>Mais</a>
        </Link>
      </Item>
    </Items>
  </Container>
);

export default List;
