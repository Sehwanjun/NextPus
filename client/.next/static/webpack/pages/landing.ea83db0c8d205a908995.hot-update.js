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
})(["padding-top:8px;"]); // const style= useMemo(()=>({marginTop: 10}),[]);
// return(<Input.Search style={style}></Input.Search>)
// 리랜더링 방지하면서 style 꾸밀수 있게끔

_c4 = ButtonWrapper;

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
        lineNumber: 95,
        columnNumber: 5
      }
    }, __jsx(FormBox, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
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
        lineNumber: 99,
        columnNumber: 9
      }
    })), __jsx(FormBox, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
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
        lineNumber: 111,
        columnNumber: 9
      }
    })), __jsx(ButtonWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 11
      }
    }, __jsx(LoginButton, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    }, "// onClick=", handleLoginClick, "type=\"primary\" htmlType=\"submit\" loading=", logInLoading, "> \uB85C\uADF8\uC778")), " "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    }, __jsx(SignUpButton, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }
    }, "\uD68C\uC6D0\uAC00\uC785"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/passwordfinder",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }
    }, "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB2E4\uBA74?")))), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 7
      }
    }))
  );
};

_s(LoginForm, "tKkOVmPqh2u0qZseKATViWPnz+M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useinput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useinput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c5 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "FormWrapper");
$RefreshReg$(_c2, "FormBox");
$RefreshReg$(_c3, "InputBox");
$RefreshReg$(_c4, "ButtonWrapper");
$RefreshReg$(_c5, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiRm9ybVdyYXBwZXIiLCJzdHlsZWQiLCJGb3JtIiwiRm9ybUJveCIsImRpdiIsIklucHV0Qm94IiwiSW5wdXQiLCJCdXR0b25XcmFwcGVyIiwiTG9naW5Gb3JtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsInVzZUlucHV0IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlRWZmZWN0IiwiYWxlcnQiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIiwiaGFuZGxlTG9naW5DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLGlFQUFNLENBQUNDLHlDQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsMERBQWpCO0tBQU1GLFc7QUFPTixJQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0ZBQWI7TUFBTUQsTztBQVFOLElBQU1FLFFBQVEsR0FBR0osaUVBQU0sQ0FBQ0ssMENBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx3S0FBZDtNQUFNRCxRO0FBWU4sSUFBTUUsYUFBYSxHQUFHTix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdCQUFuQixDLENBSUE7QUFDQTtBQUNBOztNQU5NRyxhOztBQVFOLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxF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WDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0VBREYsQ0FERixDQW5CRixDQXpCRixFQWtERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BbERGO0FBRkY7QUF1REQsQ0FyR0Q7O0dBQU1OLFM7VUFDYUUsdUQsRUFLb0JDLHVELEVBR05LLHVELEVBQ01BLHVEOzs7TUFWakNSLFM7QUF1R1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhbmRpbmcuZWE4M2RiMGM4ZDIwNWE5MDg5OTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZWlucHV0XCI7XHJcbmltcG9ydCB7IGxvZ2luUmVxdWVzdEFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG4vLy8gLy8vLy8vLy8vLy8gU3R5bGVkIENvbXBvbmVudCAvLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkKEZvcm0pYFxyXG4gIGxpbmUtaGVpZ2h0OiAxLjM0O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHdpZHRoOiAzNjRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXRCb3ggPSBzdHlsZWQoSW5wdXQpYFxyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHdpZHRoOiAzMzBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRmZTI7XHJcbiAgY29sb3I6ICMxZDIxMjk7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbmA7XHJcblxyXG4vLyBjb25zdCBzdHlsZT0gdXNlTWVtbygoKT0+KHttYXJnaW5Ub3A6IDEwfSksW10pO1xyXG4vLyByZXR1cm4oPElucHV0LlNlYXJjaCBzdHlsZT17c3R5bGV9PjwvSW5wdXQuU2VhcmNoPilcclxuLy8g66as656c642U66eBIOuwqeyngO2VmOuptOyEnCBzdHlsZSDqvrjrsIDsiJgg7J6I6rKM64GUXHJcblxyXG5jb25zdCBMb2dpbkZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAvLyDroZzqt7jsnbjsnYQg7JyE7ZWcIOumrOuNleyKpCDsl7DqsrDqs6DrpqxcclxuICAvLyBpbml0aWFsc3RhdGUgPnVzZXIgPiBpc2xvZ2dlZGluKHN0YXRlLnVzZXI6IHN0YXRlLnVzZXIuaXNMb2dnZWRpbuqzvCDrj5nsnbwpXHJcbiAgLy8g6rWs7KGw67aE7ZW07ZWg64u5XHJcbiAgY29uc3QgeyBsb2dJbkxvYWRpbmcsIGxvZ0luRXJyb3IgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAvLyBob29rcy91c2VpbnB1dC5qcyDtmZzsmqko65287J2067iM65+s66asIOqwnOuFkCBob29rcylcclxuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIC8vIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoXCJcIik7IDjspITsnYQgaG9va3ProZwg7KSE7J6EXHJcbiAgLy8gY29uc3Qgb25DaGFuZ2VJZCA9IHVzZUNhbGxiYWNrKGUgPT4ge1xyXG4gIC8vICAgc2V0SWQoZS50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH0sIFtdKTtcclxuICAvLyBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIC8vIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSB1c2VDYWxsYmFjayhlID0+IHtcclxuICAvLyAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobG9nSW5FcnJvcikge1xyXG4gICAgICBhbGVydChsb2dJbkVycm9yKTtcclxuICAgIH1cclxuICB9LCBbbG9nSW5FcnJvcl0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAvLyBpZiAoaXNsb2dnZWRJbikge1xyXG4gICAgLy8gICBSb3V0ZXIucHVzaChcIi9tYWluXCIpO1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgYWxlcnQoXCLroZzqt7jsnbjsl5Ag7Iuk7Yyo7ZWY7JiA7Iq164uI64ukLlwiKTtcclxuICAgIC8vIH1cclxuICAgIC8vIGlmIChpc0xvZ2dlZEluKXtcclxuICAgIC8vIGRpc3BhdGNoKGxvZ2luQWN0aW9uKGlkLCBwYXNzd29yZCkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coaWQsIHBhc3N3b3JkKTtcclxuICAgIC8vIFJvdXRlci5wdXNoKFwiL21haW5cIil9ZWxzZXthbGVydChcIkxvZ2luIGZhaWx1cmVcIil9XHJcbiAgICBkaXNwYXRjaChcclxuICAgICAgbG9naW5SZXF1ZXN0QWN0aW9uKHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgUm91dGVyLnB1c2goXCIvbWFpblwiKTtcclxuICB9LCBbZW1haWwsIHBhc3N3b3JkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAvLyBvbkZpbmlzaDogZS5wcmV2ZW50ZGVmYXVsdCDsnpDrj5nsnLzroZwg7ISk7KCV65CY7Ja0IOyeiOydjChhbnRkKVxyXG4gICAgPEZvcm1XcmFwcGVyIG9uRmluaXNoPXtvblN1Ym1pdEZvcm19PlxyXG4gICAgICA8Rm9ybUJveD5cclxuICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7JWE7J2065SUPC9sYWJlbD5cclxuICAgICAgICA8YnIgLz4gKi99XHJcbiAgICAgICAgPElucHV0Qm94XHJcbiAgICAgICAgICBuYW1lPVwidXNlci1lbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOuplOydvOyjvOyGjOulvCDsnoXroKXtlZjshLjsmpQuXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VFbWFpbH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtQm94PlxyXG4gICAgICA8Rm9ybUJveD5cclxuICAgICAgICB7LyogPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLXBhc3N3b3JkXCI+67mE67CA67KI7Zi4PC9sYWJlbD5cclxuICAgICAgICA8YnIgLz4gKi99XHJcbiAgICAgICAgPElucHV0Qm94XHJcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZWY7IS47JqULlwiXHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VQYXNzd29yZH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Gb3JtQm94PlxyXG4gICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxMb2dpbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAvLyBvbkNsaWNrPXtoYW5kbGVMb2dpbkNsaWNrfVxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICBodG1sVHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgbG9hZGluZz17bG9nSW5Mb2FkaW5nfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg66Gc6re47J24XHJcbiAgICAgICAgICAgIDwvTG9naW5CdXR0b24+XHJcbiAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8U2lnblVwQnV0dG9uPu2ajOybkOqwgOyehTwvU2lnblVwQnV0dG9uPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3Bhc3N3b3JkZmluZGVyXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPHA+67mE67CA67KI7Zi466W8IOyeiuycvOyFqOuLpOuptD88L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0J1dHRvbldyYXBwZXI+XHJcbiAgICAgIDxkaXYgLz5cclxuICAgIDwvRm9ybVdyYXBwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==