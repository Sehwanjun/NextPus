webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(signUp),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(follow),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(unfollow),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchFollow),
    _marked10 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchUnfollow),
    _marked11 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);

// import axios from "axios";

 // saga's generator
// const gen = function* () {console.log(1); yield; console.log(2); yield 4;}
// const generator = gen() --> 객체생성,
// generator.next() --> gen 실행 '1', 재실행 '2'(value: 4, done: true)
// 중단점이 있는 함수(yield는 멈춤, yield뒤에 값: value)
// while(true){yield '무한';} : 무한반복이 아니라 매번 중단됨('무한', done:false)
// function* watchLogin(){yield take('LOG_IN', logIn)}
// 5. 여긴 generator함수 아님(data를 받아서 data와 함께 api에 넣음 - 바로 실행)!!
// data는 아래함수의 action.data

function logInAPI(data, a, b) {
  return axios.post("/api/login", data);
} // 4. logIn 실행
// 6. loginAPI를 실행시켜서 result로 결과를 받음
// put: dispatch와 같음(액션객체를 dispatch)
// call: 동기함수실행
// call이라 axios.post('api/login).then(()=>{yield put({type: ...})})
// fork였다면 그냥 axios.post('api/login)와 같음
// 즉, API에 post한 다음 끝나면 다음것 put실행한다(fork면 명령내리고 받기전에 바로다음것)
// yield는 await과 비슷한데 fork는 이를 무시하게끔 즉시실행하는 것


function logIn(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
            data: action.data
          });

        case 5:
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          _context.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
            error: _context.t0.response.data
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
} // 8. 성공 결과는 result.data, 실패 결과는 err.response.data에 담김


function logOutAPI() {
  return axios.post("/api/logout");
}

function logOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"] // data: result.data,

          });

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
            error: _context2.t0.response.data
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
}

function signUpAPI() {
  return axios.post("/api/signUp");
}

function signUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function signUp$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context3.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
          });

        case 5:
          _context3.next = 12;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          _context3.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
            error: _context3.t0.response.data
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 7]]);
}

function followAPI() {
  return axios.post("/api/follow");
}

function follow(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function follow$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context4.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
            data: action.data
          });

        case 5:
          _context4.next = 12;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
            error: _context4.t0.response.data
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
}

function unfollowAPI() {
  return axios.post("/api/unfollow");
}

function unfollow(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function unfollow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context5.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
            data: action.data
          });

        case 5:
          _context5.next = 12;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
            error: _context5.t0.response.data
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 7]]);
} // 9. yield, take 단점: 딱 한번밖에 안받음(일회용) 한번쓰면 사라져버림(따라서 while로 감싸야)
// while, take는 동기적으로 동작, takeEvery는 비동기로 동작
// 직관적이지 않고 보기에 그래서 while대신 takeEvery로 동작
// takeLatest: ex. 실수로 로그인버튼 클릭두번 따닥시 takeevery는 둘다실행하기에 대체
// 첫번째것만 하고싶으면 takeLeading
// but, 응답을 한개 취소하는거지 요청을 취소하지는 않음 (요청 2개감)
// 이를 해결하기 위한 throttle, 3000(3초내에 딱 한번만 실행)
// throttle 잘 안쓰고 보통 takelatest하고 서버에서 요청을 검토해보고 막도록 함
// 10. 서버구현 아직 안해서 call logInAPI 다 에러날 것이라 delay로 임시대체
// 3. take: LOG_IN액션이 실행될때까지 기다리겠다. 그리고 logIn실행
//    logIn관련된 매개변수(data)가 logIn()함수의 action에 전달
//    action.type: LOG_IN_REQUEST, actin.data: login data 포함


function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchSignUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchFollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchFollow$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchUnfollow() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchUnfollow$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
} // 1. all: 배열 내의 것들을 동시실행(배열을 받음)
// 2. fork, call: 함수실행 명령어(fork와 call의 차이점 존재함)
// fork: 비동기함수호출(기다리지않고 바로 다음것 실행), call: 동기함수호출(기다린후 실행)
// # call, yield등을 쓰는 이유: test할 때 편함(a.next()함수실행으로 하나씩 버그검사, test코드 짜둬야 함)


