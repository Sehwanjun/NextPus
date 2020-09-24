webpackHotUpdate_N_E("pages/main",{

/***/ "./pages/main.js":
/*!***********************!*\
  !*** ./pages/main.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MainLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainLayout */ "./components/MainLayout.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\arthu\\Documents\\nextpus_2020\\client\\pages\\main.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var main = function main() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePost = _useSelector2.hasMorePost; // 일단 처음 10개 보내기


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"]
    });
  }, []); // 스크롤 맨 아래로 내리면 post 10개씩 더 불러오기
  // (1) window.scrollY: 현재 처음부터 맨아래까지의 길이(스크롤안내릴때: 0)
  // (2) clientHeight: 화면에 보이는 창 높이(고정)
  // (3) scrollHeight: 제일 위부터 아래까지 고정된 총길이(스크롤까지)
  // (1) + (2) = (3)

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePost) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"]
          });
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, [hasMorePost]); // 만약 로그아웃시 메인화면으로 이동

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
    }
  }, [me && me.id]);

  if (!me) {
    return null;
  }

  return __jsx(_components_MainLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, me && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 14
    }
  }), mainPosts.map(function (post) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    });
  }));
};

_s(main, "wBkaY2l1FGWxn2EdzMl8mD81BWc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

/* harmony default export */ __webpack_exports__["default"] = (main);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi5qcyJdLCJuYW1lcyI6WyJtYWluIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImlkIiwiUm91dGVyIiwicHVzaCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEaUIscUJBRUZDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBVjtBQUFBLEdBQU4sQ0FGVDtBQUFBLE1BRVRDLEVBRlMsZ0JBRVRBLEVBRlM7O0FBQUEsc0JBR2tCSCwrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNHLElBQVY7QUFBQSxHQUFOLENBSDdCO0FBQUEsTUFHVEMsU0FIUyxpQkFHVEEsU0FIUztBQUFBLE1BR0VDLFdBSEYsaUJBR0VBLFdBSEYsRUFJakI7OztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZFQsWUFBUSxDQUFDO0FBQ1BVLFVBQUksRUFBRUMsaUVBQWtCQTtBQURqQixLQUFELENBQVI7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFULENBTGlCLENBVWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FGLHlEQUFTLENBQUMsWUFBTTtBQUNkLGFBQVNHLFFBQVQsR0FBb0I7QUFDbEIsVUFDRUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQTFDLEdBQ0FGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBekIsR0FBd0MsR0FGMUMsRUFHRTtBQUNBLFlBQUlWLFdBQUosRUFBaUI7QUFDZlIsa0JBQVEsQ0FBQztBQUNQVSxnQkFBSSxFQUFFQyxpRUFBa0JBO0FBRGpCLFdBQUQsQ0FBUjtBQUdEO0FBQ0Y7QUFDRjs7QUFDREUsVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1AsUUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWEMsWUFBTSxDQUFDTyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1IsUUFBckM7QUFDRCxLQUZEO0FBR0QsR0FqQlEsRUFpQk4sQ0FBQ0osV0FBRCxDQWpCTSxDQUFULENBZmlCLENBa0NqQjs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxFQUFFSixFQUFFLElBQUlBLEVBQUUsQ0FBQ2dCLEVBQVgsQ0FBSixFQUFvQjtBQUNsQkMsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDbEIsRUFBRSxJQUFJQSxFQUFFLENBQUNnQixFQUFWLENBSk0sQ0FBVDs7QUFLQSxNQUFJLENBQUNoQixFQUFMLEVBQVM7QUFDUCxXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHQSxFQUFFLElBQUksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSlQsRUFLR0UsU0FBUyxDQUFDaUIsR0FBVixDQUFjLFVBQUFsQixJQUFJO0FBQUEsV0FDakIsTUFBQyw0REFBRDtBQUFVLFNBQUcsRUFBRUEsSUFBSSxDQUFDZSxFQUFwQjtBQUF3QixVQUFJLEVBQUVmLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEaUI7QUFBQSxHQUFsQixDQUxILENBREY7QUFXRCxDQXRERDs7R0FBTVAsSTtVQUNhRSx1RCxFQUNGQyx1RCxFQUNvQkEsdUQ7OztBQXFEdEJILG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21haW4uOTRkYWM3ZjNkNDIyNWI0MDcyNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL01haW5MYXlvdXRcIjtcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5cclxuY29uc3QgbWFpbiA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0IH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0KTtcclxuICAvLyDsnbzri6gg7LKY7J2MIDEw6rCcIOuztOuCtOq4sFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICAvLyDsiqTtgazroaQg66eoIOyVhOuemOuhnCDrgrTrpqzrqbQgcG9zdCAxMOqwnOyUqSDrjZQg67aI65+s7Jik6riwXHJcbiAgLy8gKDEpIHdpbmRvdy5zY3JvbGxZOiDtmITsnqwg7LKY7J2M67aA7YSwIOunqOyVhOuemOq5jOyngOydmCDquLjsnbQo7Iqk7YGs66Gk7JWI64K066a065WMOiAwKVxyXG4gIC8vICgyKSBjbGllbnRIZWlnaHQ6IO2ZlOuptOyXkCDrs7TsnbTripQg7LC9IOuGkuydtCjqs6DsoJUpXHJcbiAgLy8gKDMpIHNjcm9sbEhlaWdodDog7KCc7J28IOychOu2gO2EsCDslYTrnpjquYzsp4Ag6rOg7KCV65CcIOy0neq4uOydtCjsiqTtgazroaTquYzsp4ApXHJcbiAgLy8gKDEpICsgKDIpID0gKDMpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgd2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID5cclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChoYXNNb3JlUG9zdCkge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW2hhc01vcmVQb3N0XSk7XHJcblxyXG4gIC8vIOunjOyVvSDroZzqt7jslYTsm4Psi5wg66mU7J247ZmU66m07Jy866GcIOydtOuPmVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIShtZSAmJiBtZS5pZCkpIHtcclxuICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFttZSAmJiBtZS5pZF0pO1xyXG4gIGlmICghbWUpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgIHsvKiDsobDqsbTrtoAg7ZmU66m0IOuztOyXrOyjvOq4sCAqL31cclxuICAgICAgey8qIGFudGkgcGF0dGVybjoga2V57JeQIGluZGV466GcIOu2gOyXrO2VmOyngCDrp5DquLAhICovfVxyXG4gICAgICB7Lyog6rKM7Iuc6riA7J20IOyngOybjOyniCDqsIDriqXshLHsnbQg7J6I64qUIOqyveyasCwg7Iic7ISc67CU64CM6rGw64KYIOuTsSDsoIjrjIAgaW5kZXgg67aA7JesIFggKi99XHJcbiAgICAgIHttZSAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgIHttYWluUG9zdHMubWFwKHBvc3QgPT4gKFxyXG4gICAgICAgIDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9NYWluTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9