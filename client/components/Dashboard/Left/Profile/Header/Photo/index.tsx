import React from 'react';
import Link from 'next/link';
import { Container, Cover, User } from './styles';

const Photo: React.FC = () => (
	<Link href="/profile">
		<a>
			<Container>
				<Cover />
				<User>
					<img src="/img/nexpus_logo.svg"></img>
				</User>
			</Container>
		</a>
	</Link>
);

export default Photo;
