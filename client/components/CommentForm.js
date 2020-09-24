import React, { useCallback, useEffect } from "react";
import { Form, Input, Button } from "antd";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../hooks/useinput";
import { ADD_COMMENT_REQUEST } from "../reducers/post";

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector(state => state.user.me?.id);
  const { addCommentDone, addCommentLoading } = useSelector(
    state => state.post
  );
  const [commentText, onChangeCommentText, setCommentText] = useInput("");

  // 이것도 댓글 초기화시키는 건데 서버에 보낸게 완료된 뒤
  // 초기화시키기 위해 useEffect사용
  useEffect(() => {
    if (addCommentDone) {
      setCommentText("");
    }
  }, [addCommentDone]);

  const onSubmitComment = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id, userId: id },
    });
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          row={4}
        />
        <Button
          style={{ position: "absolute", margin: 0, bottom: -40, zIndex: 1 }}
          type="primary"
          htmlType="submit"
          loading= {addCommentLoading}
        >
          작성
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
