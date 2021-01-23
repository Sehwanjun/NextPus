import React from 'react';

import { FiMoreHorizontal } from 'react-icons/fi';
import { Container, Content, Text, Label } from './styles';

const Ad: React.FC = () => (
	<Container>
		<Content>
			<Text>
				<strong>Good to you </strong>
			</Text>
			<Label>
				<span>NextPus</span>
				<FiMoreHorizontal size={16} />
			</Label>
		</Content>
	</Container>
);

export default Ad;
