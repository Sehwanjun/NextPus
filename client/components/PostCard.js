import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import { Card, Popover, Button, Avatar, List, Comment } from "antd";
import CommentForm from "./Dashboard/Main/Feed/CommentForm";
import PostImages from "./Dashboard/Main/Feed/PostImages";
import PostCardContent from "./Dashboard/Main/Feed/PostCardContent";
import FollowButton from "./Dashboard/Main/Feed/FollowButton";
import { REMOVE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST, RETWEET_REQUEST } from "../reducers/post";

// post를 부모로부터 받아옴(main.js)
const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector(state => state.post);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  // 존재여부 확인: 옵셔널 체이닝 연산자 - me가 있으면 user.me.id로 바꿔주고 아니면 undefined
  // obj.first의 값은 obj.first.second의 값에 접근하기 전에 null (그리고 undefined)가 아니라는 점을 검증한다. 이는 만약에 obj.first를 테스트 없이 obj.first.second 에 직접 접근할 때 일어날 수 있는 에러를 방지한다.
  const id = useSelector(state => state.user.me && state.user.me.id);

  // 좋아요버튼 on/off 기능관련
  const onLike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.')
    }
    dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id, // 사용자 id는 필요없음
    });
  }, [id]);
  const onUnlike = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.')
    }
    dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);
  // 댓글 보이기 on/off 기능관련
  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.')
    }
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onRetweet = useCallback(() => {
    if (!id) {
      return alert('로그인이 필요합니다.')
    }
    return dispatch({
      type: RETWEET_REQUEST,
      data: post.id,
    })
  }, [id]);

  const liked = post.Likers.find((v) => v.id === id); // 게시글 좋아요 누른 사람들중에 내가 있는지

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" onClick={onRetweet} />,
          liked ? (
            <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnlike} />
          ) : (
              <HeartOutlined key="heart" onClick={onLike} />
            ),
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {/* 내가쓴글권한: 수정/삭제 / 남이쓴 글권한: 신고 */}
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    {/* danger: 붉은색, primary: 파란색 */}
                    <Button
                      type="danger"
                      loading={removePostLoading}
                      onClick={onRemovePost}
                    >
                      삭제
                    </Button>
                  </>
                ) : (
                    <Button>신고</Button>
                  )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        // retweet 게시글일 경우 추가문구
        title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null}
        // extra: 우측 상단에 공간을 준다.
        extra={id && <FollowButton post={post} />}
      >
        {/* retweet 게시글일 경우 front 구현 */}
        {post.RetweetId && post.Retweet
          ? (<Card cover={post.retweet.Images[0] && <PostImages images={post.Retweet.Images} />}>
            <Card.Meta
              avatar={<Avatar>{post.Retweet.User.nickname[0]}</Avatar>}
              title={post.Retweet.User.nickname}
              // 해쉬태그 링크걸어서 클릭시 관련글들만 보이게 하기 위해서
              // 중요기능을 추가해야할 시 <Post~~> 컴포넌트로 바꿔준다 먼저
              description={<PostCardContent postData={post.Retweet.content} />}
            />
          </Card>
          )
          : (
            <Card.Meta
              avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
              title={post.User.nickname}
              // 해쉬태그 링크걸어서 클릭시 관련글들만 보이게 하기 위해서
              // 중요기능을 추가해야할 시 <Post~~> 컴포넌트로 바꿔준다 먼저
              description={<PostCardContent postData={post.content} />}
            />
          )}
      </Card>
      {/* 댓글 */}
      {commentFormOpened && (
        <div>
          {/* 댓글은 게시글에 종속되어있기 때문에 어떤 게시글인지 정보를 받아야 함 따라서 post={post} */}
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            // post.comments가 item으로 들어감
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />{" "}
        </div>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
    RetweetId: PropTypes.number,
    Retweet: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

export default PostCard;
