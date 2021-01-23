import styled from 'styled-components';

export const Container = styled.button`
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 167ms;
	border: none;
	border-radius: 2px;
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 600;
	color: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;

	margin: 10px 0;
	margin-left: 4px;
	background: none;
	height: 25px;
	width: 250px;

	span:first-child {
		margin-right: 5px;
	}

	&:hover {
		background-color: hsla(0, 0%, 81.2%, 0.25);
		color: rgba(0, 0, 0, 0.75);
	}

	&:focus {
		border: none;
		outline: none;
	}
`;

export const Text = styled.span``;

export const Icon = styled.span`
	svg {
		transform: ${({roll}) => (roll ? 'rotate(180deg)' : undefined)};
		transition: all 0.4s ease;
	}
`;
