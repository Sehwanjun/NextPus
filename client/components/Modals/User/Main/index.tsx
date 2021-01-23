import React, { useCallback } from 'react';
import Link from 'next/link';
import { Container, Exit, Button } from './styles';
import List from './List';
import { useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from 'reducers/user';
import Router from 'next/router';

const Main = () => {
	const dispatch = useDispatch();
	const onLogOut = useCallback(() => {
		dispatch({ type: LOG_OUT_REQUEST });
	}, []);

	return (
		<Container>
			<List title="관리">
				<Link href="/setting">
					<a>
						<li>계정관리</li>
					</a>
				</Link>
				<Link href="/profile">
					<a>
						<li>정보입력</li>
					</a>
				</Link>
				<Button onClick={onLogOut}>
					<Exit>로그아웃</Exit>
				</Button>
			</List>
		</Container>
	);
};

export default Main;
