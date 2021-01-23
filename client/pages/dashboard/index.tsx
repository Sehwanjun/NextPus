import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import Header from 'components/Header';
import { WrapperAd, Container, Aside, Core, AsideRight } from './styles';
import Ad from 'components/Dashboard/Ad';
import Left from 'components/Dashboard/Left';
import Right from 'components/Dashboard/Right';
import Main from 'components/Dashboard/Main';
import { Col, Input, Menu, Row } from 'antd';

const Dashboard = () => {
	// useEffect(() => window.scrollTo(0, 0));
	const { me } = useSelector((state: { user: any }) => state.user);

	// 만약 로그아웃시 메인화면으로 이동
	// useEffect(() => {
	// 	if (!(me && me.id)) {
	// 		Router.push('/');
	// 	}
	// }, [me && me.id]);
	// if (!me) {
	// 	return null;
	// }

	return (
		<>
			<Header />
			<Row gutter={0}>
				<WrapperAd>
					<Ad />
					<Container>
						<Col xs={24} md={5}>
							<Aside>
								<Left />
							</Aside>
						</Col>

						<Col xs={24} md={13}>
							<Core>
								<Main />
							</Core>
						</Col>

						<Col xs={24} md={6}>
							<AsideRight>
								<Right />
							</AsideRight>
						</Col>
					</Container>
				</WrapperAd>
			</Row>
		</>
	);
};

export default Dashboard;
