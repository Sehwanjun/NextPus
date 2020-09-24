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

  // post 불러오기
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"]
    });
  }, []); // (1) window.scrollY: 현재 처음부터 맨아래까지의 길이
  // (2) clientHeight: 화면에 보이는 창 높이
  // (3) scrollHeight: 제일 위부터 아래까지 고정된 총길이(스크롤까지)
  // (1) + (2) = (3)

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
    }

    window.addEventListener("scroll", onScroll);
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me; // 만약 로그아웃시 메인화면으로 이동


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (me && me.id) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/");
    }
  }, [me && me.id]);

  if (!me) {
    return null;
  }

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts;

  return __jsx(_components_MainLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }, me && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 14
    }
  }), mainPosts.map(function (post) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    });
  }));
};

_s(main, "EKRyAvFUS3Z+tQDB1pnqG7b3Kyc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi5qcyJdLCJuYW1lcyI6WyJtYWluIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJvblNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJpZCIsIlJvdXRlciIsInB1c2giLCJwb3N0IiwibWFpblBvc3RzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RGLFlBQVEsQ0FBQztBQUNQRyxVQUFJLEVBQUVDLGlFQUFrQkE7QUFEakIsS0FBRCxDQUFSO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVCxDQUhpQixDQVNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFDQUYseURBQVMsQ0FBQyxZQUFNO0FBQ2QsYUFBU0csUUFBVCxHQUFvQjtBQUNsQkMsYUFBTyxDQUFDQyxHQUFSLENBQ0VDLE1BQU0sQ0FBQ0MsT0FEVCxFQUVFQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBRjNCLEVBR0VGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFIM0I7QUFLRDs7QUFDREwsVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1QsUUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWEcsWUFBTSxDQUFDTyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1YsUUFBckM7QUFDRCxLQUZEO0FBR0QsR0FaUSxDQUFUOztBQWJpQixxQkEyQkZXLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBVjtBQUFBLEdBQU4sQ0EzQlQ7QUFBQSxNQTJCVEMsRUEzQlMsZ0JBMkJUQSxFQTNCUyxFQTRCakI7OztBQUNBakIseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSWlCLEVBQUUsSUFBSUEsRUFBRSxDQUFDQyxFQUFiLEVBQWlCO0FBQ2ZDLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0gsRUFBRSxJQUFJQSxFQUFFLENBQUNDLEVBQVYsQ0FKTSxDQUFUOztBQUtBLE1BQUksQ0FBQ0QsRUFBTCxFQUFTO0FBQ1AsV0FBTyxJQUFQO0FBQ0Q7O0FBcENnQixzQkFxQ0tILCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ00sSUFBVjtBQUFBLEdBQU4sQ0FyQ2hCO0FBQUEsTUFxQ1RDLFNBckNTLGlCQXFDVEEsU0FyQ1M7O0FBc0NqQixTQUNFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHTCxFQUFFLElBQUksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSlQsRUFLR0ssU0FBUyxDQUFDQyxHQUFWLENBQWMsVUFBQUYsSUFBSTtBQUFBLFdBQ2pCLE1BQUMsNERBQUQ7QUFBVSxTQUFHLEVBQUVBLElBQUksQ0FBQ0gsRUFBcEI7QUFBd0IsVUFBSSxFQUFFRyxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGlCO0FBQUEsR0FBbEIsQ0FMSCxDQURGO0FBV0QsQ0FqREQ7O0dBQU14QixJO1VBRWFFLHVELEVBeUJGZSx1RCxFQVVPQSx1RDs7O0FBY1RqQixtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLjM3ZDQwMDg1NDRhOTU5YzY3Y2RiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IG1haW4gPSAoKSA9PiB7XHJcbiAgLy8gcG9zdCDrtojrn6zsmKTquLBcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyAoMSkgd2luZG93LnNjcm9sbFk6IO2YhOyerCDsspjsnYzrtoDthLAg66eo7JWE656Y6rmM7KeA7J2YIOq4uOydtFxyXG4gIC8vICgyKSBjbGllbnRIZWlnaHQ6IO2ZlOuptOyXkCDrs7TsnbTripQg7LC9IOuGkuydtFxyXG4gIC8vICgzKSBzY3JvbGxIZWlnaHQ6IOygnOydvCDsnITrtoDthLAg7JWE656Y6rmM7KeAIOqzoOygleuQnCDstJ3quLjsnbQo7Iqk7YGs66Gk6rmM7KeAKVxyXG4gIC8vICgxKSArICgyKSA9ICgzKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgd2luZG93LnNjcm9sbFksXHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCxcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKTtcclxuICAvLyDrp4zslb0g66Gc6re47JWE7JuD7IucIOuplOyduO2ZlOuptOycvOuhnCDsnbTrj5lcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKG1lICYmIG1lLmlkKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbbWUgJiYgbWUuaWRdKTtcclxuICBpZiAoIW1lKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgY29uc3QgeyBtYWluUG9zdHMgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkxheW91dD5cclxuICAgICAgey8qIOyhsOqxtOu2gCDtmZTrqbQg67O07Jes7KO86riwICovfVxyXG4gICAgICB7LyogYW50aSBwYXR0ZXJuOiBrZXnsl5AgaW5kZXjroZwg67aA7Jes7ZWY7KeAIOunkOq4sCEgKi99XHJcbiAgICAgIHsvKiDqsozsi5zquIDsnbQg7KeA7JuM7KeIIOqwgOuKpeyEseydtCDsnojripQg6rK97JqwLCDsiJzshJzrsJTrgIzqsbDrgpgg65OxIOygiOuMgCBpbmRleCDrtoDsl6wgWCAqL31cclxuICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAge21haW5Qb3N0cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L01haW5MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=