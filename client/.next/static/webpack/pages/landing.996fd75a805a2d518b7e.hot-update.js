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
})(["font-size:17px;width:364px;display:inline-block;font-size:14px;margin:auto;padding:6px 0;width:302px;"]);
_c2 = FormBox;
var InputBox = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"]).withConfig({
  displayName: "LoginForm__InputBox",
  componentId: "sc-184ko4u-2"
})(["border-radius:6px;font-size:17px;padding:14px 16px;width:330px;background:#ffffff;border:1px solid #dddfe2;color:#1d2129;font-family:Helvetica,Arial,sans-serif;font-size:12px;height:22px;line-height:16px;padding:0 8px;vertical-align:middle;"]);
_c3 = InputBox;
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "LoginForm__ButtonWrapper",
  componentId: "sc-184ko4u-3"
})(["margin-top:10px;"]); // const style= useMemo(()=>({marginTop: 10}),[]);
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
        lineNumber: 101,
        columnNumber: 5
      }
    }, __jsx(FormBox, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
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
        lineNumber: 105,
        columnNumber: 9
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
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
        lineNumber: 117,
        columnNumber: 9
      }
    })), __jsx(ButtonWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"] // onClick={handleLoginClick}
    , {
      type: "primary",
      htmlType: "submit",
      loading: logInLoading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }
    }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }
    }, "\uD68C\uC6D0\uAC00\uC785"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/passwordfinder",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 11
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    }, "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB2E4\uBA74?")))), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiRm9ybVdyYXBwZXIiLCJzdHlsZWQiLCJGb3JtIiwiRm9ybUJveCIsImRpdiIsIklucHV0Qm94IiwiSW5wdXQiLCJCdXR0b25XcmFwcGVyIiwiTG9naW5Gb3JtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5FcnJvciIsInVzZUlucHV0IiwiZW1haWwiLCJvbkNoYW5nZUVtYWlsIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlRWZmZWN0IiwiYWxlcnQiLCJvblN1Ym1pdEZvcm0iLCJ1c2VDYWxsYmFjayIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUVBLElBQU1BLFdBQVcsR0FBR0MsaUVBQU0sQ0FBQ0MseUNBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSwwREFBakI7S0FBTUYsVztBQU9OLElBQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtBQUFBO0FBQUE7QUFBQSw2R0FBYjtNQUFNRCxPO0FBVU4sSUFBTUUsUUFBUSxHQUFHSixpRUFBTSxDQUFDSywwQ0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHdQQUFkO01BQU1ELFE7QUFnQk4sSUFBTUUsYUFBYSxHQUFHTix5REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdCQUFuQixDLENBSUE7QUFDQTtBQUNBOztNQU5NRyxhOztBQVFOLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QixDQURzQixDQUd0QjtB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QUFBLHdFQURGLENBREYsQ0FkRixDQXpCRixFQTZDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BN0NGO0FBRkY7QUFrREQsQ0FoR0Q7O0dBQU1OLFM7VUFDYUUsdUQsRUFLb0JDLHVELEVBR05LLHVELEVBQ01BLHVEOzs7TUFWakNSLFM7QUFrR1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xhbmRpbmcuOTk2ZmQ3NWE4MDVhMmQ1MThiN2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSBcIi4uL2hvb2tzL3VzZWlucHV0XCI7XHJcbmltcG9ydCB7IGxvZ2luUmVxdWVzdEFjdGlvbiB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcblxyXG4vLy8gLy8vLy8vLy8vLy8gU3R5bGVkIENvbXBvbmVudCAvLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkKEZvcm0pYFxyXG4gIGxpbmUtaGVpZ2h0OiAxLjM0O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUJveCA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHdpZHRoOiAzNjRweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiA2cHggMDtcclxuICB3aWR0aDogMzAycHg7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEJveCA9IHN0eWxlZChJbnB1dClgXHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgd2lkdGg6IDMzMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGZlMjtcclxuICBjb2xvcjogIzFkMjEyOTtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIHBhZGRpbmc6IDAgOHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gO1xyXG5cclxuLy8gY29uc3Qgc3R5bGU9IHVzZU1lbW8oKCk9Pih7bWFyZ2luVG9wOiAxMH0pLFtdKTtcclxuLy8gcmV0dXJuKDxJbnB1dC5TZWFyY2ggc3R5bGU9e3N0eWxlfT48L0lucHV0LlNlYXJjaD4pXHJcbi8vIOumrOuenOuNlOungSDrsKnsp4DtlZjrqbTshJwgc3R5bGUg6r6467CA7IiYIOyeiOqyjOuBlFxyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgLy8g66Gc6re47J247J2EIOychO2VnCDrpqzrjZXsiqQg7Jew6rKw6rOg66asXHJcbiAgLy8gaW5pdGlhbHN0YXRlID51c2VyID4gaXNsb2dnZWRpbihzdGF0ZS51c2VyOiBzdGF0ZS51c2VyLmlzTG9nZ2VkaW7qs7wg64+Z7J28KVxyXG4gIC8vIOq1rOyhsOu2hO2VtO2VoOuLuVxyXG4gIGNvbnN0IHsgbG9nSW5Mb2FkaW5nLCBsb2dJbkVycm9yIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgLy8gaG9va3MvdXNlaW5wdXQuanMg7Zmc7JqpKOudvOydtOu4jOufrOumrCDqsJzrhZAgaG9va3MpXHJcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICAvLyBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKFwiXCIpOyA47KSE7J2EIGhvb2tz66GcIOykhOyehFxyXG4gIC8vIGNvbnN0IG9uQ2hhbmdlSWQgPSB1c2VDYWxsYmFjayhlID0+IHtcclxuICAvLyAgIHNldElkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9LCBbXSk7XHJcbiAgLy8gY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAvLyBjb25zdCBvbkNoYW5nZVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soZSA9PiB7XHJcbiAgLy8gICBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGxvZ0luRXJyb3IpIHtcclxuICAgICAgYWxlcnQobG9nSW5FcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW2xvZ0luRXJyb3JdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgLy8gaWYgKGlzbG9nZ2VkSW4pIHtcclxuICAgIC8vICAgUm91dGVyLnB1c2goXCIvbWFpblwiKTtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgIGFsZXJ0KFwi66Gc6re47J247JeQIOyLpO2MqO2VmOyYgOyKteuLiOuLpC5cIik7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBpZiAoaXNMb2dnZWRJbil7XHJcbiAgICAvLyBkaXNwYXRjaChsb2dpbkFjdGlvbihpZCwgcGFzc3dvcmQpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGlkLCBwYXNzd29yZCk7XHJcbiAgICAvLyBSb3V0ZXIucHVzaChcIi9tYWluXCIpfWVsc2V7YWxlcnQoXCJMb2dpbiBmYWlsdXJlXCIpfVxyXG4gICAgZGlzcGF0Y2goXHJcbiAgICAgIGxvZ2luUmVxdWVzdEFjdGlvbih7XHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuICAgIFJvdXRlci5wdXNoKFwiL21haW5cIik7XHJcbiAgfSwgW2VtYWlsLCBwYXNzd29yZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gb25GaW5pc2g6IGUucHJldmVudGRlZmF1bHQg7J6Q64+Z7Jy866GcIOyEpOygleuQmOyWtCDsnojsnYwoYW50ZClcclxuICAgIDxGb3JtV3JhcHBlciBvbkZpbmlzaD17b25TdWJtaXRGb3JtfSA+XHJcbiAgICAgIDxGb3JtQm94PlxyXG4gICAgICAgIHsvKiA8bGFiZWwgaHRtbEZvcj1cInVzZXItaWRcIj7slYTsnbTrlJQ8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPiAqL31cclxuICAgICAgICA8SW5wdXRCb3hcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWVtYWlsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7J2066mU7J287KO87IaM66W8IOyeheugpe2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm1Cb3g+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgey8qIDxsYWJlbCBodG1sRm9yPVwidXNlci1wYXNzd29yZFwiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgPGJyIC8+ICovfVxyXG4gICAgICAgIDxJbnB1dEJveFxyXG4gICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi466W8IOyeheugpe2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAvLyBvbkNsaWNrPXtoYW5kbGVMb2dpbkNsaWNrfVxyXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgbG9hZGluZz17bG9nSW5Mb2FkaW5nfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEJ1dHRvbj7tmozsm5DqsIDsnoU8L0J1dHRvbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wYXNzd29yZGZpbmRlclwiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxwPuu5hOuwgOuyiO2YuOulvCDsnorsnLzshajri6TrqbQ/PC9wPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICA8ZGl2IC8+XHJcbiAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=