function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsInNpZ25VcCIsImZvbGxvdyIsInVuZm9sbG93Iiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ1c2VyU2FnYSIsImxvZ0luQVBJIiwiZGF0YSIsImEiLCJiIiwiYXhpb3MiLCJwb3N0IiwiYWN0aW9uIiwiZGVsYXkiLCJwdXQiLCJ0eXBlIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsImVycm9yIiwicmVzcG9uc2UiLCJsb2dPdXRBUEkiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJzaWduVXBBUEkiLCJTSUdOX1VQX1NVQ0NFU1MiLCJjb25zb2xlIiwiU0lHTl9VUF9GQUlMVVJFIiwiZm9sbG93QVBJIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsInVuZm9sbG93QVBJIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfT1VUX1JFUVVFU1QiLCJTSUdOX1VQX1JFUVVFU1QiLCJGT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1JFUVVFU1QiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBeUNVQSxLO21HQXdCQUMsTTttR0FvQkFDLE07bUdBb0JBQyxNO21HQXFCQUMsUTttR0E4QkFDLFU7bUdBSUFDLFc7bUdBSUFDLFc7bUdBSUFDLFc7b0dBSUFDLGE7b0dBUWVDLFE7O0FBcEx6QjtBQUNBO0NBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQSxTQUFTQyxRQUFULENBQWtCQyxJQUFsQixFQUF3QkMsQ0FBeEIsRUFBMkJDLENBQTNCLEVBQThCO0FBQzVC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O0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU04QixxRUFBVSxDQUFDSSw2REFBRCxFQUFpQnZDLE1BQWpCLENBQWhCOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUlBLFNBQVVNLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU02QixxRUFBVSxDQUFDSywrREFBRCxFQUFtQnZDLFFBQW5CLENBQWhCOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ2UsU0FBVU0sUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTWtDLDhEQUFHLENBQUMsQ0FDUkMsK0RBQUksQ0FBQ3JDLFdBQUQsQ0FESSxFQUVScUMsK0RBQUksQ0FBQ3BDLGFBQUQsQ0FGSSxFQUdSb0MsK0RBQUksQ0FBQ3hDLFVBQUQsQ0FISSxFQUlSd0MsK0RBQUksQ0FBQ3ZDLFdBQUQsQ0FKSSxFQUtSdUMsK0RBQUksQ0FBQ3RDLFdBQUQsQ0FMSSxDQUFELENBQVQ7O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lYmQxMWI3Mjk3MGYyMzdlZmIxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBkZWxheSwgcHV0LCBhbGwsIGZvcmssIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7XHJcbiAgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICBVTkZPTExPV19SRVFVRVNULFxyXG4gIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9SRVFVRVNULFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIFNJR05fVVBfU1VDQ0VTUyxcclxuICBTSUdOX1VQX0ZBSUxVUkUsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuLy8gc2FnYSdzIGdlbmVyYXRvclxyXG4vLyBjb25zdCBnZW4gPSBmdW5jdGlvbiogKCkge2NvbnNvbGUubG9nKDEpOyB5aWVsZDsgY29uc29sZS5sb2coMik7IHlpZWxkIDQ7fVxyXG4vLyBjb25zdCBnZW5lcmF0b3IgPSBnZW4oKSAtLT4g6rCd7LK07IOd7ISxLFxyXG4vLyBnZW5lcmF0b3IubmV4dCgpIC0tPiBnZW4g7Iuk7ZaJICcxJywg7J6s7Iuk7ZaJICcyJyh2YWx1ZTogNCwgZG9uZTogdHJ1ZSlcclxuLy8g7KSR64uo7KCQ7J20IOyeiOuKlCDtlajsiJgoeWllbGTripQg66mI7LakLCB5aWVsZOuSpOyXkCDqsJI6IHZhbHVlKVxyXG4vLyB3aGlsZSh0cnVlKXt5aWVsZCAn66y07ZWcJzt9IDog66y07ZWc67CY67O17J20IOyVhOuLiOudvCDrp6Trsogg7KSR64uo65CoKCfrrLTtlZwnLCBkb25lOmZhbHNlKVxyXG4vLyBmdW5jdGlvbiogd2F0Y2hMb2dpbigpe3lpZWxkIHRha2UoJ0xPR19JTicsIGxvZ0luKX1cclxuXHJcbi8vIDUuIOyXrOq4tCBnZW5lcmF0b3LtlajsiJgg7JWE64uYKGRhdGHrpbwg67Cb7JWE7IScIGRhdGHsmYAg7ZWo6ruYIGFwaeyXkCDrhKPsnYwgLSDrsJTroZwg7Iuk7ZaJKSEhXHJcbi8vIGRhdGHripQg7JWE656Y7ZWo7IiY7J2YIGFjdGlvbi5kYXRhXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEsIGEsIGIpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9naW5cIiwgZGF0YSk7XHJcbn1cclxuXHJcbi8vIDQuIGxvZ0luIOyLpO2WiVxyXG4vLyA2LiBsb2dpbkFQSeulvCDsi6Ttlonsi5zsvJzshJwgcmVzdWx066GcIOqysOqzvOulvCDrsJvsnYxcclxuLy8gcHV0OiBkaXNwYXRjaOyZgCDqsJnsnYwo7JWh7IWY6rCd7LK066W8IGRpc3BhdGNoKVxyXG4vLyBjYWxsOiDrj5nquLDtlajsiJjsi6TtlolcclxuLy8gY2FsbOydtOudvCBheGlvcy5wb3N0KCdhcGkvbG9naW4pLnRoZW4oKCk9Pnt5aWVsZCBwdXQoe3R5cGU6IC4uLn0pfSlcclxuLy8gZm9ya+yYgOuLpOuptCDqt7jrg6UgYXhpb3MucG9zdCgnYXBpL2xvZ2luKeyZgCDqsJnsnYxcclxuLy8g7KaJLCBBUEnsl5AgcG9zdO2VnCDri6TsnYwg64Gd64KY66m0IOuLpOydjOqygyBwdXTsi6TtlontlZzri6QoZm9ya+uptCDrqoXroLnrgrTrpqzqs6Ag67Cb6riw7KCE7JeQIOuwlOuhnOuLpOydjOqygylcclxuLy8geWllbGTripQgYXdhaXTqs7wg67mE7Iq37ZWc642wIGZvcmvripQg7J2066W8IOustOyLnO2VmOqyjOuBlCDsponsi5zsi6TtlontlZjripQg6rKDXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAvLyBsb2dpbkFQSShhY3Rpb24uZGF0YSnqs7wg6rCZ7J2A65y7OiDtlajsiJjtmLjstpwg67Cp7Iud7J20IGNhbGzsnYAg7J2066CH6rKMXHJcbiAgICAvLyDssqvrsojsp7jsnpDrpqzqsIAg7ZWo7IiYLCDqt7jri6TsnYzsnpDrpqzrtoDthLAg66ek6rCc67OA7IiYKOyduOyImClcclxuICAgIC8vIOymiSwgYWN0aW9u7JeQ7IScIGRhdGHqurzrgrTshJwgQVBJ7ZWo7IiY7JeQIOyghOuLrFxyXG4gICAgLy8g7J6E7Iuc67O066WYIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhLCBcImFcIiwgXCJiXCIpO1xyXG4gICAgLy8g7J6E7Iuc67O066WYIHlpZWxkIHB1dCh7IHR5cGU6IFwiTE9HX0lOX1NVQ0NFU1NcIiwgZGF0YTogcmVzdWx0LmRhdGEgfSk7XHJcbiAgICAvLyBsb2dpblJlcXVlc3Tsl5DshJwg67Cb7J2AIOqygyDrsJTroZwgc3VjY2Vzc+uhnCDrs7TrgrTrsoTrprwo7J6E7Iuc67Cp7Y64KVxyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9HX0lOX1NVQ0NFU1MsIGRhdGE6IGFjdGlvbi5kYXRhIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgLy8gNy4g7JqU7LKt7J20IOyLpO2MqO2VoCDqsr3smrDrpbwg7JyE7ZW0XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbi8vIDguIOyEseqztSDqsrDqs7zripQgcmVzdWx0LmRhdGEsIOyLpO2MqCDqsrDqs7zripQgZXJyLnJlc3BvbnNlLmRhdGHsl5Ag64u06rmAXHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ291dFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAvLyDsnoTsi5zrs7TrpZggY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAvLyBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvc2lnblVwXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvZm9sbG93XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5mb2xsb3dBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3VuZm9sbG93XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA5LiB5aWVsZCwgdGFrZSDri6jsoJA6IOuUsSDtlZzrsojrsJbsl5Ag7JWI67Cb7J2MKOydvO2ajOyaqSkg7ZWc67KI7JOw66m0IOyCrOudvOyguOuyhOumvCjrlLDrnbzshJwgd2hpbGXroZwg6rCQ7Iu47JW8KVxyXG4vLyB3aGlsZSwgdGFrZeuKlCDrj5nquLDsoIHsnLzroZwg64+Z7J6RLCB0YWtlRXZlcnnripQg67mE64+Z6riw66GcIOuPmeyekVxyXG4vLyDsp4HqtIDsoIHsnbTsp4Ag7JWK6rOgIOuztOq4sOyXkCDqt7jrnpjshJwgd2hpbGXrjIDsi6AgdGFrZUV2ZXJ566GcIOuPmeyekVxyXG4vLyB0YWtlTGF0ZXN0OiBleC4g7Iuk7IiY66GcIOuhnOq3uOyduOuyhO2KvCDtgbTrpq3rkZDrsogg65Sw64ul7IucIHRha2VldmVyeeuKlCDrkZjri6Tsi6TtlontlZjquLDsl5Ag64yA7LK0XHJcbi8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Dsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxuLy8gYnV0LCDsnZHri7XsnYQg7ZWc6rCcIOy3qOyGjO2VmOuKlOqxsOyngCDsmpTssq3snYQg7Leo7IaM7ZWY7KeA64qUIOyViuydjCAo7JqU7LKtIDLqsJzqsJApXHJcbi8vIOydtOulvCDtlbTqsrDtlZjquLAg7JyE7ZWcIHRocm90dGxlLCAzMDAwKDPstIjrgrTsl5Ag65SxIO2VnOuyiOunjCDsi6TtlokpXHJcbi8vIHRocm90dGxlIOyemCDslYjsk7Dqs6Ag67O07Ya1IHRha2VsYXRlc3TtlZjqs6Ag7ISc67KE7JeQ7IScIOyalOyyreydhCDqsoDthqDtlbTrs7Tqs6Ag66eJ64+E66GdIO2VqFxyXG4vLyAxMC4g7ISc67KE6rWs7ZiEIOyVhOyngSDslYjtlbTshJwgY2FsbCBsb2dJbkFQSSDri6Qg7JeQ65+s64KgIOqyg+ydtOudvCBkZWxheeuhnCDsnoTsi5zrjIDssrRcclxuXHJcbi8vIDMuIHRha2U6IExPR19JTuyVoeyFmOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66as6rKg64ukLiDqt7jrpqzqs6AgbG9nSW7si6TtlolcclxuLy8gICAgbG9nSW7qtIDroKjrkJwg66ek6rCc67OA7IiYKGRhdGEp6rCAIGxvZ0luKCntlajsiJjsnZggYWN0aW9u7JeQIOyghOuLrFxyXG4vLyAgICBhY3Rpb24udHlwZTogTE9HX0lOX1JFUVVFU1QsIGFjdGluLmRhdGE6IGxvZ2luIGRhdGEg7Y+s7ZWoXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5cclxuLy8gMS4gYWxsOiDrsLDsl7Qg64K07J2YIOqyg+uTpOydhCDrj5nsi5zsi6Ttloko67Cw7Je07J2EIOuwm+ydjClcclxuLy8gMi4gZm9yaywgY2FsbDog7ZWo7IiY7Iuk7ZaJIOuqheugueyWtChmb3Jr7JmAIGNhbGzsnZgg7LCo7J207KCQIOyhtOyerO2VqClcclxuLy8gZm9yazog67mE64+Z6riw7ZWo7IiY7Zi47LacKOq4sOuLpOumrOyngOyViuqzoCDrsJTroZwg64uk7J2M6rKDIOyLpO2WiSksIGNhbGw6IOuPmeq4sO2VqOyImO2YuOy2nCjquLDri6TrprDtm4Qg7Iuk7ZaJKVxyXG4vLyAjIGNhbGwsIHlpZWxk65Ox7J2EIOyTsOuKlCDsnbTsnKA6IHRlc3TtlaAg65WMIO2OuO2VqChhLm5leHQoKe2VqOyImOyLpO2WieycvOuhnCDtlZjrgpjslKkg67KE6re46rKA7IKsLCB0ZXN07L2U65OcIOynnOuRrOyVvCDtlagpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==