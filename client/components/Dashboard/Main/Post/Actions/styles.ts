import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const Container = styled.div`
	border-top: 1px solid rgba(0, 0, 0, 0.15);
	height: 72px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Items = styled.div`
	width: 100%;
	display: flex;

	button:first-child {
		text-align: center;
		width: 100%;
		justify-content: flex-start;

		&:hover {
			background: #ffffff;
			background-color: #f3f6f8;

			svg {
				color: #0084bf;
			}

			span {
				color: #0084bf;
				text-decoration: underline solid #0084bf;
			}
		}
	}
`;

export const NewPost = styled.div`
	display: flex;
	align-items: center;
`;

export const Text = styled.span`
	display: flex;
	margin: 2px 0 0 8px;
	font-size: 1.42rem;
	line-height: 1.5;
	font-weight: 600;
`;

// modal style
export const StyledPostModal = Modal.styled`
  width: 552px;
  padding-top: 12px;
  background: white;
  position: relative;
  // top: 200px;
  // right: 340px;

  border-radius: 2px;
  border: none;
  box-shadow: 0 0 0 1px rgba(0,0,0,.02), 0 3px 9px rgba(0,0,0,.2);
`;

// modal 생성시 배경화면
export const ModalBackground = styled(BaseModalBackground)`
	opacity: 1;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 30;
`;
