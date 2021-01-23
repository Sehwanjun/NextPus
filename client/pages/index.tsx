import React, { useEffect } from 'react';
import Landing from 'components/Landing';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

const Home = () => {
	const dispatch = useDispatch();
	const { logInLoading, logInDone, logInError, me } = useSelector(
		(state) => state.user,
	);

	useEffect(() => {
		if (me && me.id) {
			Router.replace('/dashboard'); // push: 뒤로가기시 이전페이지로, replace: 기록에서 사라져버림
		}
	}, [me && me.id]);

	// login 성공시 me가 생성되기때문에 해당코드 부여(회원가입후 곧바로 메인화면으로)
	useEffect(() => {
		if (logInDone) {
			Router.replace('/dashboard');
		}
	}, [logInDone]);

	return <Landing />;
};

export default Home;
