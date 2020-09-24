import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

// #해시태그에 링크걸어서 포스팅 필터링하기
// 정규표현식: / 내용물 /  regexr 참고
//     ...:3글자, +:그다음글자모두선택, []:공백제거, 내부글자들 중에서선택 */}
//     ^~: ^이후글자들 포함시 선택제외 \s:공백 두번째#은 #앞에서 끊어주기 위해(ex. #첫째#둘째 이거분리) */}
//     ()괄호로 감싸줘야 2번째, 3번째것도 별도로 포함이 됨

const PostCardContent = ({ postData }) => (
  <div>
    
    {postData.split(/(#[^\s#]+)/g).map(v => {
      if (v.match(/(#[^\s]+)/)) {
        // 해쉬태그인 애들은 Link컴포넌트를 통한 리턴
        // slice(1)은 #을 뗀것
        return (
          <Link
            href={{ pathname: "/hashtag", query: { tag: v.slice(1) } }}
            as={`/hashtag/${v.slice(1)}`}
            key={v}
          >
            <a>{v}</a>
          </Link>
        );
      }
      // 아닌애들은 그냥 리턴
      return v;
    })}
  </div>
);

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
