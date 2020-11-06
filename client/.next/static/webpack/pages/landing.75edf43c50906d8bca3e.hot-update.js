webpackHotUpdate_N_E("pages/landing",{

/***/ "./components/LoginForm.js":
/*!*********************************!*\
  !*** ./components/LoginForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _hooks_useinput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useinput */ "./hooks/useinput.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\arthu\\Documents\\nextpus_2020\\client\\components\\LoginForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







 /// /////////// Styled Component //////////////////

var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"]).withConfig({
  displayName: "LoginForm__FormWrapper",
  componentId: "sc-184ko4u-0"
})(["line-height:1.34;margin:0;padding:0;display:block;"]);
_c = FormWrapper;
var FormBox = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "LoginForm__FormBox",
  componentId: "sc-184ko4u-1"
})(["font-size:17px;width:364px;display:inline-block;margin:auto;padding:6px 0;"]);
_c2 = FormBox;
var InputBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"]).withConfig({
  displayName: "LoginForm__InputBox",
  componentId: "sc-184ko4u-2"
})(["border-radius:6px;font-size:17px;padding:14px 16px;width:330px;background:#ffffff;border:1px solid #dddfe2;color:#1d2129;line-height:16px;vertical-align:middle;"]);
_c3 = InputBox;
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "LoginForm__ButtonWrapper",
  componentId: "sc-184ko4u-3"
})(["padding-top:8px;"]);
_c4 = ButtonWrapper;
var LogInButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"]).withConfig({
  displayName: "LoginForm__LogInButton",
  componentId: "sc-184ko4u-4"
})(["margin:0;background-color:#015cab;border:none;border-radius:6px;font-size:20px;line-height:48px;padding:0 16px;width:332px;cursor:pointer;display:inline-block;text-decoration:none;white-space:nowrap;font-weight:bold;"]);
_c5 = LogInButton;
var SignUpButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(LogInButton).withConfig({
  displayName: "LoginForm__SignUpButton",
  componentId: "sc-184ko4u-5"
})(["border:none;border-radius:6px;font-size:17px;line-height:48px;padding:0 16px;"]); // const style= useMemo(()=>({marginTop: 10}),[]);
// return(<Input.Search style={style}></Input.Search>)
// 리랜더링 방지하면서 style 꾸밀수 있게끔

_c6 = SignUpButton;

var LoginForm = function LoginForm() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])(); // 로그인을 위한 리덕스 연결고리
  // initialstate >user > isloggedin(state.user: state.user.isLoggedin과 동일)
  // 구조분해할당

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      logInLoading = _useSelector.logInLoading,
      logInError = _useSelector.logInError; // hooks/useinput.js 활용(라이브러리 개념 hooks)


  var _useInput = Object(_hooks_useinput__WEBPACK_IMPORTED_MODULE_7__["default"])(""),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useinput__WEBPACK_IMPORTED_MODULE_7__["default"])(""),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      password = _useInput4[0],
      onChangePassword = _useInput4[1]; // const [id, setId] = useState(""); 8줄을 hooks로 줄임
  // const onChangeId = useCallback(e => {
  //   setId(e.target.value);
  // }, []);
  // const [password, setPassword] = useState("");
  // const onChangePassword = useCallback(e => {
  //   setPassword(e.target.value);
  // }, []);


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);
  var onSubmitForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    // if (isloggedIn) {
    //   Router.push("/main");
    // } else {
    //   alert("로그인에 실패하였습니다.");
    // }
    // if (isLoggedIn){
    // dispatch(loginAction(id, password));
    // console.log(id, password);
    // Router.push("/main")}else{alert("Login failure")}
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_8__["loginRequestAction"])({
      email: email,
      password: password
    }));
    console.log(email, password);
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/main");
  }, [email, password]);
  return (// onFinish: e.preventdefault 자동으로 설정되어 있음(antd)
    __jsx(FormWrapper, {
      onFinish: onSubmitForm,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 5
      }
    }, __jsx(FormBox, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 7
      }
    }, __jsx(InputBox, {
      name: "user-email",
      placeholder: "\uC774\uBA54\uC77C\uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694.",
      value: email,
      type: "email",
      onChange: onChangeEmail,
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }
    })), __jsx(FormBox, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 7
      }
    }, __jsx(InputBox, {
      name: "user-password",
      type: "password",
      placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.",
      value: password,
      onChange: onChangePassword,
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }
    })), __jsx(ButtonWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }
    }, __jsx(LogInButton, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }
    }, "// onClick=", handleLoginClick, "type=\"primary\" htmlType=\"submit\" loading=", logInLoading, "> \uB85C\uADF8\uC778")), " "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 11
      }
    }, __jsx(SignUpButton, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 13
      }
    }, "\uD68C\uC6D0\uAC00\uC785"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/passwordfinder",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 11
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }
    }, "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB2E4\uBA74?")))), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 7
      }
    }))
  );
};

