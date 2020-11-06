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
})(["background-color:#47a09e;font-size:16px;"]);
_c6 = SignUpButton;
var LineDiv = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "LoginForm__LineDiv",
  componentId: "sc-184ko4u-6"
})(["align-items:center;border-bottom:1px solid #dadde1;display:flex;margin:20px 16px;text-align:center;"]); // const style= useMemo(()=>({marginTop: 10}),[]);
// return(<Input.Search style={style}></Input.Search>)
// 리랜더링 방지하면서 style 꾸밀수 있게끔

_c7 = LineDiv;

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
        lineNumber: 128,
        columnNumber: 5
      }
    }, __jsx(FormBox, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
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
        lineNumber: 132,
        columnNumber: 9
      }
    })), __jsx(FormBox, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
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
        lineNumber: 144,
        columnNumber: 9
      }
    })), __jsx(ButtonWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/main",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 11
      }
    }, __jsx(LogInButton // onClick={onSubmitForm}
    , {
      htmlType: "submit",
      loading: logInLoading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 13
      }
    }, "\uB85C\uADF8\uC778")))), __jsx(ButtonWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/passwordfinder",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 13
      }
    }, "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB2E4\uBA74?")))), __jsx(LineDiv, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 7
      }
    }), __jsx(ButtonWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }
    }, __jsx(SignUpButton, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 13
      }
    }, "\uD68C\uC6D0\uAC00\uC785")))), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 7
      }
    }))
  );
};

