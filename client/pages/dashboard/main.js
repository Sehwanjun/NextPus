import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Router from "next/router";

import MainLayout from "../../components/MainLayout";
import PostForm from "../../components/PostForm";
import PostCard from "../../components/PostCard";
import { LOAD_POSTS_REQUEST } from "../../reducers/post";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";

const main = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } = useSelector(
    state => state.post
  );

  // 리트윗할경우 에러체크(postcard에 넣지 않은 이유: 게시글(postcard) 한개씩 불러올때마다 에러창 1개씩 불러오기에)
  useEffect(() => {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError])

  // 내 정보 불러오기 --> Follower/Following 수 등 표기를 위함 
  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    })

    // dispatch시 불러왔던 게시글 갯수 등 정보 보내야 함
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);
  useEffect(() => window.scrollTo(0, 0));
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
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
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
