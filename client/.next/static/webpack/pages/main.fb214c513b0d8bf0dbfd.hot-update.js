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
      hasMorePost = _useSelector2.hasMorePost; // 스크롤 맨 아래로 내리면 post 10개씩 더 불러오기


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"]
    });
  }, []); // (1) window.scrollY: 현재 처음부터 맨아래까지의 길이
  // (2) clientHeight: 화면에 보이는 창 높이(고정)
  // (3) scrollHeight: 제일 위부터 아래까지 고정된 총길이(스크롤까지)
  // (1) + (2) = (3)

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);

      if (window.scrollY + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
        dispatch({
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"]
        });
      }
    }

    window.addEventListener("scroll", onScroll);
    return function () {
      window.removeEventListener("scroll", onScroll);
    };
  }); // 만약 로그아웃시 메인화면으로 이동

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (me && me.id) {
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
      lineNumber: 55,
      columnNumber: 5
    }
  }, me && __jsx(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 14
    }
  }), mainPosts.map(function (post) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpbi5qcyJdLCJuYW1lcyI6WyJtYWluIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3QiLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwib25TY3JvbGwiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwic2Nyb2xsWSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpZCIsIlJvdXRlciIsInB1c2giLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGlCLHFCQUVGQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBRlQ7QUFBQSxNQUVUQyxFQUZTLGdCQUVUQSxFQUZTOztBQUFBLHNCQUdrQkgsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDRyxJQUFWO0FBQUEsR0FBTixDQUg3QjtBQUFBLE1BR1RDLFNBSFMsaUJBR1RBLFNBSFM7QUFBQSxNQUdFQyxXQUhGLGlCQUdFQSxXQUhGLEVBSWpCOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RULFlBQVEsQ0FBQztBQUNQVSxVQUFJLEVBQUVDLGlFQUFrQkE7QUFEakIsS0FBRCxDQUFSO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVCxDQUxpQixDQVVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFDQUYseURBQVMsQ0FBQyxZQUFNO0FBQ2QsYUFBU0csUUFBVCxHQUFvQjtBQUNsQkMsYUFBTyxDQUFDQyxHQUFSLENBQ0VDLE1BQU0sQ0FBQ0MsT0FEVCxFQUVFQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBRjNCLEVBR0VGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFIM0I7O0FBS0EsVUFDRUwsTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQTFDLEtBQ0FGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFGM0IsRUFHRTtBQUNBcEIsZ0JBQVEsQ0FBQztBQUNQVSxjQUFJLEVBQUVDLGlFQUFrQkE7QUFEakIsU0FBRCxDQUFSO0FBR0Q7QUFDRjs7QUFDREksVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1QsUUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWEcsWUFBTSxDQUFDTyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1YsUUFBckM7QUFDRCxLQUZEO0FBR0QsR0FwQlEsQ0FBVCxDQWRpQixDQW9DakI7O0FBQ0FILHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlKLEVBQUUsSUFBSUEsRUFBRSxDQUFDa0IsRUFBYixFQUFpQjtBQUNmQyx3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNwQixFQUFFLElBQUlBLEVBQUUsQ0FBQ2tCLEVBQVYsQ0FKTSxDQUFUOztBQUtBLE1BQUksQ0FBQ2xCLEVBQUwsRUFBUztBQUNQLFdBQU8sSUFBUDtBQUNEOztBQUNELFNBQ0UsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUdBLEVBQUUsSUFBSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKVCxFQUtHRSxTQUFTLENBQUNtQixHQUFWLENBQWMsVUFBQXBCLElBQUk7QUFBQSxXQUNqQixNQUFDLDREQUFEO0FBQVUsU0FBRyxFQUFFQSxJQUFJLENBQUNpQixFQUFwQjtBQUF3QixVQUFJLEVBQUVqQixJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGlCO0FBQUEsR0FBbEIsQ0FMSCxDQURGO0FBV0QsQ0F4REQ7O0dBQU1QLEk7VUFDYUUsdUQsRUFDRkMsdUQsRUFDb0JBLHVEOzs7QUF1RHRCSCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9tYWluLmZiMjE0YzUxM2IwZDhiZjBkYmZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IG1haW4gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdCB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdCk7XHJcbiAgLy8g7Iqk7YGs66GkIOunqCDslYTrnpjroZwg64K066as66m0IHBvc3QgMTDqsJzslKkg642UIOu2iOufrOyYpOq4sFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICAvLyAoMSkgd2luZG93LnNjcm9sbFk6IO2YhOyerCDsspjsnYzrtoDthLAg66eo7JWE656Y6rmM7KeA7J2YIOq4uOydtFxyXG4gIC8vICgyKSBjbGllbnRIZWlnaHQ6IO2ZlOuptOyXkCDrs7TsnbTripQg7LC9IOuGkuydtCjqs6DsoJUpXHJcbiAgLy8gKDMpIHNjcm9sbEhlaWdodDog7KCc7J28IOychOu2gO2EsCDslYTrnpjquYzsp4Ag6rOg7KCV65CcIOy0neq4uOydtCjsiqTtgazroaTquYzsp4ApXHJcbiAgLy8gKDEpICsgKDIpID0gKDMpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsWSxcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHRcclxuICAgICAgKTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA9PT1cclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0XHJcbiAgICAgICkge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgb25TY3JvbGwpO1xyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgLy8g66eM7JW9IOuhnOq3uOyVhOybg+yLnCDrqZTsnbjtmZTrqbTsnLzroZwg7J2064+ZXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtZSAmJiBtZS5pZCkge1xyXG4gICAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9XHJcbiAgfSwgW21lICYmIG1lLmlkXSk7XHJcbiAgaWYgKCFtZSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbkxheW91dD5cclxuICAgICAgey8qIOyhsOqxtOu2gCDtmZTrqbQg67O07Jes7KO86riwICovfVxyXG4gICAgICB7LyogYW50aSBwYXR0ZXJuOiBrZXnsl5AgaW5kZXjroZwg67aA7Jes7ZWY7KeAIOunkOq4sCEgKi99XHJcbiAgICAgIHsvKiDqsozsi5zquIDsnbQg7KeA7JuM7KeIIOqwgOuKpeyEseydtCDsnojripQg6rK97JqwLCDsiJzshJzrsJTrgIzqsbDrgpgg65OxIOygiOuMgCBpbmRleCDrtoDsl6wgWCAqL31cclxuICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cclxuICAgICAge21haW5Qb3N0cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L01haW5MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=