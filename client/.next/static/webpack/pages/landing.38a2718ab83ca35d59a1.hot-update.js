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

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "LoginForm__ButtonWrapper",
  componentId: "sc-184ko4u-0"
})(["margin-top:10px;"]);
_c = ButtonWrapper;
var FormWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"]).withConfig({
  displayName: "LoginForm__FormWrapper",
  componentId: "sc-184ko4u-1"
})(["padding:10px;"]); // const style= useMemo(()=>({marginTop: 10}),[]);
// return(<Input.Search style={style}></Input.Search>)
// 리랜더링 방지하면서 style 꾸밀수 있게끔

_c2 = FormWrapper;

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
  }, [logInError]); // props로 넘기는 함수: callback으로 처리(always)
  // const handleLoginClick = useCallback(e => {
  //   Router.push("/main");
  // });

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
      style: {
        padding: "10px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 5
      }
    }, __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }
    }, __jsx("label", {
      htmlFor: "user-id",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }
    }, "\uC544\uC774\uB514"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      name: "user-email",
      placeholder: "\uC774\uBA54\uC77C\uC8FC\uC18C\uB97C \uC785\uB825\uD558\uC138\uC694.",
      value: email,
      type: "email",
      onChange: onChangeEmail,
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    })), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 7
      }
    }, __jsx("label", {
      htmlFor: "user-password",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }
    }, "\uBE44\uBC00\uBC88\uD638"), __jsx("br", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      name: "user-password",
      type: "password",
      placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694.",
      value: password,
      onChange: onChangePassword,
      required: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }
    })), __jsx(ButtonWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
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
        lineNumber: 103,
        columnNumber: 9
      }
    }, "\uB85C\uADF8\uC778"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/signup",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 13
      }
    }, "\uD68C\uC6D0\uAC00\uC785"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/passwordfinder",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }
    }, __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }, "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB2E4\uBA74?")))), __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 7
      }
    }))
  );
};

