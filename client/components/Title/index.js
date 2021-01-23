import React, { useState } from 'react';
import { Container, Text, Icon } from './styles';
import PropTypes from 'prop-types';

const Title = ({ title, icon, small, gray }) => {
  const [show, setShow] = useState(false);
  return (
    <Container onClick={() => setShow(!show)} >
      <Text small={small} gray={gray} >
        {title}
      </Text>
      <Icon roll={show}>{icon}</Icon>
    </Container>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  small: PropTypes.bool,
  gray: PropTypes.bool,
};
export default Title;
