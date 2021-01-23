import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";
import {
  Overlay,
  Global,
  Header,
  CloseButton,
  SlickWrapper,
  ImageWrapper,
  Indicator,
} from "./styles";

const ImagesZoom = ({ images, onClose }) => {
  // 현재 슬라이드 (번호?)에 대한 state
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleKeyPress = useCallback(e => {
    if (e.key === 27) {
      onClose();
    }
  }, []);

  return (
    <Overlay onKeyDown={handleKeyPress}>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Header>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            // 슬라이드 넘길때 번호 부여
            // arrows: 양옆에 화살표 버튼
            beforeChange={slide => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map(v => (
              <ImageWrapper key={v.src}>
                <img src={`http://localhost:3065/${v.src}`} alt={v.src} />
              </ImageWrapper>
            ))}
          </Slick>
          {/* 페이지 쪽수 화면 하단에 나타내기 */}
          <Indicator>
            <div>
              {currentSlide + 1}
              {""}/{images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
