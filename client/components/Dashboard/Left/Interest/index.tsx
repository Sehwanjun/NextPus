import React from 'react';
import Sticky from 'react-stickynode';
import Wrapper from 'components/Wrapper';
import Category from './Category';
import { Container, Footer } from './styles';
import Item from './Item';

const Interest: React.FC = () => (
	<Sticky top={60}>
		<Container>
			<Wrapper>
				<Category title="관심있는 태그">
					<Item text="JavaScript" />
					<Item text="Front End Developer Group" />
					<Item hashtag text="softwaredeveloper" />
					<Item hashtag text="github" />
					<Item hashtag text="androidevelopment" />
				</Category>
				<Category title="관심있는 기업">
					<Item text="JavaScript" />
					<Item text="Front End Developer Group" />
					<Item text="HTML5 / CSS3 / JavaScript" />
				</Category>
				{/* <Footer>하단 contents</Footer> */}
			</Wrapper>
		</Container>
	</Sticky>
);

export default Interest;
