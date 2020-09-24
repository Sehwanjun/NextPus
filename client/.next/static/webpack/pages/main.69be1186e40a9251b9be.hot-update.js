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
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
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
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_POST_REQUEST"],
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
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    cover: post.Images[0] && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
      images: post.Images,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 34
      }
    }),
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {
      key: "retweet",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }), liked ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartTwoTone"], {
      twoToneColor: "#eb2f96",
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
      key: "heart",
      onClick: onToggleLike,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      key: "comment",
      onClick: onToggleComment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Popover"], {
      key: "more",
      content: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"].Group, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }
      }, id && post.User.id === id ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      }, "\uC218\uC815"), __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        type: "danger",
        loading: removePostLoading,
        onClick: onRemovePost,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }
      }, "\uC0AD\uC81C")) : __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 19
        }
      }, "\uC2E0\uACE0")),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }))] // extra: 우측 상단에 공간을 준다.
    ,
    extra: __jsx(FollowButton, {
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 16
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
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
        lineNumber: 93,
        columnNumber: 24
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  })), commentFormOpened && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
          lineNumber: 107,
          columnNumber: 15
        }
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Comment"], {
        author: item.User.nickname,
        avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 27
          }
        }, item.User.nickname[0]),
        content: item.content,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 17
        }
      }));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJQb3N0Q2FyZCIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlbW92ZVBvc3RMb2FkaW5nIiwidXNlU3RhdGUiLCJsaWtlZCIsInNldExpa2VkIiwiY29tbWVudEZvcm1PcGVuZWQiLCJzZXRDb21tZW50Rm9ybU9wZW5lZCIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwicHJldiIsIm9uVG9nZ2xlQ29tbWVudCIsIm9uUmVtb3ZlUG9zdCIsInR5cGUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiZGF0YSIsImlkIiwidXNlciIsIm1lIiwibWFyZ2luQm90dG9tIiwiSW1hZ2VzIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQzdCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRDZCLHFCQUVDQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNKLElBQVY7QUFBQSxHQUFOLENBRlo7QUFBQSxNQUVyQkssaUJBRnFCLGdCQUVyQkEsaUJBRnFCOztBQUFBLGtCQUdIQyxzREFBUSxDQUFDLEtBQUQsQ0FITDtBQUFBLE1BR3RCQyxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi42OWJlMTE4NmU0MGE5MjUxYjliZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtcclxuICBSZXR3ZWV0T3V0bGluZWQsXHJcbiAgSGVhcnRPdXRsaW5lZCxcclxuICBNZXNzYWdlT3V0bGluZWQsXHJcbiAgRWxsaXBzaXNPdXRsaW5lZCxcclxuICBIZWFydFR3b1RvbmUsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgQ2FyZCwgUG9wb3ZlciwgQnV0dG9uLCBBdmF0YXIsIExpc3QsIENvbW1lbnQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSBcIi4vQ29tbWVudEZvcm1cIjtcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSBcIi4vUG9zdEltYWdlc1wiO1xyXG5pbXBvcnQgUG9zdENhcmRDb250ZW50IGZyb20gXCIuL1Bvc3RDYXJkQ29udGVudFwiO1xyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbi8vIHBvc3Trpbwg67aA66qo66Gc67aA7YSwIOuwm+yVhOyYtChtYWluLmpzKVxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IHJlbW92ZVBvc3RMb2FkaW5nIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8g7KKL7JWE7JqU67KE7Yq8IG9uL29mZiDquLDriqXqtIDroKhcclxuICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRMaWtlZChwcmV2ID0+ICFwcmV2KTtcclxuICB9LCBbXSk7XHJcbiAgLy8g64yT6riAIOuztOydtOq4sCBvbi9vZmYg6riw64ql6rSA66CoXHJcbiAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0Q29tbWVudEZvcm1PcGVuZWQocHJldiA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8g7KG07J6s7Jes67aAIO2ZleyduDog7Ji17IWU64SQIOyytOydtOuLnSDsl7DsgrDsnpAgLSBtZS5pZOqwgCDsnojsnLzrqbQgaWTroZwg67CU6r+U7KO86rOgIOyVhOuLiOuptCB1bmRlZmluZWRcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIubWUgJiYgc3RhdGUudXNlci5tZS5pZCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX0+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgY292ZXI9e3Bvc3QuSW1hZ2VzWzBdICYmIDxQb3N0SW1hZ2VzIGltYWdlcz17cG9zdC5JbWFnZXN9IC8+fVxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5PVwicmV0d2VldFwiIC8+LFxyXG4gICAgICAgICAgbGlrZWQgPyAoXHJcbiAgICAgICAgICAgIDxIZWFydFR3b1RvbmVcclxuICAgICAgICAgICAgICB0d29Ub25lQ29sb3I9XCIjZWIyZjk2XCJcclxuICAgICAgICAgICAgICBrZXk9XCJoZWFydFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17b25Ub2dnbGVMaWtlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvblRvZ2dsZUxpa2V9IC8+XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgIGtleT1cIm1vcmVcIlxyXG4gICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgey8qIOuCtOqwgOyTtOq4gOq2jO2VnDog7IiY7KCVL+yCreygnCAvIOuCqOydtOyTtCDquIDqtoztlZw6IOyLoOqzoCAqL31cclxuICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8gKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24+7IiY7KCVPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIGRhbmdlcjog67aJ7J2A7IOJLCBwcmltYXJ5OiDtjIzrnoDsg4kgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICDsgq3soJxcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPixcclxuICAgICAgICBdfVxyXG4gICAgICAgIC8vIGV4dHJhOiDsmrDsuKEg7IOB64uo7JeQIOqzteqwhOydhCDspIDri6QuXHJcbiAgICAgICAgZXh0cmE9ezxGb2xsb3dCdXR0b24gcG9zdD17cG9zdH0gLz59XHJcbiAgICAgID5cclxuICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e3Bvc3QuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICB0aXRsZT17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgLy8g7ZW07Ims7YOc6re4IOunge2BrOqxuOyWtOyEnCDtgbTrpq3si5wg6rSA66Co6riA65Ok66eMIOuztOydtOqyjCDtlZjquLAg7JyE7ZW07IScXHJcbiAgICAgICAgICAvLyDspJHsmpTquLDriqXsnYQg7LaU6rCA7ZW07JW87ZWgIOyLnCA8UG9zdH5+PiDsu7Ttj6zrhIztirjroZwg67CU6r+U7KSA64ukIOuovOyggFxyXG4gICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0gLz59XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICB7Lyog64yT6riAICovfVxyXG4gICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7Lyog64yT6riA7J2AIOqyjOyLnOq4gOyXkCDsooXsho3rkJjslrTsnojquLAg65WM66y47JeQIOyWtOuWpCDqsozsi5zquIDsnbjsp4Ag7KCV67O066W8IOuwm+yVhOyVvCDtlagg65Sw65287IScIHBvc3Q9e3Bvc3R9ICovfVxyXG4gICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG4gICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbmFsXCJcclxuICAgICAgICAgICAgZGF0YVNvdXJjZT17cG9zdC5Db21tZW50c31cclxuICAgICAgICAgICAgLy8gcG9zdC5jb21tZW50c+qwgCBpdGVt7Jy866GcIOuTpOyWtOqwkFxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAvPntcIiBcIn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgLy8gTGlrZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIC8vIFJldHdlZXRJZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIC8vIFJldHdlZXQ6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55KSxcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XHJcblxyXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBQcm9wVFBvc3RDYXJkeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG4vLyBpbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy8gaW1wb3J0IHsgQ2FyZCwgUG9wb3ZlciwgQnV0dG9uLCBBdmF0YXIsIExpc3QsIENvbW1lbnQgfSBmcm9tIFwiYW50ZFwiO1xyXG4vLyBpbXBvcnQge1xyXG4vLyAgIFJldHdlZXRPdXRsaW5lZCxcclxuLy8gICBIZWFydE91dGxpbmVkLFxyXG4vLyAgIE1lc3NhZ2VPdXRsaW5lZCxcclxuLy8gICBFbGxpcHNpc091dGxpbmVkLFxyXG4vLyAgIEhlYXJ0VHdvVG9uZSxcclxuLy8gfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuXHJcbi8vIGltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcclxuLy8gaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gXCIuL0NvbW1lbnRGb3JtXCI7XHJcbi8vIGltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSBcIi4vUG9zdENhcmRDb250ZW50XCI7XHJcbi8vIGltcG9ydCB7XHJcbi8vICAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbi8vICAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuLy8gICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4vLyAgIFJFVFdFRVRfUkVRVUVTVCxcclxuLy8gICBVUERBVEVfUE9TVF9SRVFVRVNULFxyXG4vLyB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbi8vIGltcG9ydCBGb2xsb3dCdXR0b24gZnJvbSBcIi4vRm9sbG93QnV0dG9uXCI7XHJcblxyXG4vLyBtb21lbnQubG9jYWxlKFwia29cIik7XHJcblxyXG4vLyBjb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4vLyAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuLy8gICBjb25zdCB7IHJlbW92ZVBvc3RMb2FkaW5nIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0KTtcclxuLy8gICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQsIHNldENvbW1lbnRGb3JtT3BlbmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuLy8gICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuLy8gICBjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbi8vICAgY29uc3Qgb25DbGlja1VwZGF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuLy8gICAgIHNldEVkaXRNb2RlKHRydWUpO1xyXG4vLyAgIH0sIFtdKTtcclxuXHJcbi8vICAgY29uc3Qgb25DYW5jZWxVcGRhdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbi8vICAgICBzZXRFZGl0TW9kZShmYWxzZSk7XHJcbi8vICAgfSwgW10pO1xyXG5cclxuLy8gICBjb25zdCBvbkNoYW5nZVBvc3QgPSB1c2VDYWxsYmFjayhcclxuLy8gICAgIGVkaXRUZXh0ID0+ICgpID0+IHtcclxuLy8gICAgICAgZGlzcGF0Y2goe1xyXG4vLyAgICAgICAgIHR5cGU6IFVQREFURV9QT1NUX1JFUVVFU1QsXHJcbi8vICAgICAgICAgZGF0YToge1xyXG4vLyAgICAgICAgICAgUG9zdElkOiBwb3N0LmlkLFxyXG4vLyAgICAgICAgICAgY29udGVudDogZWRpdFRleHQsXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9LFxyXG4vLyAgICAgW3Bvc3RdXHJcbi8vICAgKTtcclxuXHJcbi8vICAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4vLyAgICAgaWYgKCFpZCkge1xyXG4vLyAgICAgICByZXR1cm4gYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLlwiKTtcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbi8vICAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4vLyAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4vLyAgICAgfSk7XHJcbi8vICAgfSwgW2lkXSk7XHJcbi8vICAgY29uc3Qgb25Vbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbi8vICAgICBpZiAoIWlkKSB7XHJcbi8vICAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuXCIpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuLy8gICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuLy8gICAgICAgZGF0YTogcG9zdC5pZCxcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0sIFtpZF0pO1xyXG4vLyAgIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuLy8gICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKHByZXYgPT4gIXByZXYpO1xyXG4vLyAgIH0sIFtdKTtcclxuXHJcbi8vICAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4vLyAgICAgaWYgKCFpZCkge1xyXG4vLyAgICAgICByZXR1cm4gYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLlwiKTtcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbi8vICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbi8vICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbi8vICAgICB9KTtcclxuLy8gICB9LCBbaWRdKTtcclxuXHJcbi8vICAgY29uc3Qgb25SZXR3ZWV0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4vLyAgICAgaWYgKCFpZCkge1xyXG4vLyAgICAgICByZXR1cm4gYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukLlwiKTtcclxuLy8gICAgIH1cclxuLy8gICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbi8vICAgICAgIHR5cGU6IFJFVFdFRVRfUkVRVUVTVCxcclxuLy8gICAgICAgZGF0YTogcG9zdC5pZCxcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0sIFtpZF0pO1xyXG5cclxuLy8gICBjb25zdCBsaWtlZCA9IHBvc3QuTGlrZXJzLmZpbmQodiA9PiB2LmlkID09PSBpZCk7XHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cclxuLy8gICAgICAgPENhcmRcclxuLy8gICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbi8vICAgICAgICAgYWN0aW9ucz17W1xyXG4vLyAgICAgICAgICAgPFJldHdlZXRPdXRsaW5lZCBrZXk9XCJyZXR3ZWV0XCIgb25DbGljaz17b25SZXR3ZWV0fSAvPixcclxuLy8gICAgICAgICAgIGxpa2VkID8gKFxyXG4vLyAgICAgICAgICAgICA8SGVhcnRUd29Ub25lXHJcbi8vICAgICAgICAgICAgICAgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NlwiXHJcbi8vICAgICAgICAgICAgICAga2V5PVwiaGVhcnRcIlxyXG4vLyAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uVW5saWtlfVxyXG4vLyAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgKSA6IChcclxuLy8gICAgICAgICAgICAgPEhlYXJ0T3V0bGluZWQga2V5PVwiaGVhcnRcIiBvbkNsaWNrPXtvbkxpa2V9IC8+XHJcbi8vICAgICAgICAgICApLFxyXG4vLyAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuLy8gICAgICAgICAgIDxQb3BvdmVyXHJcbi8vICAgICAgICAgICAgIGtleT1cIm1vcmVcIlxyXG4vLyAgICAgICAgICAgICBjb250ZW50PXtcclxuLy8gICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4vLyAgICAgICAgICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gaWQgPyAoXHJcbi8vICAgICAgICAgICAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgeyFwb3N0LlJldHdlZXRJZCAmJiAoXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tVcGRhdGV9PuyImOyglTwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICl9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRhbmdlclwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ31cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH1cclxuLy8gICAgICAgICAgICAgICAgICAgICA+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICDsgq3soJxcclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgICAgPC8+XHJcbi8vICAgICAgICAgICAgICAgICApIDogKFxyXG4vLyAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgKX1cclxuLy8gICAgICAgICAgICAgICA8L0J1dHRvbi5Hcm91cD5cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPlxyXG4vLyAgICAgICAgICAgPC9Qb3BvdmVyPixcclxuLy8gICAgICAgICBdfVxyXG4vLyAgICAgICAgIHRpdGxlPXtcclxuLy8gICAgICAgICAgIHBvc3QuUmV0d2VldElkID8gYCR7cG9zdC5Vc2VyLm5pY2tuYW1lfeuLmOydtCDrpqztirjsnJftlZjshajsirXri4jri6QuYCA6IG51bGxcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgZXh0cmE9e2lkICYmIDxGb2xsb3dCdXR0b24gcG9zdD17cG9zdH0gLz59XHJcbi8vICAgICAgID5cclxuLy8gICAgICAgICB7cG9zdC5SZXR3ZWV0SWQgJiYgcG9zdC5SZXR3ZWV0ID8gKFxyXG4vLyAgICAgICAgICAgPENhcmRcclxuLy8gICAgICAgICAgICAgY292ZXI9e1xyXG4vLyAgICAgICAgICAgICAgIHBvc3QuUmV0d2VldC5JbWFnZXNbMF0gJiYgKFxyXG4vLyAgICAgICAgICAgICAgICAgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LlJldHdlZXQuSW1hZ2VzfSAvPlxyXG4vLyAgICAgICAgICAgICAgIClcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIgfX0+XHJcbi8vICAgICAgICAgICAgICAge21vbWVudChwb3N0LmNyZWF0ZWRBdCkuZm9ybWF0KFwiWVlZWS5NTS5ERFwiKX1cclxuLy8gICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuLy8gICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4vLyAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC91c2VyLyR7cG9zdC5SZXR3ZWV0LlVzZXIuaWR9YH0gcHJlZmV0Y2g9e2ZhbHNlfT5cclxuLy8gICAgICAgICAgICAgICAgICAgPGE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPEF2YXRhcj57cG9zdC5SZXR3ZWV0LlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+XHJcbi8vICAgICAgICAgICAgICAgICAgIDwvYT5cclxuLy8gICAgICAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuUmV0d2VldC5Vc2VyLm5pY2tuYW1lfVxyXG4vLyAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcclxuLy8gICAgICAgICAgICAgICAgIDxQb3N0Q2FyZENvbnRlbnRcclxuLy8gICAgICAgICAgICAgICAgICAgcG9zdERhdGE9e3Bvc3QuUmV0d2VldC5jb250ZW50fVxyXG4vLyAgICAgICAgICAgICAgICAgICBvbkNoYW5nZVBvc3Q9e29uQ2hhbmdlUG9zdH1cclxuLy8gICAgICAgICAgICAgICAgICAgb25DYW5jZWxVcGRhdGU9e29uQ2FuY2VsVXBkYXRlfVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICA8L0NhcmQ+XHJcbi8vICAgICAgICAgKSA6IChcclxuLy8gICAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fT5cclxuLy8gICAgICAgICAgICAgICB7bW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoXCJZWVlZLk1NLkREXCIpfVxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPENhcmQuTWV0YVxyXG4vLyAgICAgICAgICAgICAgIGF2YXRhcj17XHJcbi8vICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHtwb3N0LlVzZXIuaWR9YH0gcHJlZmV0Y2g9e2ZhbHNlfT5cclxuLy8gICAgICAgICAgICAgICAgICAgPGE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgIHRpdGxlPXtwb3N0LlVzZXIubmlja25hbWV9XHJcbi8vICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1xyXG4vLyAgICAgICAgICAgICAgICAgPFBvc3RDYXJkQ29udGVudFxyXG4vLyAgICAgICAgICAgICAgICAgICBlZGl0TW9kZT17ZWRpdE1vZGV9XHJcbi8vICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlUG9zdD17b25DaGFuZ2VQb3N0fVxyXG4vLyAgICAgICAgICAgICAgICAgICBvbkNhbmNlbFVwZGF0ZT17b25DYW5jZWxVcGRhdGV9XHJcbi8vICAgICAgICAgICAgICAgICAgIHBvc3REYXRhPXtwb3N0LmNvbnRlbnR9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgIDwvPlxyXG4vLyAgICAgICAgICl9XHJcbi8vICAgICAgIDwvQ2FyZD5cclxuLy8gICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuLy8gICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9IC8+XHJcbi8vICAgICAgICAgICA8TGlzdFxyXG4vLyAgICAgICAgICAgICBoZWFkZXI9e2Ake3Bvc3QuQ29tbWVudHMubGVuZ3RofeqwnOydmCDrjJPquIBgfVxyXG4vLyAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbi8vICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Bvc3QuQ29tbWVudHN9XHJcbi8vICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4vLyAgICAgICAgICAgICAgIDxsaT5cclxuLy8gICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbi8vICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aXRlbS5Vc2VyLm5pY2tuYW1lfVxyXG4vLyAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdXNlci8ke2l0ZW0uVXNlci5pZH1gfSBwcmVmZXRjaD17ZmFsc2V9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgY29udGVudD17aXRlbS5jb250ZW50fVxyXG4vLyAgICAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgICAgICApfVxyXG4vLyAgICAgICAgICAgLz5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgKX1cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBQb3N0Q2FyZC5wcm9wVHlwZXMgPSB7XHJcbi8vICAgcG9zdDogUHJvcFR5cGVzLnNoYXBlKHtcclxuLy8gICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4vLyAgICAgVXNlcjogUHJvcFR5cGVzLm9iamVjdCxcclxuLy8gICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbi8vICAgICBjcmVhdGVkQXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbi8vICAgICBDb21tZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbi8vICAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4vLyAgICAgTGlrZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuLy8gICAgIFJldHdlZXRJZDogUHJvcFR5cGVzLm51bWJlcixcclxuLy8gICAgIFJldHdlZXQ6IFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMuYW55KSxcclxuLy8gICB9KS5pc1JlcXVpcmVkLFxyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=