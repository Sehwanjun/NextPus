import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	cursor: pointer;
`;

export const Cover = styled.div`
	background-color: black;
	width: 100%;
	height: 54px;
	background-size: 100%;
`;

export const User = styled.div`
	height: 65px;
	width: 65px;
	border-radius: 50%;
	border: 2px solid #fff;
	/* box-shadow: inset 0 1.5px 3px 0 rgba(0,0,0,.15), 0 1.5px 3px 0 rgba(0,0,0,.15); */
	background-color: #fff;
	overflow: hidden;

	position: absolute;
	bottom: -30px;
	left: 50%;
	transform: translateX(-50%);

	img {
		width: 68px;
	}
`;
