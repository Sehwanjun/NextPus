import React from 'react';

import CarretDown from 'public/main/carretDown.svg';
import { Container, Divider, Text } from './styles';

const Category: React.FC = () => (
	<Container>
		<Divider />
		<Text>
			<span>새로운 포스팅을 확인하세요.</span>
			<CarretDown />
		</Text>
	</Container>
);

export default Category;
