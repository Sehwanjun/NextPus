import React, { useState, MouseEvent } from 'react';
import Post from 'public/main/post.svg';
import {
	Container,
	Items,
	NewPost,
	Text,
	StyledPostModal,
	ModalBackground,
} from './styles';
import ActionButton from './ActionButton';
import PostButtonModal from 'components/Modals/PostFormModal';
import { ModalProvider } from 'styled-react-modal';

const Actions: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	function toggleModal(event: MouseEvent) {
		event.preventDefault();
		setIsOpen(!isOpen);
	}
	return (
		<Container>
			<ModalProvider backgroundComponent={ModalBackground}>
				<Items onClick={toggleModal}>
					<ActionButton>
						<NewPost>
							<Post />
							<Text>클릭하여 포스팅하세요.</Text>
						</NewPost>
					</ActionButton>
				</Items>
				
				{/* 모달창 관련 */}
				<StyledPostModal isOpen={isOpen} onBackgroundClick={toggleModal}>
					<PostButtonModal />
				</StyledPostModal>
			</ModalProvider>
		</Container>
	);
};

export default Actions;
