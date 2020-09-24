webpackHotUpdate_N_E("pages/main",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\arthu\\Documents\\nextpus_2020\\client\\components\\FollowButton.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // FollowButton 클릭시: userprofile의 follow counting, 언팔로우버튼으로 변경, profile에 추가

var FollowButton = function FollowButton(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me; // isFollowing = me : 내가 팔로잉한사람들중에 게시글작성자 아이디가 팔로잉 목록에 있다면
  // 그 사람 아이디만 보내주면 됨(data:post.User.id)


  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {
    return v.id === post.User.id;
  });
  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]);
  return (// loading={followLoading || unfollowLoading}
    __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: onClickButton,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 5
      }
    }, isFollowing ? "언팔로우" : "팔로우")
  );
};

_s(FollowButton, "CBtrG2PoEpSuXRh30Mg4VzRGCIQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = FollowButton;
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIlVzZXIiLCJvbkNsaWNrQnV0dG9uIiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsImRhdGEiLCJGT0xMT1dfUkVRVUVTVCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2pDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGlDLHFCQUVsQkMsK0RBQVcsQ0FDeEIsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBVjtBQUFBLEdBRG1CLENBRk87QUFBQSxNQUV6QkMsRUFGeUIsZ0JBRXpCQSxFQUZ5QixFQUtqQztBQUNBOzs7QUFDQSxNQUFNQyxXQUFXLEdBQUdELEVBQUgsYUFBR0EsRUFBSCx1QkFBR0EsRUFBRSxDQUFFRSxVQUFKLENBQWVDLElBQWYsQ0FBb0IsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTWCxJQUFJLENBQUNZLElBQUwsQ0FBVUQsRUFBdkI7QUFBQSxHQUFyQixDQUFwQjtBQUNBLE1BQU1FLGFBQWEsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3RDLFFBQUlQLFdBQUosRUFBaUI7QUFDZk4sY0FBUSxDQUFDO0FBQ1BjLFlBQUksRUFBRUMsK0RBREM7QUFFUEMsWUFBSSxFQUFFakIsSUFBSSxDQUFDWSxJQUFMLENBQVVEO0FBRlQsT0FBRCxDQUFSO0FBSUQsS0FMRCxNQUtPO0FBQ0xWLGNBQVEsQ0FBQztBQUNQYyxZQUFJLEVBQUVHLDZEQURDO0FBRVBELFlBQUksRUFBRWpCLElBQUksQ0FBQ1ksSUFBTCxDQUFVRDtBQUZULE9BQUQsQ0FBUjtBQUlEO0FBQ0YsR0FaZ0MsRUFZOUIsQ0FBQ0osV0FBRCxDQVo4QixDQUFqQztBQWNBLFNBQ0U7QUFDQSxVQUFDLDJDQUFEO0FBQVEsYUFBTyxFQUFFTSxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dOLFdBQVcsR0FBRyxNQUFILEdBQVksS0FEMUI7QUFGRjtBQU1ELENBNUJEOztHQUFNUixZO1VBQ2FHLHVELEVBQ0ZDLHVEOzs7S0FGWEosWTtBQThCTkEsWUFBWSxDQUFDb0IsU0FBYixHQUF5QjtBQUN2Qm5CLE1BQUksRUFBRW9CLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREEsQ0FBekI7QUFJZXZCLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW4uZmU3OTViNzhhMjA4Y2UwYWNmNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBGT0xMT1dfUkVRVUVTVCwgVU5GT0xMT1dfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG4vLyBGb2xsb3dCdXR0b24g7YG066at7IucOiB1c2VycHJvZmlsZeydmCBmb2xsb3cgY291bnRpbmcsIOyWuO2MlOuhnOyasOuyhO2KvOycvOuhnCDrs4Dqsr0sIHByb2ZpbGXsl5Ag7LaU6rCAXHJcbmNvbnN0IEZvbGxvd0J1dHRvbiA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIHN0YXRlID0+IHN0YXRlLnVzZXJcclxuICApO1xyXG4gIC8vIGlzRm9sbG93aW5nID0gbWUgOiDrgrTqsIAg7YyU66Gc7J6J7ZWc7IKs656M65Ok7KSR7JeQIOqyjOyLnOq4gOyekeyEseyekCDslYTsnbTrlJTqsIAg7YyU66Gc7J6JIOuqqeuhneyXkCDsnojri6TrqbRcclxuICAvLyDqt7gg7IKs656MIOyVhOydtOuUlOunjCDrs7TrgrTso7zrqbQg65CoKGRhdGE6cG9zdC5Vc2VyLmlkKVxyXG4gIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCh2ID0+IHYuaWQgPT09IHBvc3QuVXNlci5pZCk7XHJcbiAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChpc0ZvbGxvd2luZykge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiBwb3N0LlVzZXIuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEZPTExPV19SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW2lzRm9sbG93aW5nXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyBsb2FkaW5nPXtmb2xsb3dMb2FkaW5nIHx8IHVuZm9sbG93TG9hZGluZ31cclxuICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja0J1dHRvbn0+XHJcbiAgICAgIHtpc0ZvbGxvd2luZyA/IFwi7Ja47YyU66Gc7JqwXCIgOiBcIu2MlOuhnOyasFwifVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbkZvbGxvd0J1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93QnV0dG9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9