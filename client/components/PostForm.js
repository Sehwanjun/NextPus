import React, { useCallback, useRef, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from "../reducers/post";
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
    // 게시글 없을경우 게시글 작성요청
    if (!text || !text.trim()) {
      return alert('게시글을 작성해주세요.');
    }
    // formData객체에 내용물 추가 및 dispatch
    const formData = new FormData();
    imagePaths.forEach((p) => {
      formData.append('image', p)  // req.body.image (cf. 파일: req.file) 이미지or파일 아닌 나머지: req.body에 넣어줌
    })
    formData.append('content', text)  // req.body.content
    return dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  }, [text, imagePaths]);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log("images", e.target.files);
    // FormData: multipart형태로 서버에 보낼 수 있음
    const imageFormData = new FormData();
    // e.target.files: 배열모양의 객체 - 유사배열(not 배열)
    // 따라서, 배열의 forEach메서드를 빌려씀
    [].forEach.call(e.target.files, (f) => {
      // 'image'와 router / post의 'image' 값이 일치해야 받을 수 있음
      // FormData 인터페이스의 append() 메서드는 FormData 객체의 기존 키에 새 값을 추가하거나, 키가 없는 경우 키를 추가합니다.
      // formData.append(name, value);
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    })
  })
  // map내에 callback함수 데이터 넣을시 고차함수
  const onRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: index,
    })
  })

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
        {/* 속성값 필수 */}
        <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          작성
        </Button>
      </div>
      <div>
        {imagePaths.map((v, i) => (
          <div key={v} style={{ display: "inline-block" }}>
            <img src={`http://localhost:3065/images/${v}`} style={{ width: "200px" }} alt={v} />
            <div>
              <Button onClick={onRemoveImage(i)}>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