_s(LoginForm, "tKkOVmPqh2u0qZseKATViWPnz+M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], _hooks_useinput__WEBPACK_IMPORTED_MODULE_7__["default"], _hooks_useinput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c3 = LoginForm;
/* harmony default export */ __webpack_exports__["default"] = (LoginForm);

var _c, _c2, _c3;

$RefreshReg$(_c, "ButtonWrapper");
$RefreshReg$(_c2, "FormWrapper");
$RefreshReg$(_c3, "LoginForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbkZvcm0uanMiXSwibmFtZXMiOlsiQnV0dG9uV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkZvcm1XcmFwcGVyIiwiRm9ybSIsIkxvZ2luRm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImxvZ0luTG9hZGluZyIsImxvZ0luRXJyb3IiLCJ1c2VJbnB1dCIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInVzZUVmZmVjdCIsImFsZXJ0Iiwib25TdWJtaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiUm91dGVyIiwicHVzaCIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHdCQUFuQjtLQUFNRixhO0FBSU4sSUFBTUcsV0FBVyxHQUFHRixpRUFBTSxDQUFDRyx5Q0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLHFCQUFqQixDLENBSUE7QUFDQTtBQUNBOztNQU5NRCxXOztBQVFOLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QixDQURzQixDQUd0QjtBQUNBO0FBQ0E7O0FBTHNCLHFCQU1lQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLElBQVY7QUFBQSxHQUFOLENBTjFCO0FBQUEsTUFNZEMsWUFOYyxnQkFNZEEsWUFOYztBQUFBLE1BTUFDLFVBTkEsZ0JBTUFBLFVBTkEsRUFRdEI7OztBQVJzQixrQkFT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QUksRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0VBREYsQ0FERixDQWRGLENBekJGLEVBNkNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUE3Q0Y7QUFGRjtBQWtERCxDQXRHRDs7R0FBTU4sUztVQUNhRSx1RCxFQUtvQkMsdUQsRUFHTkssdUQsRUFDTUEsdUQ7OztNQVZqQ1IsUztBQXdHU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbGFuZGluZy4zOGEyNzE4YWI4M2NhMzVkNTlhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tIFwiLi4vaG9va3MvdXNlaW5wdXRcIjtcclxuaW1wb3J0IHsgbG9naW5SZXF1ZXN0QWN0aW9uIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbi8vLyAvLy8vLy8vLy8vLyBTdHlsZWQgQ29tcG9uZW50IC8vLy8vLy8vLy8vLy8vLy8vL1xyXG5jb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQoRm9ybSlgXHJcbiAgcGFkZGluZzogMTBweDtcclxuYDtcclxuXHJcbi8vIGNvbnN0IHN0eWxlPSB1c2VNZW1vKCgpPT4oe21hcmdpblRvcDogMTB9KSxbXSk7XHJcbi8vIHJldHVybig8SW5wdXQuU2VhcmNoIHN0eWxlPXtzdHlsZX0+PC9JbnB1dC5TZWFyY2g+KVxyXG4vLyDrpqzrnpzrjZTrp4Eg67Cp7KeA7ZWY66m07IScIHN0eWxlIOq+uOuwgOyImCDsnojqsozrgZRcclxuXHJcbmNvbnN0IExvZ2luRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIC8vIOuhnOq3uOyduOydhCDsnITtlZwg66as642V7IqkIOyXsOqysOqzoOumrFxyXG4gIC8vIGluaXRpYWxzdGF0ZSA+dXNlciA+IGlzbG9nZ2VkaW4oc3RhdGUudXNlcjogc3RhdGUudXNlci5pc0xvZ2dlZGlu6rO8IOuPmeydvClcclxuICAvLyDqtazsobDrtoTtlbTtlaDri7lcclxuICBjb25zdCB7IGxvZ0luTG9hZGluZywgbG9nSW5FcnJvciB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIC8vIGhvb2tzL3VzZWlucHV0LmpzIO2ZnOyaqSjrnbzsnbTruIzrn6zrpqwg6rCc64WQIGhvb2tzKVxyXG4gIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dChcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoXCJcIik7XHJcbiAgLy8gY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShcIlwiKTsgOOykhOydhCBob29rc+uhnCDspITsnoRcclxuICAvLyBjb25zdCBvbkNoYW5nZUlkID0gdXNlQ2FsbGJhY2soZSA9PiB7XHJcbiAgLy8gICBzZXRJZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgLy8gfSwgW10pO1xyXG4gIC8vIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgLy8gY29uc3Qgb25DaGFuZ2VQYXNzd29yZCA9IHVzZUNhbGxiYWNrKGUgPT4ge1xyXG4gIC8vICAgc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2dJbkVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KGxvZ0luRXJyb3IpO1xyXG4gICAgfVxyXG4gIH0sIFtsb2dJbkVycm9yXSk7XHJcblxyXG4gIC8vIHByb3Bz66GcIOuEmOq4sOuKlCDtlajsiJg6IGNhbGxiYWNr7Jy866GcIOyymOumrChhbHdheXMpXHJcblxyXG4gIC8vIGNvbnN0IGhhbmRsZUxvZ2luQ2xpY2sgPSB1c2VDYWxsYmFjayhlID0+IHtcclxuICAvLyAgIFJvdXRlci5wdXNoKFwiL21haW5cIik7XHJcbiAgLy8gfSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIC8vIGlmIChpc2xvZ2dlZEluKSB7XHJcbiAgICAvLyAgIFJvdXRlci5wdXNoKFwiL21haW5cIik7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICBhbGVydChcIuuhnOq3uOyduOyXkCDsi6TtjKjtlZjsmIDsirXri4jri6QuXCIpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gaWYgKGlzTG9nZ2VkSW4pe1xyXG4gICAgLy8gZGlzcGF0Y2gobG9naW5BY3Rpb24oaWQsIHBhc3N3b3JkKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhpZCwgcGFzc3dvcmQpO1xyXG4gICAgLy8gUm91dGVyLnB1c2goXCIvbWFpblwiKX1lbHNle2FsZXJ0KFwiTG9naW4gZmFpbHVyZVwiKX1cclxuICAgIGRpc3BhdGNoKFxyXG4gICAgICBsb2dpblJlcXVlc3RBY3Rpb24oe1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICBSb3V0ZXIucHVzaChcIi9tYWluXCIpO1xyXG4gIH0sIFtlbWFpbCwgcGFzc3dvcmRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIG9uRmluaXNoOiBlLnByZXZlbnRkZWZhdWx0IOyekOuPmeycvOuhnCDshKTsoJXrkJjslrQg7J6I7J2MKGFudGQpXHJcbiAgICA8Rm9ybVdyYXBwZXIgb25GaW5pc2g9e29uU3VibWl0Rm9ybX0gc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWlkXCI+7JWE7J2065SUPC9sYWJlbD5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWVtYWlsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7J2066mU7J287KO87IaM66W8IOyeheugpe2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmRcIj7ruYTrsIDrsojtmLg8L2xhYmVsPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi466W8IOyeheugpe2VmOyEuOyalC5cIlxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8QnV0dG9uV3JhcHBlcj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAvLyBvbkNsaWNrPXtoYW5kbGVMb2dpbkNsaWNrfVxyXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgaHRtbFR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgbG9hZGluZz17bG9nSW5Mb2FkaW5nfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPEJ1dHRvbj7tmozsm5DqsIDsnoU8L0J1dHRvbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9wYXNzd29yZGZpbmRlclwiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxwPuu5hOuwgOuyiO2YuOulvCDsnorsnLzshajri6TrqbQ/PC9wPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9CdXR0b25XcmFwcGVyPlxyXG4gICAgICA8ZGl2IC8+XHJcbiAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=