_s(LoginForm, "tKkOVmPqh2u0qZseKATViWPnz+M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useinput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useinput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c7 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "FormWrapper");
$RefreshReg$(_c2, "FormBox");
$RefreshReg$(_c3, "InputBox");
$RefreshReg$(_c4, "ButtonWrapper");
$RefreshReg$(_c5, "LogInButton");
$RefreshReg$(_c6, "SignUpButton");
$RefreshReg$(_c7, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiRm9ybVdyYXBwZXIiLCJzdHlsZWQiLCJGb3JtIiwiRm9ybUJveCIsImRpdiIsIklucHV0Qm94IiwiSW5wdXQiLCJCdXR0b25XcmFwcGVyIiwiTG9nSW5CdXR0b24iLCJCdXR0b24iLCJTaWduVXBCdXR0b24iLCJMb2dpbkZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkVycm9yIiwidXNlSW5wdXQiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJ1c2VFZmZlY3QiLCJhbGVydCIsIm9uU3VibWl0Rm9ybSIsInVzZUNhbGxiYWNrIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giLCJoYW5kbGVMb2dpbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUVBLElBQU1BLFdBQVcsR0FBR0MsaUVBQU0sQ0FBQ0MseUNBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwwREFBakI7S0FBTUYsVztBQU9OLElBQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxrRkFBYjtNQUFNRCxPO0FBUU4sSUFBTUUsUUFBUSxHQUFHSixpRUFBTSxDQUFDSywwQ0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHdLQUFkO01BQU1ELFE7QUFZTixJQUFNRSxhQUFhLEdBQUdOLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0JBQW5CO01BQU1HLGE7QUFJTixJQUFNQyxXQUFXLEdBQUdQLGlFQUFNLENBQUNRLDJDQUFELENBQVQ7QUFBQTtBQUFB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QUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsQ0FERixDQVZGLEVBZUUsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0VBREYsQ0FERixDQWZGLENBekJGLEVBOENFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUE5Q0Y7QUFGRjtBQW1ERCxDQWpHRDs7R0FBTU4sUztVQUNhRSx1RCxFQUtvQkMsdUQsRUFHTkssdUQsRUFDTUEsdUQ7OztNQVZqQ1IsUztBQW1HU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGFuZGluZy43NWVkZjQzYzUwOTA2ZDhiY2EzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlaW5wdXRcIjtcclxuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbi8vLyAvLy8vLy8vLy8vLyBTdHlsZWQgQ29tcG9uZW50IC8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXHJcbiAgbGluZS1oZWlnaHQ6IDEuMzQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtQm94ID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgd2lkdGg6IDM2NHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogNnB4IDA7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEJveCA9IHN0eWxlZChJbnB1dClgXHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgd2lkdGg6IDMzMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGZlMjtcclxuICBjb2xvcjogIzFkMjEyOTtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuYDtcclxuXHJcbmNvbnN0IExvZ0luQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTVjYWI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIHdpZHRoOiAzMzJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5gO1xyXG5cclxuY29uc3QgU2lnblVwQnV0dG9uID0gc3R5bGVkKExvZ0luQnV0dG9uKWBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogNDhweDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgXHJcbmA7XHJcblxyXG4vLyBjb25zdCBzdHlsZT0gdXNlTWVtbygoKT0+KHttYXJnaW5Ub3A6IDEwfSksW10pO1xyXG4vLyByZXR1cm4oPElucHV0LlNlYXJjaCBzdHlsZT17c3R5bGV9PjwvSW5wdXQuU2VhcmNoPilcclxuLy8g66as656c642U66eBIOuwqeyngO2VmOuptOyEnCBzdHlsZSDqvrjrsIDsiJgg7J6I6rKM64GUXHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAvLyDroZzqt7jsnbjsnYQg7JyE7ZWcIOumrOuNleyKpCDsl7DqsrDqs6DrpqxcclxuICAvLyBpbml0aWFsc3RhdGUgPnVzZXIgPiBpc2xvZ2dlZGluKHN0YXRlLnVzZXI6IHN0YXRlLnVzZXIuaXNMb2dnZWRpbuqzvCDrj5nsnbwpXHJcbiAgLy8g6rWs7KGw67aE7ZW07ZWg64u5XHJcbiAgY29uc3QgeyBsb2dJbkxvYWRpbmcsIGxvZ0luRXJyb3IgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAvLyBob29rcy91c2VpbnB1dC5qcyDtmZzsmqko65287J2067iM65+s66asIOqwnOuFkCBob29rcylcclxuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIC8vIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoXCJcIik7IDjspITsnYQgaG9va3ProZwg7KSE7J6EXHJcbiAgLy8gY29uc3Qgb25DaGFuZ2VJZCA9IHVzZUNhbGxiYWNrKGUgPT4ge1xyXG4gIC8vICAgc2V0SWQoZS50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH0sIFtdKTtcclxuICAvLyBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjayhlID0+IHtcclxuICAvLyAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9nSW5FcnJvcikge1xyXG4gICAgICBhbGVydChsb2dJbkVycm9yKTtcclxuICAgIH1cclxuICB9LCBbbG9nSW5FcnJvcl0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAvLyBpZiAoaXNsb2dnZWRJbikge1xyXG4gICAgLy8gICBSb3V0ZXIucHVzaChcIi9tYWluXCIpO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgYWxlcnQoXCLroZzqt7jsnbjsl5Ag7Iuk7Yyo7ZWY7JiA7Iq164uI64ukLlwiKTtcclxuICAgIC8vIH1cclxuICAgIC8vIGlmIChpc0xvZ2dlZEluKXtcclxuICAgIC8vIGRpc3BhdGNoKGxvZ2luQWN0aW9uKGlkLCBwYXNzd29yZCkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coaWQsIHBhc3N3b3JkKTtcclxuICAgIC8vIFJvdXRlci5wdXNoKFwiL21haW5cIil9ZWxzZXthbGVydChcIkxvZ2luIGZhaWx1cmVcIil9XHJcbiAgICBkaXNwYXRjaChcclxuICAgICAgbG9naW5SZXF1ZXN0QWN0aW9uKHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgUm91dGVyLnB1c2goXCIvbWFpblwiKTtcclxuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyBvbkZpbmlzaDogZS5wcmV2ZW50ZGVmYXVsdCDsnpDrj5nsnLzroZwg7ISk7KCV65CY7Ja0IOyeiOydjChhbnRkKVxyXG4gICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICA8Rm9ybUJveD5cclxuICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7JWE7J2065SUPC9sYWJlbD5cclxuICAgICAgICA8YnIgLz4gKi99XHJcbiAgICAgICAgPElucHV0Qm94XHJcbiAgICAgICAgICBuYW1lPVwidXNlci1lbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOuplOydvOyjvOyGjOulvCDsnoXroKXtlZjshLjsmpQuXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtQm94PlxyXG4gICAgICA8Rm9ybUJveD5cclxuICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICA8YnIgLz4gKi99XHJcbiAgICAgICAgPElucHV0Qm94XHJcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtQm94PlxyXG4gICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxMb2dJbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAvLyBvbkNsaWNrPXtoYW5kbGVMb2dpbkNsaWNrfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtsb2dJbkxvYWRpbmd9PiDroZzqt7jsnbhcclxuICAgICAgICAgICAgPC9Mb2dJbkJ1dHRvbj5cclxuICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxTaWduVXBCdXR0b24+7ZqM7JuQ6rCA7J6FPC9TaWduVXBCdXR0b24+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcGFzc3dvcmRmaW5kZXJcIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8cD7ruYTrsIDrsojtmLjrpbwg7J6K7Jy87IWo64uk66m0PzwvcD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICAgPGRpdiAvPlxyXG4gICAgPC9Gb3JtV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9