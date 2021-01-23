import React, { useState } from 'react';
import More from 'public/right/more.svg';
import { Container, Text, Icon } from './styles';

const Button = () => {
	const [show, setShow] = useState(false);
	return (
		<Container onClick={() => setShow(!show)}>
			<Text>{show ? '간단하게 보기' : '더보기'}</Text>
			<Icon roll={show}>
				<More />
			</Icon>
		</Container>
	);
};

export default Button;
