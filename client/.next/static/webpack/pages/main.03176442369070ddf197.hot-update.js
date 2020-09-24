webpackHotUpdate_N_E("pages/main",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostCardContent */ "./components/PostCardContent.js");
/* harmony import */ var _FollowButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FollowButton */ "./components/FollowButton.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\arthu\\Documents\\nextpus_2020\\client\\components\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









 // post를 부모로부터 받아옴(main.js)

var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      removePostLoading = _useSelector.removePostLoading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      liked = _useState[0],
      setLiked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpened = _useState2[0],
      setCommentFormOpened = _useState2[1]; // 좋아요버튼 on/off 기능관련


  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
  }, []); // 댓글 보이기 on/off 기능관련

  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }); // 존재여부 확인: 옵셔널 체이닝 연산자 - me.id가 있으면 id로 바꿔주고 아니면 undefined

  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user.me && state.user.me.id;
  });
  return __jsx("div", {
    style: {
      marginBottom: 20
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 34
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartTwoTone"], {
      twoToneColor: "#eb2f96",
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "danger",
        loading: removePostLoading,
        onClick: onRemovePost,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 19
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    }))] // extra: 우측 상단에 공간을 준다.
    ,
    extra: id && __jsx(_FollowButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 22
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 19
      }
    }, post.User.nickname[0]),
    title: post.User.nickname // 해쉬태그 링크걸어서 클릭시 관련글들만 보이게 하기 위해서
    // 중요기능을 추가해야할 시 <Post~~> 컴포넌트로 바꿔준다 먼저
    ,
    description: __jsx(_PostCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postData: post.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 24
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["List"], {
    header: "".concat(post.Comments.length, "\uAC1C\uC758 \uB313\uAE00"),
    itemLayout: "horizonal",
    dataSource: post.Comments // post.comments가 item으로 들어감
    ,
    renderItem: function renderItem(item) {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 27
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
    }
  }), " "));
};

_s(PostCard, "qvSyG87bQ/O46tscczWgL854exA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object) // Likers: PropTypes.arrayOf(PropTypes.object),
    // RetweetId: PropTypes.number,
    // Retweet: PropTypes.objectOf(PropTypes.any),

  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard); // import React, { useState, useCallback } from "react";
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

var _c;

