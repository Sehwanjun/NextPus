import React from 'react';

import Wrapper from 'components/Wrapper';
// import { FaTags } from 'react-icons/fa';
import { Container } from './styles';
import Header from './Header';
import Main from './Main';

const Profile: React.FC = () => (
  <Container>
    <Wrapper>
      <Header />
      <Main />
      {/* <Footer>
        <FaTags />
        <span>관심분야 태그</span>
      </Footer> */}
    </Wrapper>
  </Container>
);

export default Profile;
