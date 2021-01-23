import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { PlusOutlined } from "@ant-design/icons";
import ImagesZoom from "components/Dashboard/Main/Feed/PostImages/imagesZoom";

const PostImages = ({ images }) => {
  /// ////이미지 캐루셀 구현하기(이미지 확대시 집중해서 보이게끔)
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  // 이미지 확대하기
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  // 이미지 확대 끄기
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  // 바로 return할 수가 있네.. 조건부 따라서
  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          // style={{ maxHeight: "200px" }}
          src={`http://localhost:3065/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
        />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={`http://localhost:3065/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={`http://localhost:3065/${images[1].src}`}
          alt={images[1].src}
          onClick={onZoom}
        />
      </>
    );
  }

  return (
    <>
      <div>
        <img
          role="presentation"
          style={{ width: "50%" }}
          src={`http://localhost:3065/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
        />
        {/* 우측에 n개사진 더보기 div */}
        <div
          role="presentation"
          style={{
            display: "inline-block",
            width: "50%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </div>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
    })
  ).isRequired,
};

export default PostImages;
