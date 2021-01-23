import React from 'react';

import Group from 'public/left/group.svg';
import Hashtag from 'public/left/hashtag.svg';

import Container from './styles';

interface Props {
  hashtag?: boolean;
  text: string;
}

const Item: React.FC<Props> = ({ hashtag, text }) => (
  <Container>
    {hashtag ? <Hashtag /> : <Group />}
    <span>{text}</span>
  </Container>
);

export default Item;
