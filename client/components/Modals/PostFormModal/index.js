import React, { useCallback, useRef, useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from "reducers/post";
import useInput from "hooks/useinput";
import { StyledDiv, StyledImg } from './styles'

const index = () => {

  // 차후 구현필요: 게시글 작성 완료후에는 모달창 Close기능(state 컴포넌트간 이동 가능화 후)
  const [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  const { imagePaths, addPostDone } = useSelector(state => state.post);
  const dispatch = useDispatch();
  const [text, onChangeText, setText] = useInput("");

  // 게시글 초기화: 뭐 한다음에 처리해야 하려면 이렇게
  // 사실 onSubmit에 놓았다가 서버로 보낼때 실패했는데도 글이 초기화되면 안되니깐
  // useEffect를 통해서 addPost로 보낸 뒤에 setText를 실행하게끔!
  useEffect(() => {
    if (addPostDone) {
      setText("");
      // 차후 구현필요: 게시글 작성 완료후에는 모달창 Close기능(state 컴포넌트간 이동 가능화 후)
      setOpen(false);
      alert("게시글이 작성되었습니다.")
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    // 게시글 없을경우 게시글 작성요청(trim: 양쪽공백제거)
    if (!text || !text.trim()) {
      return alert('게시글을 작성해주세요.');
    }

    const formData = new FormData();

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    // formData객체에 key/value쌍의 내용물 추가(append) 및 dispatch
    imagePaths.forEach((p) => {
      formData.append('image', p);  // req.body.image (cf. 파일: req.file) 이미지or파일 아닌 나머지: req.body에 넣어줌
    });
    formData.append('content', text);  // req.body.content
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    console.log(imagePaths)

    return dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  }, [text, imagePaths]);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  // @ 이미지만 편집
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
        maxLength={220}
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
          <StyledDiv key={v} >
            <StyledImg src={`http://localhost:3065/images/${v}`} alt={v} />
            <div>
              <Button onClick={onRemoveImage(i)}>제거</Button>
            </div>
          </StyledDiv>
        ))}
      </div>
    </Form>
  );
};

export default index;