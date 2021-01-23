import React from 'react';

import Logo from 'components/Logo';
import SearchInput from 'components/Input';
import Container from './styles';

const Search: React.FC = () => (
  <Container>
    <Logo />
    <SearchInput />
  </Container>
);

export default Search;
