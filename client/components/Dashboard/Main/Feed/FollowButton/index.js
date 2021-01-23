import React, { useCallback } from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from "reducers/user";

// FollowButton 클릭시: userprofile의 follow counting, 언팔로우버튼으로 변경, profile에 추가
const FollowButton = ({ post }) => {
  const dispatch = useDispatch();
  const { me, followLoading, unfollowLoading } = useSelector(
    state => state.user
  );

  // isFollowing = me : 내가 팔로잉한사람들중에 게시글작성자 아이디가 팔로잉 목록에 있다면
  // 그 사람 아이디만 보내주면 됨(data:post.User.id)
  const isFollowing = me?.Followings.find(v => v.id === post.User.id);
  const onClickButton = useCallback(() => {
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      });
    }
  }, [isFollowing]);

  if (post.User.id === me.id) { // 게시글 작성자가 나일경우 버튼 안보이기
    return null;
  }

  return (
    <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
      {isFollowing ? "언팔로우" : "팔로우"}
    </Button>
  );
};

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;
