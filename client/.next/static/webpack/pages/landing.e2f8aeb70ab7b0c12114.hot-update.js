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
var LogInButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "LoginForm__LogInButton",
  componentId: "sc-184ko4u-4"
})(["margin:0;background-color:#015cab;border:none;border-radius:6px;font-size:18px;line-height:48px;padding:0 16px;width:332px;cursor:pointer;display:inline-block;text-decoration:none;white-space:nowrap;font-weight:bold;color:#ffffff;transition:200ms cubic-bezier(0.08,0.52,0.52,1) background-color,200ms cubic-bezier(0.08,0.52,0.52,1) box-shadow,200ms cubic-bezier(0.08,0.52,0.52,1) transform;"]);
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
        lineNumber: 123,
        columnNumber: 5
      }
    }, __jsx(FormBox, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
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
        lineNumber: 127,
        columnNumber: 9
      }
    })), __jsx(FormBox, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
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
        lineNumber: 139,
        columnNumber: 9
      }
    })), __jsx(ButtonWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/main",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }
    }, __jsx(LogInButton // onClick={onSubmitForm}
    , {
      htmlType: "submit",
      loading: logInLoading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }
    }, "\uB85C\uADF8\uC778")))), __jsx(ButtonWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/passwordfinder",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 11
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }
    }, "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB2E4\uBA74?")))), __jsx(LineDiv, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 7
      }
    }), __jsx(ButtonWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 11
      }
    }, __jsx(SignUpButton, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 13
      }
    }, "\uD68C\uC6D0\uAC00\uC785")))), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiRm9ybVdyYXBwZXIiLCJzdHlsZWQiLCJGb3JtIiwiRm9ybUJveCIsImRpdiIsIklucHV0Qm94IiwiSW5wdXQiLCJCdXR0b25XcmFwcGVyIiwiTG9nSW5CdXR0b24iLCJidXR0b24iLCJTaWduVXBCdXR0b24iLCJMb2dpbkZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkVycm9yIiwidXNlSW5wdXQiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJ1c2VFZmZlY3QiLCJhbGVydCIsIm9uU3VibWl0Rm9ybSIsInVzZUNhbGxiYWNrIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwiY29uc29sZSIsImxvZyIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHQyxpRUFBTSxDQUFDQyx5Q0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDBEQUFqQjtLQUFNRixXO0FBT04sSUFBTUcsT0FBTyxHQUFHRix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLGtGQUFiO01BQU1ELE87QUFRTixJQUFNRSxRQUFRLEdBQUdKLGlFQUFNLENBQUNLLDBDQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsd0tBQWQ7TUFBTUQsUTtBQVlOLElBQU1FLGFBQWEsR0FBR04seURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSx3QkFBbkI7TUFBTUcsYTtBQUlOLElBQU1DLFdBQVcsR0FBR1AseURBQU0sQ0FBQ1EsTUFBVjtBQUFBO0FBQUE7QUFBQSw4WUFBakI7TUFBTUQsVztBQW9C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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0VBREYsQ0FERixDQURGLENBdENGLEVBNkNFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BN0NGLEVBOENFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsQ0FERixDQURGLENBOUNGLEVBc0RFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF0REY7QUFGRjtBQTJERCxDQXpHRDs7R0FBTU4sUztVQUNhRSx1RCxFQUtvQkMsdUQsRUFHTkssdUQsRUFDTUEsdUQ7OztNQVZqQ1IsUztBQTJHU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGFuZGluZy5lMmY4YWViNzBhYjdiMGMxMjExNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZWlucHV0XCI7XHJcbmltcG9ydCB7IGxvZ2luUmVxdWVzdEFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG4vLy8gLy8vLy8vLy8vLy8gU3R5bGVkIENvbXBvbmVudCAvLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkKEZvcm0pYFxyXG4gIGxpbmUtaGVpZ2h0OiAxLjM0O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHdpZHRoOiAzNjRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRCb3ggPSBzdHlsZWQoSW5wdXQpYFxyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHdpZHRoOiAzMzBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRmZTI7XHJcbiAgY29sb3I6ICMxZDIxMjk7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dJbkJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTVjYWI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIHdpZHRoOiAzMzJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zIGN1YmljLWJlemllcigwLjA4LCAwLjUyLCAwLjUyLCAxKSBiYWNrZ3JvdW5kLWNvbG9yLFxyXG4gICAgMjAwbXMgY3ViaWMtYmV6aWVyKDAuMDgsIDAuNTIsIDAuNTIsIDEpIGJveC1zaGFkb3csXHJcbiAgICAyMDBtcyBjdWJpYy1iZXppZXIoMC4wOCwgMC41MiwgMC41MiwgMSkgdHJhbnNmb3JtO1xyXG5gO1xyXG5cclxuY29uc3QgU2lnblVwQnV0dG9uID0gc3R5bGVkKExvZ0luQnV0dG9uKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdhMDllO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuYDtcclxuXHJcblxyXG5cclxuXHJcbi8vIGNvbnN0IHN0eWxlPSB1c2VNZW1vKCgpPT4oe21hcmdpblRvcDogMTB9KSxbXSk7XHJcbi8vIHJldHVybig8SW5wdXQuU2VhcmNoIHN0eWxlPXtzdHlsZX0+PC9JbnB1dC5TZWFyY2g+KVxyXG4vLyDrpqzrnpzrjZTrp4Eg67Cp7KeA7ZWY66m07IScIHN0eWxlIOq+uOuwgOyImCDsnojqsozrgZRcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIC8vIOuhnOq3uOyduOydhCDsnITtlZwg66as642V7IqkIOyXsOqysOqzoOumrFxyXG4gIC8vIGluaXRpYWxzdGF0ZSA+dXNlciA+IGlzbG9nZ2VkaW4oc3RhdGUudXNlcjogc3RhdGUudXNlci5pc0xvZ2dlZGlu6rO8IOuPmeydvClcclxuICAvLyDqtazsobDrtoTtlbTtlaDri7lcclxuICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIC8vIGhvb2tzL3VzZWlucHV0LmpzIO2ZnOyaqSjrnbzsnbTruIzrn6zrpqwg6rCc64WQIGhvb2tzKVxyXG4gIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgLy8gY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShcIlwiKTsgOOykhOydhCBob29rc+uhnCDspITsnoRcclxuICAvLyBjb25zdCBvbkNoYW5nZUlkID0gdXNlQ2FsbGJhY2soZSA9PiB7XHJcbiAgLy8gICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgLy8gfSwgW10pO1xyXG4gIC8vIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy8gY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKGUgPT4ge1xyXG4gIC8vICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2dJbkVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGxvZ0luRXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtsb2dJbkVycm9yXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIC8vIGlmIChpc2xvZ2dlZEluKSB7XHJcbiAgICAvLyAgIFJvdXRlci5wdXNoKFwiL21haW5cIik7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBhbGVydChcIuuhnOq3uOyduOyXkCDsi6TtjKjtlZjsmIDsirXri4jri6QuXCIpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYgKGlzTG9nZ2VkSW4pe1xyXG4gICAgLy8gZGlzcGF0Y2gobG9naW5BY3Rpb24oaWQsIHBhc3N3b3JkKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhpZCwgcGFzc3dvcmQpO1xyXG4gICAgLy8gUm91dGVyLnB1c2goXCIvbWFpblwiKX1lbHNle2FsZXJ0KFwiTG9naW4gZmFpbHVyZVwiKX1cclxuICAgIGRpc3BhdGNoKFxyXG4gICAgICBsb2dpblJlcXVlc3RBY3Rpb24oe1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICBSb3V0ZXIucHVzaChcIi9tYWluXCIpO1xyXG4gIH0sIFtlbWFpbCwgcGFzc3dvcmRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIG9uRmluaXNoOiBlLnByZXZlbnRkZWZhdWx0IOyekOuPmeycvOuhnCDshKTsoJXrkJjslrQg7J6I7J2MKGFudGQpXHJcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0+XHJcbiAgICAgIDxGb3JtQm94PlxyXG4gICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj7slYTsnbTrlJQ8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPiAqL31cclxuICAgICAgICA8SW5wdXRCb3hcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWVtYWlsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7J2066mU7J287KO87IaM66W8IOyeheugpe2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm1Cb3g+XHJcbiAgICAgIDxGb3JtQm94PlxyXG4gICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmRcIj7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPiAqL31cclxuICAgICAgICA8SW5wdXRCb3hcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlZjshLjsmpQuXCJcclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm1Cb3g+XHJcbiAgICAgIDxCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbWFpblwiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxMb2dJbkJ1dHRvblxyXG4gICAgICAgICAgICAgIC8vIG9uQ2xpY2s9e29uU3VibWl0Rm9ybX1cclxuICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgbG9hZGluZz17bG9nSW5Mb2FkaW5nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg66Gc6re47J24XHJcbiAgICAgICAgICAgIDwvTG9nSW5CdXR0b24+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICAgIDxCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcGFzc3dvcmRmaW5kZXJcIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8cD7ruYTrsIDrsojtmLjrpbwg7J6K7Jy87IWo64uk66m0PzwvcD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuICAgICAgPExpbmVEaXYgLz5cclxuICAgICAgPEJ1dHRvbldyYXBwZXI+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8U2lnblVwQnV0dG9uPu2ajOybkOqwgOyehTwvU2lnblVwQnV0dG9uPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG5cclxuICAgICAgPGRpdiAvPlxyXG4gICAgPC9Gb3JtV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9