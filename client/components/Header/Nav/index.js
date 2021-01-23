import React, { useState, MouseEvent } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { FaHome } from 'react-icons/fa'; // 홈 아이콘
import { RiUserSearchFill } from 'react-icons/ri'; // 직업탐색 아이콘
import { FaUniversity } from 'react-icons/fa'; //  학습 아이콘
import { BsFillBriefcaseFill } from 'react-icons/bs'; // 채용 아이콘
import { FaComments } from 'react-icons/fa'; // 메시지 아이콘
import { FaUserFriends } from 'react-icons/fa'; // 친구탐색 아이콘
import { FaBell } from 'react-icons/fa'; // 알림 아이콘
import { ModalProvider } from 'styled-react-modal';

import User from 'components/Modals/User';
import Item from './Item';
import { Container, NavMain, ModalUser, ModalBackground } from './styles';

import StarUrl from 'public/img/nexpus_logo_ver2.0_blue.svg';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	// styling을 위한 state
	const [notification, setNotification] = useState([]);
	const [active, setActive] = useState(1);

	function toggleModal(event) {
		event.preventDefault();
		setIsOpen(!isOpen);
	}

	return (
		<Container>
			<ModalProvider backgroundComponent={ModalBackground}>
				<NavMain active={active} notification={notification}>
					<Item
						path="/dashboard"
						icon={<FaHome />}
						text="홈"
						onClick={() => setActive(1)}
					/>
					<Item
						path="/careerpath"
						icon={<RiUserSearchFill />}
						text="직업탐색"
						onClick={() => setActive(2)}
					/>
					<Item
						path="/learning"
						icon={<FaUniversity />}
						text="학습"
						onClick={() => setActive(3)}
					/>
					<Item
						path="/jobs"
						icon={<BsFillBriefcaseFill />}
						text="채용"
						onClick={() => setActive(4)}
					/>
					<Item
						notification
						path="/network"
						icon={<FaUserFriends />}
						text="동료"
						onClick={() => {
							setActive(5);
							setNotification([...notification, 5]);
						}}
					/>
					<Item
						path="/messages"
						icon={<FaComments />}
						text="메시지"
						onClick={() => setActive(6)}
					/>
					<Item
						notification
						path="/notifications"
						icon={<FaBell />}
						text="알림"
						onClick={() => {
							setActive(7);
							setNotification([...notification, 7]);
						}}
					/>
					<Item
						icon={<img src="/img/nexpus_logo_ver2.0_blue.png" alt="" />}
						text="내 정보"
						drop
						onClick={toggleModal}
					/>
				</NavMain>
				<ModalUser isOpen={isOpen} onBackgroundClick={toggleModal}>
					<User />
				</ModalUser>
			</ModalProvider>
		</Container>
	);
};

Nav.propTypes = {
	notification: PropTypes.arrayOf(PropTypes.any),
	active: PropTypes.number,
}

export default Nav;
