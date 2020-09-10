webpackHotUpdate_N_E("pages/_app",{

/***/ "./css/LandingNavigation.css":
false,

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./css/style.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./css/style.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./css/LandingNavigation.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./css/style.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./css/style.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".ReactStickyHeader_root * {\r\n  box-sizing: border-box;\r\n}\r\n.navbar-custom {\r\n  padding: 20px 0px;\r\n  width: 100%;\r\n  border-radius: 0px;\r\n  z-index: 999;\r\n  margin-bottom: 0px;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.fixed-top {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n@media (min-width: 992px) {\r\n}\r\n.navbar-expand-lg {\r\n  flex-flow: row nowrap;\r\n  justify-content: flex-start;\r\n}\r\n.navbar {\r\n  position: relative;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1rem;\r\n}\r\narticle,\r\naside,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n*,\r\n::after,\r\n::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nnav {\r\n  display: block;\r\n}\r\nbody {\r\n  font-family: \"Rubik\", sans-serif;\r\n  overflow-x: hidden !important;\r\n  position: relative;\r\n}\r\nbody {\r\n  margin: 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\r\n    \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\",\r\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n  text-align: left;\r\n  background-color: #fff;\r\n}\r\n:root {\r\n  --blue: #007bff;\r\n  --indigo: #6610f2;\r\n  --purple: #6f42c1;\r\n  --pink: #e83e8c;\r\n  --red: #dc3545;\r\n  --orange: #fd7e14;\r\n  --yellow: #ffc107;\r\n  --green: #28a745;\r\n  --teal: #20c997;\r\n  --cyan: #17a2b8;\r\n  --white: #fff;\r\n  --gray: #6c757d;\r\n  --gray-dark: #343a40;\r\n  --primary: #007bff;\r\n  --secondary: #6c757d;\r\n  --success: #28a745;\r\n  --info: #17a2b8;\r\n  --warning: #ffc107;\r\n  --danger: #dc3545;\r\n  --light: #f8f9fa;\r\n  --dark: #343a40;\r\n  --breakpoint-xs: 0;\r\n  --breakpoint-sm: 576px;\r\n  --breakpoint-md: 768px;\r\n  --breakpoint-lg: 992px;\r\n  --breakpoint-xl: 1200px;\r\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,\r\n    \"Liberation Mono\", \"Courier New\", monospace;\r\n}\r\nhtml {\r\n  font-family: sans-serif;\r\n  line-height: 1.15;\r\n  -webkit-text-size-adjust: 100%;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n*,\r\n::after,\r\n::before {\r\n  box-sizing: border-box;\r\n}\r\n*,\r\n::after,\r\n::before {\r\n  box-sizing: border-box;\r\n}\r\n::-moz-selection {\r\n  background-color: #2e3138;\r\n  color: #fff;\r\n}\r\n::selection {\r\n  background-color: #2e3138;\r\n  color: #fff;\r\n}\r\n", "",{"version":3,"sources":["C:/Users/arthu/Documents/nextpus_2020/client/css/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAIlB,gCAAgC;AAClC;AACA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,OAAO;EACP,aAAa;AACf;AACA;AACA;AACA;EAEE,qBAAqB;EAErB,2BAA2B;AAC7B;AACA;EACE,kBAAkB;EAElB,aAAa;EAEb,eAAe;EAEf,mBAAmB;EAEnB,8BAA8B;EAC9B,oBAAoB;AACtB;AACA;;;;;;;;;;EAUE,cAAc;AAChB;AACA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;AACA;EACE,gCAAgC;EAChC,6BAA6B;EAC7B,kBAAkB;AACpB;AACA;EACE,SAAS;EACT;;2DAEyD;EACzD,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,cAAc;EACd,gBAAgB;EAChB,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,eAAe;EACf,aAAa;EACb,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;EACpB,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,sBAAsB;EACtB,sBAAsB;EACtB,sBAAsB;EACtB,uBAAuB;EACvB;;gFAE8E;EAC9E;+CAC6C;AAC/C;AACA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,8BAA8B;EAC9B,wCAAwC;AAC1C;AACA;;;EAGE,sBAAsB;AACxB;AACA;;;EAGE,sBAAsB;AACxB;AACA;EACE,yBAAyB;EACzB,WAAW;AACb;AAHA;EACE,yBAAyB;EACzB,WAAW;AACb","file":"style.css","sourcesContent":[".ReactStickyHeader_root * {\r\n  box-sizing: border-box;\r\n}\r\n.navbar-custom {\r\n  padding: 20px 0px;\r\n  width: 100%;\r\n  border-radius: 0px;\r\n  z-index: 999;\r\n  margin-bottom: 0px;\r\n  -webkit-transition: all 0.5s ease-in-out;\r\n  -moz-transition: all 0.5s ease-in-out;\r\n  -o-transition: all 0.5s ease-in-out;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n.fixed-top {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n@media (min-width: 992px) {\r\n}\r\n.navbar-expand-lg {\r\n  -ms-flex-flow: row nowrap;\r\n  flex-flow: row nowrap;\r\n  -ms-flex-pack: start;\r\n  justify-content: flex-start;\r\n}\r\n.navbar {\r\n  position: relative;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n  padding: 0.5rem 1rem;\r\n}\r\narticle,\r\naside,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n*,\r\n::after,\r\n::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nnav {\r\n  display: block;\r\n}\r\nbody {\r\n  font-family: \"Rubik\", sans-serif;\r\n  overflow-x: hidden !important;\r\n  position: relative;\r\n}\r\nbody {\r\n  margin: 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\r\n    \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\",\r\n    \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n  text-align: left;\r\n  background-color: #fff;\r\n}\r\n:root {\r\n  --blue: #007bff;\r\n  --indigo: #6610f2;\r\n  --purple: #6f42c1;\r\n  --pink: #e83e8c;\r\n  --red: #dc3545;\r\n  --orange: #fd7e14;\r\n  --yellow: #ffc107;\r\n  --green: #28a745;\r\n  --teal: #20c997;\r\n  --cyan: #17a2b8;\r\n  --white: #fff;\r\n  --gray: #6c757d;\r\n  --gray-dark: #343a40;\r\n  --primary: #007bff;\r\n  --secondary: #6c757d;\r\n  --success: #28a745;\r\n  --info: #17a2b8;\r\n  --warning: #ffc107;\r\n  --danger: #dc3545;\r\n  --light: #f8f9fa;\r\n  --dark: #343a40;\r\n  --breakpoint-xs: 0;\r\n  --breakpoint-sm: 576px;\r\n  --breakpoint-md: 768px;\r\n  --breakpoint-lg: 992px;\r\n  --breakpoint-xl: 1200px;\r\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,\r\n    \"Liberation Mono\", \"Courier New\", monospace;\r\n}\r\nhtml {\r\n  font-family: sans-serif;\r\n  line-height: 1.15;\r\n  -webkit-text-size-adjust: 100%;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n*,\r\n::after,\r\n::before {\r\n  box-sizing: border-box;\r\n}\r\n*,\r\n::after,\r\n::before {\r\n  box-sizing: border-box;\r\n}\r\n::selection {\r\n  background-color: #2e3138;\r\n  color: #fff;\r\n}\r\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\arthu\\Documents\\nextpus_2020\\client\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//각 페이지들의 공통되는 요소 처리



 //component: index.js의 return 부분(index.js의 부모인 셈)

var App = function App(_ref) {
  var Component = _ref.Component;
  return __jsx(Component, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }
  });
};

_c = App;
App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY3NzL3N0eWxlLmNzcz9iMmIyIiwid2VicGFjazovL19OX0UvLi9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxvUUFBcUo7O0FBRXZMOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLG9RQUFxSjtBQUMzSjtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLG9RQUFxSjs7QUFFL0s7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxxR0FBZ0Q7QUFDMUY7QUFDQTtBQUNBLGNBQWMsUUFBUyw4QkFBOEIsNkJBQTZCLEtBQUssb0JBQW9CLHdCQUF3QixrQkFBa0IseUJBQXlCLG1CQUFtQix5QkFBeUIsdUNBQXVDLEtBQUssZ0JBQWdCLHNCQUFzQixhQUFhLGVBQWUsY0FBYyxvQkFBb0IsS0FBSywrQkFBK0IsS0FBSyx1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QkFBNkIsS0FBSyxpQkFBaUIsZ0NBQWdDLGtCQUFrQixLQUFLLE9BQU87QUFDdGdPO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDN0IsU0FBTyxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0QsQ0FGRDs7S0FBTUQsRztBQUlOQSxHQUFHLENBQUNFLFNBQUosR0FBZ0I7QUFDZEQsV0FBUyxFQUFFRSxpREFBUyxDQUFDQyxXQUFWLENBQXNCQztBQURuQixDQUFoQjtBQUllTCxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjIyN2UzZTIwMWQ4MzgyMjQ2MTcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYikge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHA7XG5cbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9zdHlsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLlJlYWN0U3RpY2t5SGVhZGVyX3Jvb3QgKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4ubmF2YmFyLWN1c3RvbSB7XFxyXFxuICBwYWRkaW5nOiAyMHB4IDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xcclxcbiAgei1pbmRleDogOTk5O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5maXhlZC10b3Age1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogMTAzMDtcXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxufVxcclxcbi5uYXZiYXItZXhwYW5kLWxnIHtcXHJcXG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuLm5hdmJhciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcclxcbn1cXHJcXG5hcnRpY2xlLFxcclxcbmFzaWRlLFxcclxcbmZpZ2NhcHRpb24sXFxyXFxuZmlndXJlLFxcclxcbmZvb3RlcixcXHJcXG5oZWFkZXIsXFxyXFxuaGdyb3VwLFxcclxcbm1haW4sXFxyXFxubmF2LFxcclxcbnNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbiosXFxyXFxuOjphZnRlcixcXHJcXG46OmJlZm9yZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJSdWJpa1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sXFxyXFxuICAgIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXHJcXG4gICAgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbiAgY29sb3I6ICMyMTI1Mjk7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgLS1ibHVlOiAjMDA3YmZmO1xcclxcbiAgLS1pbmRpZ286ICM2NjEwZjI7XFxyXFxuICAtLXB1cnBsZTogIzZmNDJjMTtcXHJcXG4gIC0tcGluazogI2U4M2U4YztcXHJcXG4gIC0tcmVkOiAjZGMzNTQ1O1xcclxcbiAgLS1vcmFuZ2U6ICNmZDdlMTQ7XFxyXFxuICAtLXllbGxvdzogI2ZmYzEwNztcXHJcXG4gIC0tZ3JlZW46ICMyOGE3NDU7XFxyXFxuICAtLXRlYWw6ICMyMGM5OTc7XFxyXFxuICAtLWN5YW46ICMxN2EyYjg7XFxyXFxuICAtLXdoaXRlOiAjZmZmO1xcclxcbiAgLS1ncmF5OiAjNmM3NTdkO1xcclxcbiAgLS1ncmF5LWRhcms6ICMzNDNhNDA7XFxyXFxuICAtLXByaW1hcnk6ICMwMDdiZmY7XFxyXFxuICAtLXNlY29uZGFyeTogIzZjNzU3ZDtcXHJcXG4gIC0tc3VjY2VzczogIzI4YTc0NTtcXHJcXG4gIC0taW5mbzogIzE3YTJiODtcXHJcXG4gIC0td2FybmluZzogI2ZmYzEwNztcXHJcXG4gIC0tZGFuZ2VyOiAjZGMzNTQ1O1xcclxcbiAgLS1saWdodDogI2Y4ZjlmYTtcXHJcXG4gIC0tZGFyazogIzM0M2E0MDtcXHJcXG4gIC0tYnJlYWtwb2ludC14czogMDtcXHJcXG4gIC0tYnJlYWtwb2ludC1zbTogNTc2cHg7XFxyXFxuICAtLWJyZWFrcG9pbnQtbWQ6IDc2OHB4O1xcclxcbiAgLS1icmVha3BvaW50LWxnOiA5OTJweDtcXHJcXG4gIC0tYnJlYWtwb2ludC14bDogMTIwMHB4O1xcclxcbiAgLS1mb250LWZhbWlseS1zYW5zLXNlcmlmOiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsXFxyXFxuICAgIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLFxcclxcbiAgICBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcclxcbiAgLS1mb250LWZhbWlseS1tb25vc3BhY2U6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcyxcXHJcXG4gICAgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXHJcXG59XFxyXFxuaHRtbCB7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcclxcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuKixcXHJcXG46OmFmdGVyLFxcclxcbjo6YmVmb3JlIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbiosXFxyXFxuOjphZnRlcixcXHJcXG46OmJlZm9yZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG46Oi1tb3otc2VsZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTMxMzg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuOjpzZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMzEzODtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJDOi9Vc2Vycy9hcnRodS9Eb2N1bWVudHMvbmV4dHB1c18yMDIwL2NsaWVudC9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBSWxCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLGFBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtFQUVFLHFCQUFxQjtFQUVyQiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGtCQUFrQjtFQUVsQixhQUFhO0VBRWIsZUFBZTtFQUVmLG1CQUFtQjtFQUVuQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0FBQ3RCO0FBQ0E7Ozs7Ozs7Ozs7RUFVRSxjQUFjO0FBQ2hCO0FBQ0E7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxTQUFTO0VBQ1Q7OzJEQUV5RDtFQUN6RCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qjs7Z0ZBRThFO0VBQzlFOytDQUM2QztBQUMvQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsd0NBQXdDO0FBQzFDO0FBQ0E7OztFQUdFLHNCQUFzQjtBQUN4QjtBQUNBOzs7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFIQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2JcIixcImZpbGVcIjpcInN0eWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuUmVhY3RTdGlja3lIZWFkZXJfcm9vdCAqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbi5uYXZiYXItY3VzdG9tIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXHJcXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5maXhlZC10b3Age1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogMTAzMDtcXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxufVxcclxcbi5uYXZiYXItZXhwYW5kLWxnIHtcXHJcXG4gIC1tcy1mbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XFxyXFxuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuLm5hdmJhciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxufVxcclxcbmFydGljbGUsXFxyXFxuYXNpZGUsXFxyXFxuZmlnY2FwdGlvbixcXHJcXG5maWd1cmUsXFxyXFxuZm9vdGVyLFxcclxcbmhlYWRlcixcXHJcXG5oZ3JvdXAsXFxyXFxubWFpbixcXHJcXG5uYXYsXFxyXFxuc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuKixcXHJcXG46OmFmdGVyLFxcclxcbjo6YmVmb3JlIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlJ1YmlrXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXHJcXG4gICAgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLFxcclxcbiAgICBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICBjb2xvcjogIzIxMjUyOTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJsdWU6ICMwMDdiZmY7XFxyXFxuICAtLWluZGlnbzogIzY2MTBmMjtcXHJcXG4gIC0tcHVycGxlOiAjNmY0MmMxO1xcclxcbiAgLS1waW5rOiAjZTgzZThjO1xcclxcbiAgLS1yZWQ6ICNkYzM1NDU7XFxyXFxuICAtLW9yYW5nZTogI2ZkN2UxNDtcXHJcXG4gIC0teWVsbG93OiAjZmZjMTA3O1xcclxcbiAgLS1ncmVlbjogIzI4YTc0NTtcXHJcXG4gIC0tdGVhbDogIzIwYzk5NztcXHJcXG4gIC0tY3lhbjogIzE3YTJiODtcXHJcXG4gIC0td2hpdGU6ICNmZmY7XFxyXFxuICAtLWdyYXk6ICM2Yzc1N2Q7XFxyXFxuICAtLWdyYXktZGFyazogIzM0M2E0MDtcXHJcXG4gIC0tcHJpbWFyeTogIzAwN2JmZjtcXHJcXG4gIC0tc2Vjb25kYXJ5OiAjNmM3NTdkO1xcclxcbiAgLS1zdWNjZXNzOiAjMjhhNzQ1O1xcclxcbiAgLS1pbmZvOiAjMTdhMmI4O1xcclxcbiAgLS13YXJuaW5nOiAjZmZjMTA3O1xcclxcbiAgLS1kYW5nZXI6ICNkYzM1NDU7XFxyXFxuICAtLWxpZ2h0OiAjZjhmOWZhO1xcclxcbiAgLS1kYXJrOiAjMzQzYTQwO1xcclxcbiAgLS1icmVha3BvaW50LXhzOiAwO1xcclxcbiAgLS1icmVha3BvaW50LXNtOiA1NzZweDtcXHJcXG4gIC0tYnJlYWtwb2ludC1tZDogNzY4cHg7XFxyXFxuICAtLWJyZWFrcG9pbnQtbGc6IDk5MnB4O1xcclxcbiAgLS1icmVha3BvaW50LXhsOiAxMjAwcHg7XFxyXFxuICAtLWZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXHJcXG4gICAgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsXFxyXFxuICAgIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7XFxyXFxuICAtLWZvbnQtZmFtaWx5LW1vbm9zcGFjZTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLFxcclxcbiAgICBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlO1xcclxcbn1cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XFxyXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG4qLFxcclxcbjo6YWZ0ZXIsXFxyXFxuOjpiZWZvcmUge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuKixcXHJcXG46OmFmdGVyLFxcclxcbjo6YmVmb3JlIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjo6c2VsZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTMxMzg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy/qsIEg7Y6Y7J207KeA65Ok7J2YIOqzte2GteuQmOuKlCDsmpTshowg7LKY66asXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL3N0eWxlLmNzc1wiO1xyXG5cclxuLy9jb21wb25lbnQ6IGluZGV4Lmpz7J2YIHJldHVybiDrtoDrtoQoaW5kZXguanPsnZgg67aA66qo7J24IOyFiClcclxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICByZXR1cm4gPENvbXBvbmVudCAvPjtcclxufTtcclxuXHJcbkFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==