$RefreshReg$(_c, "PostCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlbW92ZVBvc3RMb2FkaW5nIiwidXNlU3RhdGUiLCJsaWtlZCIsInNldExpa2VkIiwiY29tbWVudEZvcm1PcGVuZWQiLCJzZXRDb21tZW50Rm9ybU9wZW5lZCIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwicHJldiIsIm9uVG9nZ2xlQ29tbWVudCIsIm9uUmVtb3ZlUG9zdCIsInR5cGUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiZGF0YSIsImlkIiwidXNlciIsIm1lIiwibWFyZ2luQm90dG9tIiwiSW1hZ2VzIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzdCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRDZCLHFCQUVDQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNKLElBQVY7QUFBQSxHQUFOLENBRlo7QUFBQSxNQUVyQkssaUJBRnFCLGdCQUVyQkEsaUJBRnFCOztBQUFBLGtCQUdIQyxzREFBUSxDQUFDLEtBQUQsQ0FITDtBQUFBLE1BR3RCQyxLQUhzQjtBQUFBLE1BR2ZD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O0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW4uMDMxNzY0NDIzNjkwNzBkZGYxOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7XHJcbiAgUmV0d2VldE91dGxpbmVkLFxyXG4gIEhlYXJ0T3V0bGluZWQsXHJcbiAgTWVzc2FnZU91dGxpbmVkLFxyXG4gIEVsbGlwc2lzT3V0bGluZWQsXHJcbiAgSGVhcnRUd29Ub25lLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IENhcmQsIFBvcG92ZXIsIEJ1dHRvbiwgQXZhdGFyLCBMaXN0LCBDb21tZW50IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gXCIuL0NvbW1lbnRGb3JtXCI7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tIFwiLi9Qb3N0Q2FyZENvbnRlbnRcIjtcclxuaW1wb3J0IEZvbGxvd0J1dHRvbiBmcm9tIFwiLi9Gb2xsb3dCdXR0b25cIjtcclxuaW1wb3J0IHsgUkVNT1ZFX1BPU1RfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcblxyXG4vLyBwb3N066W8IOu2gOuqqOuhnOu2gO2EsCDrsJvslYTsmLQobWFpbi5qcylcclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyByZW1vdmVQb3N0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIOyii+yVhOyalOuyhO2KvCBvbi9vZmYg6riw64ql6rSA66CoXHJcbiAgY29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0TGlrZWQocHJldiA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG4gIC8vIOuMk+q4gCDrs7TsnbTquLAgb24vb2ZmIOq4sOuKpeq0gOugqFxyXG4gIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKHByZXYgPT4gIXByZXYpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIOyhtOyerOyXrOu2gCDtmZXsnbg6IOyYteyFlOuEkCDssrTsnbTri50g7Jew7IKw7J6QIC0gbWUuaWTqsIAg7J6I7Jy866m0IGlk66GcIOuwlOq/lOyjvOqzoCDslYTri4jrqbQgdW5kZWZpbmVkXHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLm1lICYmIHN0YXRlLnVzZXIubWUuaWQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDIwIH19PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiAvPixcclxuICAgICAgICAgIGxpa2VkID8gKFxyXG4gICAgICAgICAgICA8SGVhcnRUd29Ub25lXHJcbiAgICAgICAgICAgICAgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiXHJcbiAgICAgICAgICAgICAga2V5PVwiaGVhcnRcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25Ub2dnbGVMaWtlfSAvPlxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0gLz4sXHJcbiAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICBrZXk9XCJtb3JlXCJcclxuICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgICAgIHsvKiDrgrTqsIDsk7TquIDqtoztlZw6IOyImOyglS/sgq3soJwgLyDrgqjsnbTsk7Qg6riA6raM7ZWcOiDsi6Dqs6AgKi99XHJcbiAgICAgICAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZCA/IChcclxuICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBkYW5nZXI6IOu2ieydgOyDiSwgcHJpbWFyeTog7YyM656A7IOJICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlbW92ZVBvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAg7IKt7KCcXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvUG9wb3Zlcj4sXHJcbiAgICAgICAgXX1cclxuICAgICAgICAvLyBleHRyYTog7Jqw7LihIOyDgeuLqOyXkCDqs7XqsITsnYQg7KSA64ukLlxyXG4gICAgICAgIGV4dHJhPXtpZCAmJiA8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9IC8+fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcmQuTWV0YVxyXG4gICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntwb3N0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgIC8vIO2VtOyJrO2DnOq3uCDrp4HtgazqsbjslrTshJwg7YG066at7IucIOq0gOugqOq4gOuTpOunjCDrs7TsnbTqsowg7ZWY6riwIOychO2VtOyEnFxyXG4gICAgICAgICAgLy8g7KSR7JqU6riw64ql7J2EIOy2lOqwgO2VtOyVvO2VoCDsi5wgPFBvc3R+fj4g7Lu07Y+s64SM7Yq466GcIOuwlOq/lOykgOuLpCDrqLzsoIBcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9IC8+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQ2FyZD5cclxuICAgICAgey8qIOuMk+q4gCAqL31cclxuICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgey8qIOuMk+q4gOydgCDqsozsi5zquIDsl5Ag7KKF7IaN65CY7Ja07J6I6riwIOuVjOusuOyXkCDslrTrlqQg6rKM7Iuc6riA7J247KeAIOygleuztOulvCDrsJvslYTslbwg7ZWoIOuUsOudvOyEnCBwb3N0PXtwb3N0fSAqL31cclxuICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b25hbFwiXHJcbiAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcbiAgICAgICAgICAgIC8vIHBvc3QuY29tbWVudHPqsIAgaXRlbeycvOuhnCDrk6TslrTqsJBcclxuICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57aXRlbS5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgQ29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIC8vIExpa2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICAvLyBSZXR3ZWV0SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAvLyBSZXR3ZWV0OiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFueSksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG5cclxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgUHJvcFRQb3N0Q2FyZHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuLy8gaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbi8vIGltcG9ydCB7IENhcmQsIFBvcG92ZXIsIEJ1dHRvbiwgQXZhdGFyLCBMaXN0LCBDb21tZW50IH0gZnJvbSBcImFudGRcIjtcclxuLy8gaW1wb3J0IHtcclxuLy8gICBSZXR3ZWV0T3V0bGluZWQsXHJcbi8vICAgSGVhcnRPdXRsaW5lZCxcclxuLy8gICBNZXNzYWdlT3V0bGluZWQsXHJcbi8vICAgRWxsaXBzaXNPdXRsaW5lZCxcclxuLy8gICBIZWFydFR3b1RvbmUsXHJcbi8vIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XHJcblxyXG4vLyBpbXBvcnQgUG9zdEltYWdlcyBmcm9tIFwiLi9Qb3N0SW1hZ2VzXCI7XHJcbi8vIGltcG9ydCBDb21tZW50Rm9ybSBmcm9tIFwiLi9Db21tZW50Rm9ybVwiO1xyXG4vLyBpbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gXCIuL1Bvc3RDYXJkQ29udGVudFwiO1xyXG4vLyBpbXBvcnQge1xyXG4vLyAgIExJS0VfUE9TVF9SRVFVRVNULFxyXG4vLyAgIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbi8vICAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuLy8gICBSRVRXRUVUX1JFUVVFU1QsXHJcbi8vICAgVVBEQVRFX1BPU1RfUkVRVUVTVCxcclxuLy8gfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG4vLyBpbXBvcnQgRm9sbG93QnV0dG9uIGZyb20gXCIuL0ZvbGxvd0J1dHRvblwiO1xyXG5cclxuLy8gbW9tZW50LmxvY2FsZShcImtvXCIpO1xyXG5cclxuLy8gY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuLy8gICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbi8vICAgY29uc3QgeyByZW1vdmVQb3N0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdCk7XHJcbi8vICAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmVkLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbi8vICAgY29uc3QgaWQgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbi8vICAgY29uc3QgW2VkaXRNb2RlLCBzZXRFZGl0TW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4vLyAgIGNvbnN0IG9uQ2xpY2tVcGRhdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbi8vICAgICBzZXRFZGl0TW9kZSh0cnVlKTtcclxuLy8gICB9LCBbXSk7XHJcblxyXG4vLyAgIGNvbnN0IG9uQ2FuY2VsVXBkYXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4vLyAgICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xyXG4vLyAgIH0sIFtdKTtcclxuXHJcbi8vICAgY29uc3Qgb25DaGFuZ2VQb3N0ID0gdXNlQ2FsbGJhY2soXHJcbi8vICAgICBlZGl0VGV4dCA9PiAoKSA9PiB7XHJcbi8vICAgICAgIGRpc3BhdGNoKHtcclxuLy8gICAgICAgICB0eXBlOiBVUERBVEVfUE9TVF9SRVFVRVNULFxyXG4vLyAgICAgICAgIGRhdGE6IHtcclxuLy8gICAgICAgICAgIFBvc3RJZDogcG9zdC5pZCxcclxuLy8gICAgICAgICAgIGNvbnRlbnQ6IGVkaXRUZXh0LFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgIH0pO1xyXG4vLyAgICAgfSxcclxuLy8gICAgIFtwb3N0XVxyXG4vLyAgICk7XHJcblxyXG4vLyAgIGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuLy8gICAgIGlmICghaWQpIHtcclxuLy8gICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC5cIik7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4vLyAgICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuLy8gICAgICAgZGF0YTogcG9zdC5pZCxcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0sIFtpZF0pO1xyXG4vLyAgIGNvbnN0IG9uVW5saWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4vLyAgICAgaWYgKCFpZCkge1xyXG4vLyAgICAgICByZXR1cm4gYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLlwiKTtcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbi8vICAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbi8vICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbi8vICAgICB9KTtcclxuLy8gICB9LCBbaWRdKTtcclxuLy8gICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbi8vICAgICBzZXRDb21tZW50Rm9ybU9wZW5lZChwcmV2ID0+ICFwcmV2KTtcclxuLy8gICB9LCBbXSk7XHJcblxyXG4vLyAgIGNvbnN0IG9uUmVtb3ZlUG9zdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuLy8gICAgIGlmICghaWQpIHtcclxuLy8gICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC5cIik7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4vLyAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4vLyAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4vLyAgICAgfSk7XHJcbi8vICAgfSwgW2lkXSk7XHJcblxyXG4vLyAgIGNvbnN0IG9uUmV0d2VldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuLy8gICAgIGlmICghaWQpIHtcclxuLy8gICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpC5cIik7XHJcbi8vICAgICB9XHJcbi8vICAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4vLyAgICAgICB0eXBlOiBSRVRXRUVUX1JFUVVFU1QsXHJcbi8vICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbi8vICAgICB9KTtcclxuLy8gICB9LCBbaWRdKTtcclxuXHJcbi8vICAgY29uc3QgbGlrZWQgPSBwb3N0Lkxpa2Vycy5maW5kKHYgPT4gdi5pZCA9PT0gaWQpO1xyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX0+XHJcbi8vICAgICAgIDxDYXJkXHJcbi8vICAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+fVxyXG4vLyAgICAgICAgIGFjdGlvbnM9e1tcclxuLy8gICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIG9uQ2xpY2s9e29uUmV0d2VldH0gLz4sXHJcbi8vICAgICAgICAgICBsaWtlZCA/IChcclxuLy8gICAgICAgICAgICAgPEhlYXJ0VHdvVG9uZVxyXG4vLyAgICAgICAgICAgICAgIHR3b1RvbmVDb2xvcj1cIiNlYjJmOTZcIlxyXG4vLyAgICAgICAgICAgICAgIGtleT1cImhlYXJ0XCJcclxuLy8gICAgICAgICAgICAgICBvbkNsaWNrPXtvblVubGlrZX1cclxuLy8gICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICkgOiAoXHJcbi8vICAgICAgICAgICAgIDxIZWFydE91dGxpbmVkIGtleT1cImhlYXJ0XCIgb25DbGljaz17b25MaWtlfSAvPlxyXG4vLyAgICAgICAgICAgKSxcclxuLy8gICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5PVwiY29tbWVudFwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbWVudH0gLz4sXHJcbi8vICAgICAgICAgICA8UG9wb3ZlclxyXG4vLyAgICAgICAgICAgICBrZXk9XCJtb3JlXCJcclxuLy8gICAgICAgICAgICAgY29udGVudD17XHJcbi8vICAgICAgICAgICAgICAgPEJ1dHRvbi5Hcm91cD5cclxuLy8gICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gKFxyXG4vLyAgICAgICAgICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHshcG9zdC5SZXR3ZWV0SWQgJiYgKFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrVXBkYXRlfT7siJjsoJU8L0J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYW5nZXJcIlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17cmVtb3ZlUG9zdExvYWRpbmd9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvblJlbW92ZVBvc3R9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAg7IKt7KCcXHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgICAgICAgICAgKSA6IChcclxuLy8gICAgICAgICAgICAgICAgICAgPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICl9XHJcbi8vICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQgLz5cclxuLy8gICAgICAgICAgIDwvUG9wb3Zlcj4sXHJcbi8vICAgICAgICAgXX1cclxuLy8gICAgICAgICB0aXRsZT17XHJcbi8vICAgICAgICAgICBwb3N0LlJldHdlZXRJZCA/IGAke3Bvc3QuVXNlci5uaWNrbmFtZX3ri5jsnbQg66as7Yq47JyX7ZWY7IWo7Iq164uI64ukLmAgOiBudWxsXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGV4dHJhPXtpZCAmJiA8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9IC8+fVxyXG4vLyAgICAgICA+XHJcbi8vICAgICAgICAge3Bvc3QuUmV0d2VldElkICYmIHBvc3QuUmV0d2VldCA/IChcclxuLy8gICAgICAgICAgIDxDYXJkXHJcbi8vICAgICAgICAgICAgIGNvdmVyPXtcclxuLy8gICAgICAgICAgICAgICBwb3N0LlJldHdlZXQuSW1hZ2VzWzBdICYmIChcclxuLy8gICAgICAgICAgICAgICAgIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5SZXR3ZWV0LkltYWdlc30gLz5cclxuLy8gICAgICAgICAgICAgICApXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmbG9hdDogXCJyaWdodFwiIH19PlxyXG4vLyAgICAgICAgICAgICAgIHttb21lbnQocG9zdC5jcmVhdGVkQXQpLmZvcm1hdChcIllZWVkuTU0uRERcIil9XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbi8vICAgICAgICAgICAgICAgYXZhdGFyPXtcclxuLy8gICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke3Bvc3QuUmV0d2VldC5Vc2VyLmlkfWB9IHByZWZldGNoPXtmYWxzZX0+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxhPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXI+e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlJldHdlZXQuVXNlci5uaWNrbmFtZX1cclxuLy8gICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XHJcbi8vICAgICAgICAgICAgICAgICA8UG9zdENhcmRDb250ZW50XHJcbi8vICAgICAgICAgICAgICAgICAgIHBvc3REYXRhPXtwb3N0LlJldHdlZXQuY29udGVudH1cclxuLy8gICAgICAgICAgICAgICAgICAgb25DaGFuZ2VQb3N0PXtvbkNoYW5nZVBvc3R9XHJcbi8vICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsVXBkYXRlPXtvbkNhbmNlbFVwZGF0ZX1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgPC9DYXJkPlxyXG4vLyAgICAgICAgICkgOiAoXHJcbi8vICAgICAgICAgICA8PlxyXG4vLyAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIgfX0+XHJcbi8vICAgICAgICAgICAgICAge21vbWVudChwb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KFwiWVlZWS5NTS5ERFwiKX1cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuLy8gICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4vLyAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7cG9zdC5Vc2VyLmlkfWB9IHByZWZldGNoPXtmYWxzZX0+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxhPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj5cclxuLy8gICAgICAgICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4vLyAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcclxuLy8gICAgICAgICAgICAgICAgIDxQb3N0Q2FyZENvbnRlbnRcclxuLy8gICAgICAgICAgICAgICAgICAgZWRpdE1vZGU9e2VkaXRNb2RlfVxyXG4vLyAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVBvc3Q9e29uQ2hhbmdlUG9zdH1cclxuLy8gICAgICAgICAgICAgICAgICAgb25DYW5jZWxVcGRhdGU9e29uQ2FuY2VsVXBkYXRlfVxyXG4vLyAgICAgICAgICAgICAgICAgICBwb3N0RGF0YT17cG9zdC5jb250ZW50fVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICA8Lz5cclxuLy8gICAgICAgICApfVxyXG4vLyAgICAgICA8L0NhcmQ+XHJcbi8vICAgICAgIHtjb21tZW50Rm9ybU9wZW5lZCAmJiAoXHJcbi8vICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fSAvPlxyXG4vLyAgICAgICAgICAgPExpc3RcclxuLy8gICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH3qsJzsnZgg64yT6riAYH1cclxuLy8gICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4vLyAgICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4vLyAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuLy8gICAgICAgICAgICAgICA8bGk+XHJcbi8vICAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4vLyAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuLy8gICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcclxuLy8gICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHtpdGVtLlVzZXIuaWR9YH0gcHJlZmV0Y2g9e2ZhbHNlfT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cclxuLy8gICAgICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICAgPC9saT5cclxuLy8gICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICl9XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuLy8gUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4vLyAgIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbi8vICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuLy8gICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbi8vICAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4vLyAgICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4vLyAgICAgQ29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4vLyAgICAgSW1hZ2VzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuLy8gICAgIExpa2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbi8vICAgICBSZXR3ZWV0SWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbi8vICAgICBSZXR3ZWV0OiBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLmFueSksXHJcbi8vICAgfSkuaXNSZXF1aXJlZCxcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9