_s(LoginForm, "tKkOVmPqh2u0qZseKATViWPnz+M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useinput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useinput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c8 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;

$RefreshReg$(_c, "FormWrapper");
$RefreshReg$(_c2, "FormBox");
$RefreshReg$(_c3, "InputBox");
$RefreshReg$(_c4, "ButtonWrapper");
$RefreshReg$(_c5, "LogInButton");
$RefreshReg$(_c6, "SignUpButton");
$RefreshReg$(_c7, "LineDiv");
$RefreshReg$(_c8, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiRm9ybVdyYXBwZXIiLCJzdHlsZWQiLCJGb3JtIiwiRm9ybUJveCIsImRpdiIsIklucHV0Qm94IiwiSW5wdXQiLCJCdXR0b25XcmFwcGVyIiwiTG9nSW5CdXR0b24iLCJidXR0b24iLCJTaWduVXBCdXR0b24iLCJMaW5lRGl2IiwiTG9naW5Gb3JtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsInVzZUlucHV0IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlRWZmZWN0IiwiYWxlcnQiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUVBLElBQU1BLFdBQVcsR0FBR0MsaUVBQU0sQ0FBQ0MseUNBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwwREFBakI7S0FBTUYsVztBQU9OLElBQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSxrRkFBYjtNQUFNRCxPO0FBUU4sSUFBTUUsUUFBUSxHQUFHSixpRUFBTSxDQUFDSywwQ0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHdLQUFkO01BQU1ELFE7QUFZTixJQUFNRSxhQUFhLEdBQUdOLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0JBQW5CO01BQU1HLGE7QUFJTixJQUFNQyxXQUFXLEdBQUdQLHlEQUFNLENBQUNRLE1BQVY7QUFBQTtBQUFBO0FBQUEsOFlBQWpCO01B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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsQ0FERixDQURGLENBekJGLEVBc0NFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0VBREYsQ0FERixDQURGLENBdENGLEVBNkNFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BN0NGLEVBOENFLE1BQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsQ0FERixDQURGLENBOUNGLEVBc0RFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF0REY7QUFGRjtBQTJERCxDQXpHRDs7R0FBTU4sUztVQUNhRSx1RCxFQUtvQkMsdUQsRUFHTkssdUQsRUFDTUEsdUQ7OztNQVZqQ1IsUztBQTJHU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGFuZGluZy5jNWM2MDE3ZjQwNzIzZTM5ZmM4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZWlucHV0XCI7XHJcbmltcG9ydCB7IGxvZ2luUmVxdWVzdEFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG4vLy8gLy8vLy8vLy8vLy8gU3R5bGVkIENvbXBvbmVudCAvLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkKEZvcm0pYFxyXG4gIGxpbmUtaGVpZ2h0OiAxLjM0O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHdpZHRoOiAzNjRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRCb3ggPSBzdHlsZWQoSW5wdXQpYFxyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHdpZHRoOiAzMzBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRmZTI7XHJcbiAgY29sb3I6ICMxZDIxMjk7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dJbkJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTVjYWI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIHdpZHRoOiAzMzJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRyYW5zaXRpb246IDIwMG1zIGN1YmljLWJlemllcigwLjA4LCAwLjUyLCAwLjUyLCAxKSBiYWNrZ3JvdW5kLWNvbG9yLFxyXG4gICAgMjAwbXMgY3ViaWMtYmV6aWVyKDAuMDgsIDAuNTIsIDAuNTIsIDEpIGJveC1zaGFkb3csXHJcbiAgICAyMDBtcyBjdWJpYy1iZXppZXIoMC4wOCwgMC41MiwgMC41MiwgMSkgdHJhbnNmb3JtO1xyXG5gO1xyXG5cclxuY29uc3QgU2lnblVwQnV0dG9uID0gc3R5bGVkKExvZ0luQnV0dG9uKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdhMDllO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuYDtcclxuXHJcbmNvbnN0IExpbmVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkYWRkZTE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDIwcHggMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmA7XHJcblxyXG4vLyBjb25zdCBzdHlsZT0gdXNlTWVtbygoKT0+KHttYXJnaW5Ub3A6IDEwfSksW10pO1xyXG4vLyByZXR1cm4oPElucHV0LlNlYXJjaCBzdHlsZT17c3R5bGV9PjwvSW5wdXQuU2VhcmNoPilcclxuLy8g66as656c642U66eBIOuwqeyngO2VmOuptOyEnCBzdHlsZSDqvrjrsIDsiJgg7J6I6rKM64GUXHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAvLyDroZzqt7jsnbjsnYQg7JyE7ZWcIOumrOuNleyKpCDsl7DqsrDqs6DrpqxcclxuICAvLyBpbml0aWFsc3RhdGUgPnVzZXIgPiBpc2xvZ2dlZGluKHN0YXRlLnVzZXI6IHN0YXRlLnVzZXIuaXNMb2dnZWRpbuqzvCDrj5nsnbwpXHJcbiAgLy8g6rWs7KGw67aE7ZW07ZWg64u5XHJcbiAgY29uc3QgeyBsb2dJbkxvYWRpbmcsIGxvZ0luRXJyb3IgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAvLyBob29rcy91c2VpbnB1dC5qcyDtmZzsmqko65287J2067iM65+s66asIOqwnOuFkCBob29rcylcclxuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIC8vIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoXCJcIik7IDjspITsnYQgaG9va3ProZwg7KSE7J6EXHJcbiAgLy8gY29uc3Qgb25DaGFuZ2VJZCA9IHVzZUNhbGxiYWNrKGUgPT4ge1xyXG4gIC8vICAgc2V0SWQoZS50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH0sIFtdKTtcclxuICAvLyBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjayhlID0+IHtcclxuICAvLyAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9nSW5FcnJvcikge1xyXG4gICAgICBhbGVydChsb2dJbkVycm9yKTtcclxuICAgIH1cclxuICB9LCBbbG9nSW5FcnJvcl0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAvLyBpZiAoaXNsb2dnZWRJbikge1xyXG4gICAgLy8gICBSb3V0ZXIucHVzaChcIi9tYWluXCIpO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgYWxlcnQoXCLroZzqt7jsnbjsl5Ag7Iuk7Yyo7ZWY7JiA7Iq164uI64ukLlwiKTtcclxuICAgIC8vIH1cclxuICAgIC8vIGlmIChpc0xvZ2dlZEluKXtcclxuICAgIC8vIGRpc3BhdGNoKGxvZ2luQWN0aW9uKGlkLCBwYXNzd29yZCkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coaWQsIHBhc3N3b3JkKTtcclxuICAgIC8vIFJvdXRlci5wdXNoKFwiL21haW5cIil9ZWxzZXthbGVydChcIkxvZ2luIGZhaWx1cmVcIil9XHJcbiAgICBkaXNwYXRjaChcclxuICAgICAgbG9naW5SZXF1ZXN0QWN0aW9uKHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgUm91dGVyLnB1c2goXCIvbWFpblwiKTtcclxuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyBvbkZpbmlzaDogZS5wcmV2ZW50ZGVmYXVsdCDsnpDrj5nsnLzroZwg7ISk7KCV65CY7Ja0IOyeiOydjChhbnRkKVxyXG4gICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICA8Rm9ybUJveD5cclxuICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7JWE7J2065SUPC9sYWJlbD5cclxuICAgICAgICA8YnIgLz4gKi99XHJcbiAgICAgICAgPElucHV0Qm94XHJcbiAgICAgICAgICBuYW1lPVwidXNlci1lbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOuplOydvOyjvOyGjOulvCDsnoXroKXtlZjshLjsmpQuXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtQm94PlxyXG4gICAgICA8Rm9ybUJveD5cclxuICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICA8YnIgLz4gKi99XHJcbiAgICAgICAgPElucHV0Qm94XHJcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtQm94PlxyXG4gICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8TGluayBocmVmPVwiL21haW5cIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8TG9nSW5CdXR0b25cclxuICAgICAgICAgICAgICAvLyBvbkNsaWNrPXtvblN1Ym1pdEZvcm19XHJcbiAgICAgICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGxvYWRpbmc9e2xvZ0luTG9hZGluZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgICAgICA8L0xvZ0luQnV0dG9uPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8TGluayBocmVmPVwiL3Bhc3N3b3JkZmluZGVyXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPHA+67mE67CA67KI7Zi466W8IOyeiuycvOyFqOuLpOuptD88L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICAgIDxMaW5lRGl2IC8+XHJcbiAgICAgIDxCdXR0b25XcmFwcGVyPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPFNpZ25VcEJ1dHRvbj7tmozsm5DqsIDsnoU8L1NpZ25VcEJ1dHRvbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvQnV0dG9uV3JhcHBlcj5cclxuXHJcbiAgICAgIDxkaXYgLz5cclxuICAgIDwvRm9ybVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==