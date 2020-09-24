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
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchSignUp),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);

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
// function logInAPI(data, a, b) {
//   return axios.post("/api/login", data);
// }
// 4. logIn 실행
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
// function logOutAPI() {
//   return axios.post("/api/logout");
// }


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
} // function signUpAPI() {
//   return axios.post("/api/signUp");
// }


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
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function watchSignUp() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchSignUp$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
} // 1. all: 배열 내의 것들을 동시실행(배열을 받음)
// 2. fork, call: 함수실행 명령어(fork와 call의 차이점 존재함)
// fork: 비동기함수호출(기다리지않고 바로 다음것 실행), call: 동기함수호출(기다린후 실행)
// # call, yield등을 쓰는 이유: test할 때 편함(a.next()함수실행으로 하나씩 버그검사, test코드 짜둬야 함)


function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([// fork(watchFollow),
          // fork(watchUnfollow),
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsInNpZ25VcCIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwidXNlclNhZ2EiLCJhY3Rpb24iLCJkZWxheSIsInB1dCIsInR5cGUiLCJMT0dfSU5fU1VDQ0VTUyIsImRhdGEiLCJMT0dfSU5fRkFJTFVSRSIsImVycm9yIiwicmVzcG9uc2UiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1NVQ0NFU1MiLCJjb25zb2xlIiwiU0lHTl9VUF9GQUlMVVJFIiwidGFrZUxhdGVzdCIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX09VVF9SRVFVRVNUIiwiU0lHTl9VUF9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQXNDVUEsSzttR0F3QkFDLE07bUdBb0JBQyxNO21HQTZCQUMsVTttR0FJQUMsVzttR0FJQUMsVzttR0FPZUMsUTs7QUE5SHpCO0FBQ0E7Q0FlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVVOLEtBQVYsQ0FBZ0JPLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUksaUJBQU1DLGdFQUFLLENBQUMsSUFBRCxDQUFYOztBQUZKO0FBQUE7QUFTSSxpQkFBTUMsOERBQUcsQ0FBQztBQUFFQyxnQkFBSSxFQUFFQyw2REFBUjtBQUF3QkMsZ0JBQUksRUFBRUwsTUFBTSxDQUFDSztBQUFyQyxXQUFELENBQVQ7O0FBVEo7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWUksaUJBQU1ILDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRUcsNkRBREU7QUFFUkMsaUJBQUssRUFBRSxZQUFJQyxRQUFKLENBQWFIO0FBRlosV0FBRCxDQUFUOztBQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FrQkE7QUFFQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVVYLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSSxpQkFBTU8sZ0VBQUssQ0FBQyxJQUFELENBQVg7O0FBRko7QUFBQTtBQUlJLGlCQUFNQyw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVNLDhEQURFLENBRVI7O0FBRlEsV0FBRCxDQUFUOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNJLGlCQUFNUCw4REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVPLDhEQURFO0FBRVJILGlCQUFLLEVBQUUsYUFBSUMsUUFBSixDQUFhSDtBQUZaLFdBQUQsQ0FBVDs7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDLENBZ0JBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBVVYsTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdJLGlCQUFNTSxnRUFBSyxDQUFDLElBQUQsQ0FBWDs7QUFISjtBQUFBO0FBSUksaUJBQU1DLDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRVEsOERBQWVBO0FBRGIsV0FBRCxDQUFUOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRSUMsaUJBQU8sQ0FBQ0wsS0FBUjtBQVJKO0FBU0ksaUJBQU1MLDhEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRVUsOERBREU7QUFFUk4saUJBQUssRUFBRSxhQUFJQyxRQUFKLENBQWFIO0FBRlosV0FBRCxDQUFUOztBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEMsQ0FnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQSxTQUFVVCxVQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNa0IscUVBQVUsQ0FBQ0MsNkRBQUQsRUFBaUJ0QixLQUFqQixDQUFoQjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVSSxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNaUIscUVBQVUsQ0FBQ0UsOERBQUQsRUFBa0J0QixNQUFsQixDQUFoQjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQSxTQUFVSSxXQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLGlCQUFNZ0IscUVBQVUsQ0FBQ0csOERBQUQsRUFBa0J0QixNQUFsQixDQUFoQjs7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDLENBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNlLFNBQVVJLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2IsaUJBQU1tQiw4REFBRyxDQUFDLENBQ1I7QUFDQTtBQUNBQyx5RUFBSSxDQUFDdkIsVUFBRCxDQUhJLEVBSVJ1QiwrREFBSSxDQUFDdEIsV0FBRCxDQUpJLEVBS1JzQiwrREFBSSxDQUFDckIsV0FBRCxDQUxJLENBQUQsQ0FBVDs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQyMDU1MjhkZjVkOTA2MWM0MGMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGRlbGF5LCBwdXQsIGFsbCwgZm9yaywgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuICBGT0xMT1dfRkFJTFVSRSxcclxuICBGT0xMT1dfUkVRVUVTVCxcclxuICBGT0xMT1dfU1VDQ0VTUyxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIExPR19PVVRfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfRkFJTFVSRSxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG4vLyBzYWdhJ3MgZ2VuZXJhdG9yXHJcbi8vIGNvbnN0IGdlbiA9IGZ1bmN0aW9uKiAoKSB7Y29uc29sZS5sb2coMSk7IHlpZWxkOyBjb25zb2xlLmxvZygyKTsgeWllbGQgNDt9XHJcbi8vIGNvbnN0IGdlbmVyYXRvciA9IGdlbigpIC0tPiDqsJ3ssrTsg53shLEsXHJcbi8vIGdlbmVyYXRvci5uZXh0KCkgLS0+IGdlbiDsi6TtlokgJzEnLCDsnqzsi6TtlokgJzInKHZhbHVlOiA0LCBkb25lOiB0cnVlKVxyXG4vLyDspJHri6jsoJDsnbQg7J6I64qUIO2VqOyImCh5aWVsZOuKlCDrqYjstqQsIHlpZWxk65Kk7JeQIOqwkjogdmFsdWUpXHJcbi8vIHdoaWxlKHRydWUpe3lpZWxkICfrrLTtlZwnO30gOiDrrLTtlZzrsJjrs7XsnbQg7JWE64uI6528IOunpOuyiCDspJHri6jrkKgoJ+ustO2VnCcsIGRvbmU6ZmFsc2UpXHJcbi8vIGZ1bmN0aW9uKiB3YXRjaExvZ2luKCl7eWllbGQgdGFrZSgnTE9HX0lOJywgbG9nSW4pfVxyXG5cclxuLy8gNS4g7Jes6ri0IGdlbmVyYXRvcu2VqOyImCDslYTri5goZGF0YeulvCDrsJvslYTshJwgZGF0YeyZgCDtlajqu5ggYXBp7JeQIOuEo+ydjCAtIOuwlOuhnCDsi6TtlokpISFcclxuLy8gZGF0YeuKlCDslYTrnpjtlajsiJjsnZggYWN0aW9uLmRhdGFcclxuLy8gZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSwgYSwgYikge1xyXG4vLyAgIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9sb2dpblwiLCBkYXRhKTtcclxuLy8gfVxyXG5cclxuLy8gNC4gbG9nSW4g7Iuk7ZaJXHJcbi8vIDYuIGxvZ2luQVBJ66W8IOyLpO2WieyLnOy8nOyEnCByZXN1bHTroZwg6rKw6rO866W8IOuwm+ydjFxyXG4vLyBwdXQ6IGRpc3BhdGNo7JmAIOqwmeydjCjslaHshZjqsJ3ssrTrpbwgZGlzcGF0Y2gpXHJcbi8vIGNhbGw6IOuPmeq4sO2VqOyImOyLpO2WiVxyXG4vLyBjYWxs7J206528IGF4aW9zLnBvc3QoJ2FwaS9sb2dpbikudGhlbigoKT0+e3lpZWxkIHB1dCh7dHlwZTogLi4ufSl9KVxyXG4vLyBmb3Jr7JiA64uk66m0IOq3uOuDpSBheGlvcy5wb3N0KCdhcGkvbG9naW4p7JmAIOqwmeydjFxyXG4vLyDspoksIEFQSeyXkCBwb3N07ZWcIOuLpOydjCDrgZ3rgpjrqbQg64uk7J2M6rKDIHB1dOyLpO2Wie2VnOuLpChmb3Jr66m0IOuqheugueuCtOumrOqzoCDrsJvquLDsoITsl5Ag67CU66Gc64uk7J2M6rKDKVxyXG4vLyB5aWVsZOuKlCBhd2FpdOqzvCDruYTsirftlZzrjbAgZm9ya+uKlCDsnbTrpbwg66y07Iuc7ZWY6rKM64GUIOymieyLnOyLpO2Wie2VmOuKlCDqsoNcclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIC8vIGxvZ2luQVBJKGFjdGlvbi5kYXRhKeqzvCDqsJnsnYDrnLs6IO2VqOyImO2YuOy2nCDrsKnsi53snbQgY2FsbOydgCDsnbTroIfqsoxcclxuICAgIC8vIOyyq+uyiOynuOyekOumrOqwgCDtlajsiJgsIOq3uOuLpOydjOyekOumrOu2gO2EsCDrp6TqsJzrs4DsiJgo7J247IiYKVxyXG4gICAgLy8g7KaJLCBhY3Rpb27sl5DshJwgZGF0Yeq6vOuCtOyEnCBBUEntlajsiJjsl5Ag7KCE64usXHJcbiAgICAvLyDsnoTsi5zrs7TrpZggY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEsIFwiYVwiLCBcImJcIik7XHJcbiAgICAvLyDsnoTsi5zrs7TrpZggeWllbGQgcHV0KHsgdHlwZTogXCJMT0dfSU5fU1VDQ0VTU1wiLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcclxuICAgIC8vIGxvZ2luUmVxdWVzdOyXkOyEnCDrsJvsnYAg6rKDIOuwlOuhnCBzdWNjZXNz66GcIOuztOuCtOuyhOumvCjsnoTsi5zrsKntjrgpXHJcbiAgICB5aWVsZCBwdXQoeyB0eXBlOiBMT0dfSU5fU1VDQ0VTUywgZGF0YTogYWN0aW9uLmRhdGEgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAvLyA3LiDsmpTssq3snbQg7Iuk7Yyo7ZWgIOqyveyasOulvCDsnITtlbRcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuLy8gOC4g7ISx6rO1IOqysOqzvOuKlCByZXN1bHQuZGF0YSwg7Iuk7YyoIOqysOqzvOuKlCBlcnIucmVzcG9uc2UuZGF0YeyXkCDri7TquYBcclxuXHJcbi8vIGZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuLy8gICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9nb3V0XCIpO1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIC8vIOyehOyLnOuztOulmCBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgIC8vIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gc2lnblVwQVBJKCkge1xyXG4vLyAgIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9zaWduVXBcIik7XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gOS4geWllbGQsIHRha2Ug64uo7KCQOiDrlLEg7ZWc67KI67CW7JeQIOyViOuwm+ydjCjsnbztmozsmqkpIO2VnOuyiOyTsOuptCDsgqzrnbzsoLjrsoTrprwo65Sw65287IScIHdoaWxl66GcIOqwkOyLuOyVvClcclxuLy8gd2hpbGUsIHRha2XripQg64+Z6riw7KCB7Jy866GcIOuPmeyekSwgdGFrZUV2ZXJ564qUIOu5hOuPmeq4sOuhnCDrj5nsnpFcclxuLy8g7KeB6rSA7KCB7J207KeAIOyViuqzoCDrs7TquLDsl5Ag6re4656Y7IScIHdoaWxl64yA7IugIHRha2VFdmVyeeuhnCDrj5nsnpFcclxuLy8gdGFrZUxhdGVzdDogZXguIOyLpOyImOuhnCDroZzqt7jsnbjrsoTtirwg7YG066at65GQ67KIIOuUsOuLpeyLnCB0YWtlZXZlcnnripQg65GY64uk7Iuk7ZaJ7ZWY6riw7JeQIOuMgOyytFxyXG4vLyDssqvrsojsp7jqsoPrp4wg7ZWY6rOg7Iu27Jy866m0IHRha2VMZWFkaW5nXHJcbi8vIGJ1dCwg7J2R64u17J2EIO2VnOqwnCDst6jshoztlZjripTqsbDsp4Ag7JqU7LKt7J2EIOy3qOyGjO2VmOyngOuKlCDslYrsnYwgKOyalOyyrSAy6rCc6rCQKVxyXG4vLyDsnbTrpbwg7ZW06rKw7ZWY6riwIOychO2VnCB0aHJvdHRsZSwgMzAwMCgz7LSI64K07JeQIOuUsSDtlZzrsojrp4wg7Iuk7ZaJKVxyXG4vLyB0aHJvdHRsZSDsnpgg7JWI7JOw6rOgIOuztO2GtSB0YWtlbGF0ZXN07ZWY6rOgIOyEnOuyhOyXkOyEnCDsmpTssq3snYQg6rKA7Yag7ZW067O06rOgIOunieuPhOuhnSDtlahcclxuLy8gMTAuIOyEnOuyhOq1rO2YhCDslYTsp4Eg7JWI7ZW07IScIGNhbGwgbG9nSW5BUEkg64ukIOyXkOufrOuCoCDqsoPsnbTrnbwgZGVsYXnroZwg7J6E7Iuc64yA7LK0XHJcblxyXG4vLyAzLiB0YWtlOiBMT0dfSU7slaHshZjsnbQg7Iuk7ZaJ65Cg65WM6rmM7KeAIOq4sOuLpOumrOqyoOuLpC4g6re466as6rOgIGxvZ0lu7Iuk7ZaJXHJcbi8vICAgIGxvZ0lu6rSA66Co65CcIOunpOqwnOuzgOyImChkYXRhKeqwgCBsb2dJbigp7ZWo7IiY7J2YIGFjdGlvbuyXkCDsoITri6xcclxuLy8gICAgYWN0aW9uLnR5cGU6IExPR19JTl9SRVFVRVNULCBhY3Rpbi5kYXRhOiBsb2dpbiBkYXRhIO2PrO2VqFxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcbi8vIDEuIGFsbDog67Cw7Je0IOuCtOydmCDqsoPrk6TsnYQg64+Z7Iuc7Iuk7ZaJKOuwsOyXtOydhCDrsJvsnYwpXHJcbi8vIDIuIGZvcmssIGNhbGw6IO2VqOyImOyLpO2WiSDrqoXroLnslrQoZm9ya+yZgCBjYWxs7J2YIOywqOydtOygkCDsobTsnqztlagpXHJcbi8vIGZvcms6IOu5hOuPmeq4sO2VqOyImO2YuOy2nCjquLDri6Trpqzsp4DslYrqs6Ag67CU66GcIOuLpOydjOqygyDsi6TtlokpLCBjYWxsOiDrj5nquLDtlajsiJjtmLjstpwo6riw64uk66aw7ZuEIOyLpO2WiSlcclxuLy8gIyBjYWxsLCB5aWVsZOuTseydhCDsk7DripQg7J207JygOiB0ZXN07ZWgIOuVjCDtjrjtlagoYS5uZXh0KCntlajsiJjsi6TtlonsnLzroZwg7ZWY64KY7JSpIOuyhOq3uOqygOyCrCwgdGVzdOy9lOuTnCDsp5zrkazslbwg7ZWoKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIC8vIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgLy8gZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gIF0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=