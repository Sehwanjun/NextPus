import React, { useCallback, useRef, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../reducers/post";
import useInput from "../hooks/useinput";

const PostForm = () => {
  const { imagePaths, addPostDone } = useSelector(state => state.post);
  const dispatch = useDispatch();
  const [text, onChangeText, setText] = useInput("");

  // 게시글 초기화: 뭐 한다음에 처리해야 하려면 이렇게
  // 사실 onSubmit에 놓았다가 서버로 보낼때 실패했는데도 글이 초기화되면 안되니깐
  // useEffect를 통해서 addPost로 보낸 뒤에 setText를 실행하게끔!
  useEffect(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    dispatch(addPost(text));
  }, [text]);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          작성
        </Button>
      </div>
      <div>
        {imagePaths.map(v => (
          <div key={v} style={{ display: "inline-block" }}>
            <img src={v} style={{ width: "200px" }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
