import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";
import MainLayout from "../components/MainLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { LOAD_POSTS_REQUEST } from "../reducers/post";

const main = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector(
    state => state.post
  );
  // 일단 처음 10개 보내기
  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);
  // 스크롤 맨 아래로 내리면 post 10개씩 더 불러오기
  // (1) window.scrollY: 현재 처음부터 맨아래까지의 길이(스크롤안내릴때: 0)
  // (2) clientHeight: 화면에 보이는 창 높이(고정)
  // (3) scrollHeight: 제일 위부터 아래까지 고정된 총길이(스크롤까지)
  // (1) + (2) = (3)
  // 차후, 무한스크롤링 방지를 위해 (메모리 초과) react-virtualized 활용필요
  // 즉, 화면에는 3개정도 글만 보여주고 나머지는 메모리에?
  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: LOAD_POSTS_REQUEST,
            data: mainPosts[mainPosts.length - 1].id,
          });
        }
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostsLoading]);

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
    <MainLayout>
      {/* 조건부 화면 보여주기 */}
      {/* anti pattern: key에 index로 부여하지 말기! */}
      {/* 게시글이 지워질 가능성이 있는 경우, 순서바뀌거나 등 절대 index 부여 X */}
      {me && <PostForm />}
      {mainPosts.map(c => (
        <PostCard key={c.id} post={c} />
      ))}
    </MainLayout>
  );
};

export default main;
