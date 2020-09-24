import React, { useEffect } from "react";
import Head from "next/head";
import { useSelector } from "react-redux";
import Router from "next/router";
import MainLayout from "../components/MainLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const profile = () => {
  const { me } = useSelector(state => state.user);

  // 만약 로그아웃시 메인화면으로 이동
  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }
  return (
    <>
      <Head>
        <title>내 프로필 | NextPus</title>
      </Head>
      <MainLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉" data={me.Followings} />
        <FollowList header="팔로워" data={me.Followers} />
      </MainLayout>
      ;
    </>
  );
};

export default profile;
