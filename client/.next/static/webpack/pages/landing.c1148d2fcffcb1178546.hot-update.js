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
})(["background-color:#47a09e;font-size:16px;"]); // const style= useMemo(()=>({marginTop: 10}),[]);
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
        lineNumber: 116,
        columnNumber: 5
      }
    }, __jsx(FormBox, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
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
        lineNumber: 120,
        columnNumber: 9
      }
    })), __jsx(FormBox, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
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
        lineNumber: 132,
        columnNumber: 9
      }
    })), __jsx(ButtonWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 11
      }
    }, __jsx(LogInButton // onClick={onSubmitForm}
    // type="primary"
    // htmlType="submit"
    // loading={logInLoading}
    , {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 13
      }
    }, " ", "\uB85C\uADF8\uC778")), " "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 11
      }
    }, __jsx(SignUpButton, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }, "\uD68C\uC6D0\uAC00\uC785"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/passwordfinder",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 11
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }
    }, "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB2E4\uBA74?")))), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiRm9ybVdyYXBwZXIiLCJzdHlsZWQiLCJGb3JtIiwiRm9ybUJveCIsImRpdiIsIklucHV0Qm94IiwiSW5wdXQiLCJCdXR0b25XcmFwcGVyIiwiTG9nSW5CdXR0b24iLCJCdXR0b24iLCJTaWduVXBCdXR0b24iLCJMb2dpbkZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkVycm9yIiwidXNlSW5wdXQiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJ1c2VFZmZlY3QiLCJhbGVydCIsIm9uU3VibWl0Rm9ybSIsInVzZUNhbGxiYWNrIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxpRUFBTSxDQUFDQyx5Q0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDBEQUFqQjtLQUFNRixXO0FBT04sSUFBTUcsT0FBTyxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtGQUFiO01BQU1ELE87QUFRTixJQUFNRSxRQUFRLEdBQUdKLGlFQUFNLENBQUNLLDBDQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsd0tBQWQ7TUFBTUQsUTtBQVlOLElBQU1FLGFBQWEsR0FBR04seURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSx3QkFBbkI7TUFBTUcsYTtBQUlOLElBQU1DLFdBQVcsR0FBR1AsaUVBQU0sQ0FBQ1EsMkNBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxnT0FBakI7TUFBTUQs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsQ0FERixDQWZGLEVBb0JFLE1BQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsaUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdFQURGLENBREYsQ0FwQkYsQ0F6QkYsRUFtREU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQW5ERjtBQUZGO0FBd0RELENBdEdEOztHQUFNWixTO1VBQ2FFLHVELEVBS29CQyx1RCxFQUdOSyx1RCxFQUNNQSx1RDs7O01BVmpDUixTO0FBd0dTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sYW5kaW5nLmMxMTQ4ZDJmY2ZmY2IxMTc4NTQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gXCIuLi9ob29rcy91c2VpbnB1dFwiO1xyXG5pbXBvcnQgeyBsb2dpblJlcXVlc3RBY3Rpb24gfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuLy8vIC8vLy8vLy8vLy8vIFN0eWxlZCBDb21wb25lbnQgLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5jb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZChGb3JtKWBcclxuICBsaW5lLWhlaWdodDogMS4zNDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuYDtcclxuXHJcbmNvbnN0IEZvcm1Cb3ggPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB3aWR0aDogMzY0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiA2cHggMDtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0Qm94ID0gc3R5bGVkKElucHV0KWBcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB3aWR0aDogMzMwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZmUyO1xyXG4gIGNvbG9yOiAjMWQyMTI5O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG5gO1xyXG5cclxuY29uc3QgTG9nSW5CdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxNWNhYjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogNDhweDtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgd2lkdGg6IDMzMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmA7XHJcblxyXG5jb25zdCBTaWduVXBCdXR0b24gPSBzdHlsZWQoTG9nSW5CdXR0b24pYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0N2EwOWU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5gO1xyXG5cclxuLy8gY29uc3Qgc3R5bGU9IHVzZU1lbW8oKCk9Pih7bWFyZ2luVG9wOiAxMH0pLFtdKTtcclxuLy8gcmV0dXJuKDxJbnB1dC5TZWFyY2ggc3R5bGU9e3N0eWxlfT48L0lucHV0LlNlYXJjaD4pXHJcbi8vIOumrOuenOuNlOungSDrsKnsp4DtlZjrqbTshJwgc3R5bGUg6r6467CA7IiYIOyeiOqyjOuBlFxyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgLy8g66Gc6re47J247J2EIOychO2VnCDrpqzrjZXsiqQg7Jew6rKw6rOg66asXHJcbiAgLy8gaW5pdGlhbHN0YXRlID51c2VyID4gaXNsb2dnZWRpbihzdGF0ZS51c2VyOiBzdGF0ZS51c2VyLmlzTG9nZ2VkaW7qs7wg64+Z7J28KVxyXG4gIC8vIOq1rOyhsOu2hO2VtO2VoOuLuVxyXG4gIGNvbnN0IHsgbG9nSW5Mb2FkaW5nLCBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgLy8gaG9va3MvdXNlaW5wdXQuanMg7Zmc7JqpKOudvOydtOu4jOufrOumrCDqsJzrhZAgaG9va3MpXHJcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICAvLyBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKFwiXCIpOyA47KSE7J2EIGhvb2tz66GcIOykhOyehFxyXG4gIC8vIGNvbnN0IG9uQ2hhbmdlSWQgPSB1c2VDYWxsYmFjayhlID0+IHtcclxuICAvLyAgIHNldElkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9LCBbXSk7XHJcbiAgLy8gY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvLyBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soZSA9PiB7XHJcbiAgLy8gICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvZ0luRXJyb3IpIHtcclxuICAgICAgYWxlcnQobG9nSW5FcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW2xvZ0luRXJyb3JdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgLy8gaWYgKGlzbG9nZ2VkSW4pIHtcclxuICAgIC8vICAgUm91dGVyLnB1c2goXCIvbWFpblwiKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIGFsZXJ0KFwi66Gc6re47J247JeQIOyLpO2MqO2VmOyYgOyKteuLiOuLpC5cIik7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBpZiAoaXNMb2dnZWRJbil7XHJcbiAgICAvLyBkaXNwYXRjaChsb2dpbkFjdGlvbihpZCwgcGFzc3dvcmQpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGlkLCBwYXNzd29yZCk7XHJcbiAgICAvLyBSb3V0ZXIucHVzaChcIi9tYWluXCIpfWVsc2V7YWxlcnQoXCJMb2dpbiBmYWlsdXJlXCIpfVxyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIGxvZ2luUmVxdWVzdEFjdGlvbih7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIFJvdXRlci5wdXNoKFwiL21haW5cIik7XHJcbiAgfSwgW2VtYWlsLCBwYXNzd29yZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gb25GaW5pc2g6IGUucHJldmVudGRlZmF1bHQg7J6Q64+Z7Jy866GcIOyEpOygleuQmOyWtCDsnojsnYwoYW50ZClcclxuICAgIDxGb3JtV3JhcHBlciBvbkZpbmlzaD17b25TdWJtaXRGb3JtfT5cclxuICAgICAgPEZvcm1Cb3g+XHJcbiAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPVwidXNlci1pZFwiPuyVhOydtOuUlDwvbGFiZWw+XHJcbiAgICAgICAgPGJyIC8+ICovfVxyXG4gICAgICAgIDxJbnB1dEJveFxyXG4gICAgICAgICAgbmFtZT1cInVzZXItZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbzso7zshozrpbwg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybUJveD5cclxuICAgICAgPEZvcm1Cb3g+XHJcbiAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgPGJyIC8+ICovfVxyXG4gICAgICAgIDxJbnB1dEJveFxyXG4gICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi466W8IOyeheugpe2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybUJveD5cclxuICAgICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8TG9nSW5CdXR0b25cclxuICAgICAgICAgICAgICAvLyBvbkNsaWNrPXtvblN1Ym1pdEZvcm19XHJcbiAgICAgICAgICAgICAgLy8gdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgIC8vIGh0bWxUeXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAvLyBsb2FkaW5nPXtsb2dJbkxvYWRpbmd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAg66Gc6re47J24XHJcbiAgICAgICAgICAgIDwvTG9nSW5CdXR0b24+XHJcbiAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8U2lnblVwQnV0dG9uPu2ajOybkOqwgOyehTwvU2lnblVwQnV0dG9uPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3Bhc3N3b3JkZmluZGVyXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPHA+67mE67CA67KI7Zi466W8IOyeiuycvOyFqOuLpOuptD88L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICAgIDxkaXYgLz5cclxuICAgIDwvRm9ybVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==