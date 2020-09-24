import React, { useState, useCallback } from "react";
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
import CommentForm from "./CommentForm";
import PostImages from "./PostImages";
import PostCardContent from "./PostCardContent";
import FollowButton from "./FollowButton";
import { REMOVE_POST_REQUEST } from "../reducers/post";

// post를 부모로부터 받아옴(main.js)
const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector(state => state.post);
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);

  // 좋아요버튼 on/off 기능관련
  const onToggleLike = useCallback(() => {
    setLiked(prev => !prev);
  }, []);
  // 댓글 보이기 on/off 기능관련
  const onToggleComment = useCallback(() => {
    setCommentFormOpened(prev => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  });

  // 존재여부 확인: 옵셔널 체이닝 연산자 - me.id가 있으면 id로 바꿔주고 아니면 undefined
  const id = useSelector(state => state.user.me && state.user.me.id);

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onToggleLike}
            />
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike} />
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
        // extra: 우측 상단에 공간을 준다.
        extra={id && <FollowButton post={post} />}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          // 해쉬태그 링크걸어서 클릭시 관련글들만 보이게 하기 위해서
          // 중요기능을 추가해야할 시 <Post~~> 컴포넌트로 바꿔준다 먼저
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {/* 댓글 */}
      {commentFormOpened && (
        <div>
          {/* 댓글은 게시글에 종속되어있기 때문에 어떤 게시글인지 정보를 받아야 함 따라서 post={post} */}
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizonal"
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
    // Likers: PropTypes.arrayOf(PropTypes.object),
    // RetweetId: PropTypes.number,
    // Retweet: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

export default PostCard;

// import React, { useState, useCallback } from "react";
// import PropTPostCardypes from "prop-types";
// import { useSelector, useDispatch } from "react-redux";
// import { Card, Popover, Button, Avatar, List, Comment } from "antd";
// import {
//   RetweetOutlined,
//   HeartOutlined,
//   MessageOutlined,
//   EllipsisOutlined,
//   HeartTwoTone,
// } from "@ant-design/icons";
// import Link from "next/link";
// import moment from "moment";

// import PostImages from "./PostImages";
// import CommentForm from "./CommentForm";
// import PostCardContent from "./PostCardContent";
// import {
//   LIKE_POST_REQUEST,
//   REMOVE_POST_REQUEST,
//   UNLIKE_POST_REQUEST,
//   RETWEET_REQUEST,
//   UPDATE_POST_REQUEST,
// } from "../reducers/post";
// import FollowButton from "./FollowButton";

// moment.locale("ko");

// const PostCard = ({ post }) => {
//   const dispatch = useDispatch();
//   const { removePostLoading } = useSelector(state => state.post);
//   const [commentFormOpened, setCommentFormOpened] = useState(false);
//   const id = useSelector(state => state.user.me?.id);
//   const [editMode, setEditMode] = useState(false);

//   const onClickUpdate = useCallback(() => {
//     setEditMode(true);
//   }, []);

//   const onCancelUpdate = useCallback(() => {
//     setEditMode(false);
//   }, []);

//   const onChangePost = useCallback(
//     editText => () => {
//       dispatch({
//         type: UPDATE_POST_REQUEST,
//         data: {
//           PostId: post.id,
//           content: editText,
//         },
//       });
//     },
//     [post]
//   );

//   const onLike = useCallback(() => {
//     if (!id) {
//       return alert("로그인이 필요합니다.");
//     }
//     return dispatch({
//       type: LIKE_POST_REQUEST,
//       data: post.id,
//     });
//   }, [id]);
//   const onUnlike = useCallback(() => {
//     if (!id) {
//       return alert("로그인이 필요합니다.");
//     }
//     return dispatch({
//       type: UNLIKE_POST_REQUEST,
//       data: post.id,
//     });
//   }, [id]);
//   const onToggleComment = useCallback(() => {
//     setCommentFormOpened(prev => !prev);
//   }, []);

//   const onRemovePost = useCallback(() => {
//     if (!id) {
//       return alert("로그인이 필요합니다.");
//     }
//     return dispatch({
//       type: REMOVE_POST_REQUEST,
//       data: post.id,
//     });
//   }, [id]);

//   const onRetweet = useCallback(() => {
//     if (!id) {
//       return alert("로그인이 필요합니다.");
//     }
//     return dispatch({
//       type: RETWEET_REQUEST,
//       data: post.id,
//     });
//   }, [id]);

//   const liked = post.Likers.find(v => v.id === id);
//   return (
//     <div style={{ marginBottom: 20 }}>
//       <Card
//         cover={post.Images[0] && <PostImages images={post.Images} />}
//         actions={[
//           <RetweetOutlined key="retweet" onClick={onRetweet} />,
//           liked ? (
//             <HeartTwoTone
//               twoToneColor="#eb2f96"
//               key="heart"
//               onClick={onUnlike}
//             />
//           ) : (
//             <HeartOutlined key="heart" onClick={onLike} />
//           ),
//           <MessageOutlined key="comment" onClick={onToggleComment} />,
//           <Popover
//             key="more"
//             content={
//               <Button.Group>
//                 {id && post.User.id === id ? (
//                   <>
//                     {!post.RetweetId && (
//                       <Button onClick={onClickUpdate}>수정</Button>
//                     )}
//                     <Button
//                       type="danger"
//                       loading={removePostLoading}
//                       onClick={onRemovePost}
//                     >
//                       삭제
//                     </Button>
//                   </>
//                 ) : (
//                   <Button>신고</Button>
//                 )}
//               </Button.Group>
//             }
//           >
//             <EllipsisOutlined />
//           </Popover>,
//         ]}
//         title={
//           post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null
//         }
//         extra={id && <FollowButton post={post} />}
//       >
//         {post.RetweetId && post.Retweet ? (
//           <Card
//             cover={
//               post.Retweet.Images[0] && (
//                 <PostImages images={post.Retweet.Images} />
//               )
//             }
//           >
//             <div style={{ float: "right" }}>
//               {moment(post.createdAt).format("YYYY.MM.DD")}
//             </div>
//             <Card.Meta
//               avatar={
//                 <Link href={`/user/${post.Retweet.User.id}`} prefetch={false}>
//                   <a>
//                     <Avatar>{post.Retweet.User.nickname[0]}</Avatar>
//                   </a>
//                 </Link>
//               }
//               title={post.Retweet.User.nickname}
//               description={
//                 <PostCardContent
//                   postData={post.Retweet.content}
//                   onChangePost={onChangePost}
//                   onCancelUpdate={onCancelUpdate}
//                 />
//               }
//             />
//           </Card>
//         ) : (
//           <>
//             <div style={{ float: "right" }}>
//               {moment(post.createdAt).format("YYYY.MM.DD")}
//             </div>
//             <Card.Meta
//               avatar={
//                 <Link href={`/user/${post.User.id}`} prefetch={false}>
//                   <a>
//                     <Avatar>{post.User.nickname[0]}</Avatar>
//                   </a>
//                 </Link>
//               }
//               title={post.User.nickname}
//               description={
//                 <PostCardContent
//                   editMode={editMode}
//                   onChangePost={onChangePost}
//                   onCancelUpdate={onCancelUpdate}
//                   postData={post.content}
//                 />
//               }
//             />
//           </>
//         )}
//       </Card>
//       {commentFormOpened && (
//         <div>
//           <CommentForm post={post} />
//           <List
//             header={`${post.Comments.length}개의 댓글`}
//             itemLayout="horizontal"
//             dataSource={post.Comments}
//             renderItem={item => (
//               <li>
//                 <Comment
//                   author={item.User.nickname}
//                   avatar={
//                     <Link href={`/user/${item.User.id}`} prefetch={false}>
//                       <a>
//                         <Avatar>{item.User.nickname[0]}</Avatar>
//                       </a>
//                     </Link>
//                   }
//                   content={item.content}
//                 />
//               </li>
//             )}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// PostCard.propTypes = {
//   post: PropTypes.shape({
//     id: PropTypes.number,
//     User: PropTypes.object,
//     content: PropTypes.string,
//     createdAt: PropTypes.string,
//     Comments: PropTypes.arrayOf(PropTypes.object),
//     Images: PropTypes.arrayOf(PropTypes.object),
//     Likers: PropTypes.arrayOf(PropTypes.object),
//     RetweetId: PropTypes.number,
//     Retweet: PropTypes.objectOf(PropTypes.any),
//   }).isRequired,
// };

// export default PostCard;
