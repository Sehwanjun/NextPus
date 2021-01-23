import styled from 'styled-components';

export const Container = styled.button`
	background: #ffffff;
	color: rgba(0, 0, 0, 0.6);
	padding: 24px;
	height: 64px;
	/* width: 73px; */
	border: none;
	/* border-right: 1px solid rgba(0, 0, 0, 0.15); */
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background: #f3f6f8;
		svg {
			color: rgba(0, 0, 0, 0.9);
		}
	}
`;

export const Icon = styled.div`
	svg {
		width: 24px;
		height: 24px;
		color: rgba(0, 0, 0, 0.6);
	}
`;
