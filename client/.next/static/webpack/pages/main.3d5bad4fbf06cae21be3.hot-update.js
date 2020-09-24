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
      lineNumber: 56,
      columnNumber: 5
    }
  }, me && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 14
    }
  }), mainPosts.map(function (c) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: c.id,
      post: c,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi5qcyJdLCJuYW1lcyI6WyJtYWluIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJvblNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImRhdGEiLCJsZW5ndGgiLCJpZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUm91dGVyIiwicHVzaCIsIm1hcCIsImMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGlCLHFCQUVGQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBRlQ7QUFBQSxNQUVUQyxFQUZTLGdCQUVUQSxFQUZTOztBQUFBLHNCQUdxQ0gsK0RBQVcsQ0FDL0QsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0csSUFBVjtBQUFBLEdBRDBELENBSGhEO0FBQUEsTUFHVEMsU0FIUyxpQkFHVEEsU0FIUztBQUFBLE1BR0VDLFlBSEYsaUJBR0VBLFlBSEY7QUFBQSxNQUdnQkMsZ0JBSGhCLGlCQUdnQkEsZ0JBSGhCLEVBTWpCOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RWLFlBQVEsQ0FBQztBQUNQVyxVQUFJLEVBQUVDLGlFQUFrQkE7QUFEakIsS0FBRCxDQUFSO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVCxDQVBpQixDQVlqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBRix5REFBUyxDQUFDLFlBQU07QUFDZCxhQUFTRyxRQUFULEdBQW9CO0FBQ2xCLFVBQ0VDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUExQyxHQUNBRixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQXpCLEdBQXdDLEdBRjFDLEVBR0U7QUFDQSxZQUFJWCxZQUFZLElBQUksQ0FBQ0MsZ0JBQXJCLEVBQXVDO0FBQ3JDVCxrQkFBUSxDQUFDO0FBQ1BXLGdCQUFJLEVBQUVDLGlFQURDO0FBRVBRLGdCQUFJLEVBQUViLFNBQVMsQ0FBQ0EsU0FBUyxDQUFDYyxNQUFWLEdBQW1CLENBQXBCLENBQVQsQ0FBZ0NDO0FBRi9CLFdBQUQsQ0FBUjtBQUlEO0FBQ0Y7QUFDRjs7QUFDRFIsVUFBTSxDQUFDUyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1YsUUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWEMsWUFBTSxDQUFDVSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1gsUUFBckM7QUFDRCxLQUZEO0FBR0QsR0FsQlEsRUFrQk4sQ0FBQ04sU0FBRCxFQUFZQyxZQUFaLEVBQTBCQyxnQkFBMUIsQ0FsQk0sQ0FBVCxDQWpCaUIsQ0FxQ2pCOztBQUNBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLEVBQUVMLEVBQUUsSUFBSUEsRUFBRSxDQUFDaUIsRUFBWCxDQUFKLEVBQW9CO0FBQ2xCRyx3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNyQixFQUFFLElBQUlBLEVBQUUsQ0FBQ2lCLEVBQVYsQ0FKTSxDQUFUOztBQUtBLE1BQUksQ0FBQ2pCLEVBQUwsRUFBUztBQUNQLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUdBLEVBQUUsSUFBSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKVCxFQUtHRSxTQUFTLENBQUNvQixHQUFWLENBQWMsVUFBQUMsQ0FBQztBQUFBLFdBQ2QsTUFBQyw0REFBRDtBQUFVLFNBQUcsRUFBRUEsQ0FBQyxDQUFDTixFQUFqQjtBQUFxQixVQUFJLEVBQUVNLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEYztBQUFBLEdBQWYsQ0FMSCxDQURGO0FBV0QsQ0F6REQ7O0dBQU03QixJO1VBQ2FFLHVELEVBQ0ZDLHVELEVBQ3VDQSx1RDs7O0FBd0R6Q0gsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbWFpbi4zZDViYWQ0ZmJmMDZjYWUyMWJlMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpbkxheW91dFwiO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEZvcm1cIjtcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XHJcbmltcG9ydCB7IExPQURfUE9TVFNfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcblxyXG5jb25zdCBtYWluID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nIH0gPSB1c2VTZWxlY3RvcihcclxuICAgIHN0YXRlID0+IHN0YXRlLnBvc3RcclxuICApO1xyXG4gIC8vIOydvOuLqCDsspjsnYwgMTDqsJwg67O064K06riwXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIC8vIOyKpO2BrOuhpCDrp6gg7JWE656Y66GcIOuCtOumrOuptCBwb3N0IDEw6rCc7JSpIOuNlCDrtojrn6zsmKTquLBcclxuICAvLyAoMSkgd2luZG93LnNjcm9sbFk6IO2YhOyerCDsspjsnYzrtoDthLAg66eo7JWE656Y6rmM7KeA7J2YIOq4uOydtCjsiqTtgazroaTslYjrgrTrprTrlYw6IDApXHJcbiAgLy8gKDIpIGNsaWVudEhlaWdodDog7ZmU66m07JeQIOuztOydtOuKlCDssL0g64aS7J20KOqzoOyglSlcclxuICAvLyAoMykgc2Nyb2xsSGVpZ2h0OiDsoJzsnbwg7JyE67aA7YSwIOyVhOuemOq5jOyngCDqs6DsoJXrkJwg7LSd6ri47J20KOyKpO2BrOuhpOq5jOyngClcclxuICAvLyAoMSkgKyAoMikgPSAoMylcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPlxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKGhhc01vcmVQb3N0cyAmJiAhbG9hZFBvc3RzTG9hZGluZykge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0uaWQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW21haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nXSk7XHJcblxyXG4gIC8vIOunjOyVvSDroZzqt7jslYTsm4Psi5wg66mU7J247ZmU66m07Jy866GcIOydtOuPmVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIShtZSAmJiBtZS5pZCkpIHtcclxuICAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFttZSAmJiBtZS5pZF0pO1xyXG4gIGlmICghbWUpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPE1haW5MYXlvdXQ+XHJcbiAgICAgIHsvKiDsobDqsbTrtoAg7ZmU66m0IOuztOyXrOyjvOq4sCAqL31cclxuICAgICAgey8qIGFudGkgcGF0dGVybjoga2V57JeQIGluZGV466GcIOu2gOyXrO2VmOyngCDrp5DquLAhICovfVxyXG4gICAgICB7Lyog6rKM7Iuc6riA7J20IOyngOybjOyniCDqsIDriqXshLHsnbQg7J6I64qUIOqyveyasCwg7Iic7ISc67CU64CM6rGw64KYIOuTsSDsoIjrjIAgaW5kZXgg67aA7JesIFggKi99XHJcbiAgICAgIHttZSAmJiA8UG9zdEZvcm0gLz59XHJcbiAgICAgIHttYWluUG9zdHMubWFwKGMgPT4gKFxyXG4gICAgICAgIDxQb3N0Q2FyZCBrZXk9e2MuaWR9IHBvc3Q9e2N9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9NYWluTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9