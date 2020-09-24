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
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostsLoading = _useSelector2.loadPostsLoading; // 일단 처음 10개 보내기


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"]
    });
  }, []); // 스크롤 맨 아래로 내리면 post 10개씩 더 불러오기
  // (1) window.scrollY: 현재 처음부터 맨아래까지의 길이(스크롤안내릴때: 0)
  // (2) clientHeight: 화면에 보이는 창 높이(고정)
  // (3) scrollHeight: 제일 위부터 아래까지 고정된 총길이(스크롤까지)
  // (1) + (2) = (3)
  // 차후, 무한스크롤링 방지를 위해 (메모리 )

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"],
            data: mainPosts[mainPosts.length - 1].id
          });
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostsLoading]); // 만약 로그아웃시 메인화면으로 이동

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
      lineNumber: 57,
      columnNumber: 5
    }
  }, me && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 14
    }
  }), mainPosts.map(function (c) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: c.id,
      post: c,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    });
  }));
};

_s(main, "1e/V/SJ6W0cMJgYyESglft0JniM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi5qcyJdLCJuYW1lcyI6WyJtYWluIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJvblNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImRhdGEiLCJsZW5ndGgiLCJpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUm91dGVyIiwicHVzaCIsIm1hcCIsImMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGlCLHFCQUVGQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBRlQ7QUFBQSxNQUVUQyxFQUZTLGdCQUVUQSxFQUZTOztBQUFBLHNCQUdxQ0gsK0RBQVcsQ0FDL0QsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csSUFBVjtBQUFBLEdBRDBELENBSGhEO0FBQUEsTUFHVEMsU0FIUyxpQkFHVEEsU0FIUztBQUFBLE1BR0VDLFlBSEYsaUJBR0VBLFlBSEY7QUFBQSxNQUdnQkMsZ0JBSGhCLGlCQUdnQkEsZ0JBSGhCLEVBTWpCOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RWLFlBQVEsQ0FBQztBQUNQVyxVQUFJLEVBQUVDLGlFQUFrQkE7QUFEakIsS0FBRCxDQUFSO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVCxDQVBpQixDQVlqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FGLHlEQUFTLENBQUMsWUFBTTtBQUNkLGFBQVNHLFFBQVQsR0FBb0I7QUFDbEIsVUFDRUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQTFDLEdBQ0FGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBekIsR0FBd0MsR0FGMUMsRUFHRTtBQUNBLFlBQUlYLFlBQVksSUFBSSxDQUFDQyxnQkFBckIsRUFBdUM7QUFDckNULGtCQUFRLENBQUM7QUFDUFcsZ0JBQUksRUFBRUMsaUVBREM7QUFFUFEsZ0JBQUksRUFBRWIsU0FBUyxDQUFDQSxTQUFTLENBQUNjLE1BQVYsR0FBbUIsQ0FBcEIsQ0FBVCxDQUFnQ0M7QUFGL0IsV0FBRCxDQUFSO0FBSUQ7QUFDRjtBQUNGOztBQUNEUixVQUFNLENBQUNTLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDVixRQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNYQyxZQUFNLENBQUNVLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDWCxRQUFyQztBQUNELEtBRkQ7QUFHRCxHQWxCUSxFQWtCTixDQUFDTixTQUFELEVBQVlDLFlBQVosRUFBMEJDLGdCQUExQixDQWxCTSxDQUFULENBbEJpQixDQXNDakI7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksRUFBRUwsRUFBRSxJQUFJQSxFQUFFLENBQUNpQixFQUFYLENBQUosRUFBb0I7QUFDbEJHLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ3JCLEVBQUUsSUFBSUEsRUFBRSxDQUFDaUIsRUFBVixDQUpNLENBQVQ7O0FBS0EsTUFBSSxDQUFDakIsRUFBTCxFQUFTO0FBQ1AsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsU0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJR0EsRUFBRSxJQUFJLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpULEVBS0dFLFNBQVMsQ0FBQ29CLEdBQVYsQ0FBYyxVQUFBQyxDQUFDO0FBQUEsV0FDZCxNQUFDLDREQUFEO0FBQVUsU0FBRyxFQUFFQSxDQUFDLENBQUNOLEVBQWpCO0FBQXFCLFVBQUksRUFBRU0sQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURjO0FBQUEsR0FBZixDQUxILENBREY7QUFXRCxDQTFERDs7R0FBTTdCLEk7VUFDYUUsdUQsRUFDRkMsdUQsRUFDdUNBLHVEOzs7QUF5RHpDSCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLjRiNjIzNmE5ZGY2YWY5MDY4ZjIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IG1haW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgc3RhdGUgPT4gc3RhdGUucG9zdFxyXG4gICk7XHJcbiAgLy8g7J2864uoIOyymOydjCAxMOqwnCDrs7TrgrTquLBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgLy8g7Iqk7YGs66GkIOunqCDslYTrnpjroZwg64K066as66m0IHBvc3QgMTDqsJzslKkg642UIOu2iOufrOyYpOq4sFxyXG4gIC8vICgxKSB3aW5kb3cuc2Nyb2xsWTog7ZiE7J6sIOyymOydjOu2gO2EsCDrp6jslYTrnpjquYzsp4DsnZgg6ri47J20KOyKpO2BrOuhpOyViOuCtOumtOuVjDogMClcclxuICAvLyAoMikgY2xpZW50SGVpZ2h0OiDtmZTrqbTsl5Ag67O07J2064qUIOywvSDrhpLsnbQo6rOg7KCVKVxyXG4gIC8vICgzKSBzY3JvbGxIZWlnaHQ6IOygnOydvCDsnITrtoDthLAg7JWE656Y6rmM7KeAIOqzoOygleuQnCDstJ3quLjsnbQo7Iqk7YGs66Gk6rmM7KeAKVxyXG4gIC8vICgxKSArICgyKSA9ICgzKVxyXG4gIC8vIOywqO2bhCwg66y07ZWc7Iqk7YGs66Gk66eBIOuwqeyngOulvCDsnITtlbQgKOuplOuqqOumrCApXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgd2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ID5cclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdLmlkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFttYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZ10pO1xyXG5cclxuICAvLyDrp4zslb0g66Gc6re47JWE7JuD7IucIOuplOyduO2ZlOuptOycvOuhnCDsnbTrj5lcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCEobWUgJiYgbWUuaWQpKSB7XHJcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgIH1cclxuICB9LCBbbWUgJiYgbWUuaWRdKTtcclxuICBpZiAoIW1lKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICB7Lyog7KGw6rG067aAIO2ZlOuptCDrs7Tsl6zso7zquLAgKi99XHJcbiAgICAgIHsvKiBhbnRpIHBhdHRlcm46IGtleeyXkCBpbmRleOuhnCDrtoDsl6ztlZjsp4Ag66eQ6riwISAqL31cclxuICAgICAgey8qIOqyjOyLnOq4gOydtCDsp4Dsm4zsp4gg6rCA64ql7ISx7J20IOyeiOuKlCDqsr3smrAsIOyInOyEnOuwlOuAjOqxsOuCmCDrk7Eg7KCI64yAIGluZGV4IOu2gOyXrCBYICovfVxyXG4gICAgICB7bWUgJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICB7bWFpblBvc3RzLm1hcChjID0+IChcclxuICAgICAgICA8UG9zdENhcmQga2V5PXtjLmlkfSBwb3N0PXtjfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvTWFpbkxheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==