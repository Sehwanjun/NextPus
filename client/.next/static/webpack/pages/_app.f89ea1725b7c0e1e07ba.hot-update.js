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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchSignUp)]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsInNpZ25VcCIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwidXNlclNhZ2EiLCJsb2dJbkFQSSIsImRhdGEiLCJhIiwiYiIsImF4aW9zIiwicG9zdCIsImFjdGlvbiIsImRlbGF5IiwicHV0IiwidHlwZSIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJlcnJvciIsInJlc3BvbnNlIiwibG9nT3V0QVBJIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwic2lnblVwQVBJIiwiU0lHTl9VUF9TVUNDRVNTIiwiY29uc29sZSIsIlNJR05fVVBfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19PVVRfUkVRVUVTVCIsIlNJR05fVVBfUkVRVUVTVCIsImFsbCIsImZvcmsiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0F5Q1VBLEs7bUdBd0JBQyxNO21HQW9CQUMsTTttR0E2QkFDLFU7bUdBSUFDLFc7bUdBSUFDLFc7bUdBT2VDLFE7O0FBakl6QjtBQUNBO0NBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQSxTQUFTQyxRQUFULENBQWtCQyxJQUFsQixFQUF3QkMsQ0FBeEIsRUFBMkJDLENBQTNCLEVBQThCO0FBQzVCLFNBQU9DLEtBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJKLElBQXpCLENBQVA7QUFDRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBVVIsS0FBVixDQUFnQmEsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSSxpQkFBTUMsZ0VBQUssQ0FBQyxJQUFELENBQVg7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjg5ZWExNzI1YjdjMGUxZTA3YmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgZGVsYXksIHB1dCwgYWxsLCBmb3JrLCB0YWtlTGF0ZXN0IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gIEZPTExPV19GQUlMVVJFLFxyXG4gIEZPTExPV19SRVFVRVNULFxyXG4gIEZPTExPV19TVUNDRVNTLFxyXG4gIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICBVTkZPTExPV19TVUNDRVNTLFxyXG4gIExPR19JTl9SRVFVRVNULFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgTE9HX09VVF9GQUlMVVJFLFxyXG4gIFNJR05fVVBfUkVRVUVTVCxcclxuICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgU0lHTl9VUF9GQUlMVVJFLFxyXG59IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbi8vIHNhZ2EncyBnZW5lcmF0b3JcclxuLy8gY29uc3QgZ2VuID0gZnVuY3Rpb24qICgpIHtjb25zb2xlLmxvZygxKTsgeWllbGQ7IGNvbnNvbGUubG9nKDIpOyB5aWVsZCA0O31cclxuLy8gY29uc3QgZ2VuZXJhdG9yID0gZ2VuKCkgLS0+IOqwneyytOyDneyEsSxcclxuLy8gZ2VuZXJhdG9yLm5leHQoKSAtLT4gZ2VuIOyLpO2WiSAnMScsIOyerOyLpO2WiSAnMicodmFsdWU6IDQsIGRvbmU6IHRydWUpXHJcbi8vIOykkeuLqOygkOydtCDsnojripQg7ZWo7IiYKHlpZWxk64qUIOupiOy2pCwgeWllbGTrkqTsl5Ag6rCSOiB2YWx1ZSlcclxuLy8gd2hpbGUodHJ1ZSl7eWllbGQgJ+ustO2VnCc7fSA6IOustO2VnOuwmOuzteydtCDslYTri4jrnbwg66ek67KIIOykkeuLqOuQqCgn66y07ZWcJywgZG9uZTpmYWxzZSlcclxuLy8gZnVuY3Rpb24qIHdhdGNoTG9naW4oKXt5aWVsZCB0YWtlKCdMT0dfSU4nLCBsb2dJbil9XHJcblxyXG4vLyA1LiDsl6zquLQgZ2VuZXJhdG9y7ZWo7IiYIOyVhOuLmChkYXRh66W8IOuwm+yVhOyEnCBkYXRh7JmAIO2VqOq7mCBhcGnsl5Ag64Sj7J2MIC0g67CU66GcIOyLpO2WiSkhIVxyXG4vLyBkYXRh64qUIOyVhOuemO2VqOyImOydmCBhY3Rpb24uZGF0YVxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhLCBhLCBiKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIsIGRhdGEpO1xyXG59XHJcblxyXG4vLyA0LiBsb2dJbiDsi6TtlolcclxuLy8gNi4gbG9naW5BUEnrpbwg7Iuk7ZaJ7Iuc7Lyc7IScIHJlc3VsdOuhnCDqsrDqs7zrpbwg67Cb7J2MXHJcbi8vIHB1dDogZGlzcGF0Y2jsmYAg6rCZ7J2MKOyVoeyFmOqwneyytOulvCBkaXNwYXRjaClcclxuLy8gY2FsbDog64+Z6riw7ZWo7IiY7Iuk7ZaJXHJcbi8vIGNhbGzsnbTrnbwgYXhpb3MucG9zdCgnYXBpL2xvZ2luKS50aGVuKCgpPT57eWllbGQgcHV0KHt0eXBlOiAuLi59KX0pXHJcbi8vIGZvcmvsmIDri6TrqbQg6re464OlIGF4aW9zLnBvc3QoJ2FwaS9sb2dpbinsmYAg6rCZ7J2MXHJcbi8vIOymiSwgQVBJ7JeQIHBvc3TtlZwg64uk7J2MIOuBneuCmOuptCDri6TsnYzqsoMgcHV07Iuk7ZaJ7ZWc64ukKGZvcmvrqbQg66qF66C564K066as6rOgIOuwm+q4sOyghOyXkCDrsJTroZzri6TsnYzqsoMpXHJcbi8vIHlpZWxk64qUIGF3YWl06rO8IOu5hOyKt+2VnOuNsCBmb3Jr64qUIOydtOulvCDrrLTsi5ztlZjqsozrgZQg7KaJ7Iuc7Iuk7ZaJ7ZWY64qUIOqyg1xyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy8gbG9naW5BUEkoYWN0aW9uLmRhdGEp6rO8IOqwmeydgOucuzog7ZWo7IiY7Zi47LacIOuwqeyLneydtCBjYWxs7J2AIOydtOugh+qyjFxyXG4gICAgLy8g7LKr67KI7Ke47J6Q66as6rCAIO2VqOyImCwg6re464uk7J2M7J6Q66as67aA7YSwIOunpOqwnOuzgOyImCjsnbjsiJgpXHJcbiAgICAvLyDspoksIGFjdGlvbuyXkOyEnCBkYXRh6rq864K07IScIEFQSe2VqOyImOyXkCDsoITri6xcclxuICAgIC8vIOyehOyLnOuztOulmCBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSwgXCJhXCIsIFwiYlwiKTtcclxuICAgIC8vIOyehOyLnOuztOulmCB5aWVsZCBwdXQoeyB0eXBlOiBcIkxPR19JTl9TVUNDRVNTXCIsIGRhdGE6IHJlc3VsdC5kYXRhIH0pO1xyXG4gICAgLy8gbG9naW5SZXF1ZXN07JeQ7IScIOuwm+ydgCDqsoMg67CU66GcIHN1Y2Nlc3ProZwg67O064K067KE66a8KOyehOyLnOuwqe2OuClcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPR19JTl9TVUNDRVNTLCBkYXRhOiBhY3Rpb24uZGF0YSB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIC8vIDcuIOyalOyyreydtCDsi6TtjKjtlaAg6rK97Jqw66W8IOychO2VtFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4vLyA4LiDshLHqs7Ug6rKw6rO864qUIHJlc3VsdC5kYXRhLCDsi6TtjKgg6rKw6rO864qUIGVyci5yZXNwb25zZS5kYXRh7JeQIOuLtOq5gFxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9sb2dvdXRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy8g7J6E7Iuc67O066WYIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgLy8gZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3NpZ25VcFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcCgpIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyA5LiB5aWVsZCwgdGFrZSDri6jsoJA6IOuUsSDtlZzrsojrsJbsl5Ag7JWI67Cb7J2MKOydvO2ajOyaqSkg7ZWc67KI7JOw66m0IOyCrOudvOyguOuyhOumvCjrlLDrnbzshJwgd2hpbGXroZwg6rCQ7Iu47JW8KVxyXG4vLyB3aGlsZSwgdGFrZeuKlCDrj5nquLDsoIHsnLzroZwg64+Z7J6RLCB0YWtlRXZlcnnripQg67mE64+Z6riw66GcIOuPmeyekVxyXG4vLyDsp4HqtIDsoIHsnbTsp4Ag7JWK6rOgIOuztOq4sOyXkCDqt7jrnpjshJwgd2hpbGXrjIDsi6AgdGFrZUV2ZXJ566GcIOuPmeyekVxyXG4vLyB0YWtlTGF0ZXN0OiBleC4g7Iuk7IiY66GcIOuhnOq3uOyduOuyhO2KvCDtgbTrpq3rkZDrsogg65Sw64ul7IucIHRha2VldmVyeeuKlCDrkZjri6Tsi6TtlontlZjquLDsl5Ag64yA7LK0XHJcbi8vIOyyq+uyiOynuOqyg+unjCDtlZjqs6Dsi7bsnLzrqbQgdGFrZUxlYWRpbmdcclxuLy8gYnV0LCDsnZHri7XsnYQg7ZWc6rCcIOy3qOyGjO2VmOuKlOqxsOyngCDsmpTssq3snYQg7Leo7IaM7ZWY7KeA64qUIOyViuydjCAo7JqU7LKtIDLqsJzqsJApXHJcbi8vIOydtOulvCDtlbTqsrDtlZjquLAg7JyE7ZWcIHRocm90dGxlLCAzMDAwKDPstIjrgrTsl5Ag65SxIO2VnOuyiOunjCDsi6TtlokpXHJcbi8vIHRocm90dGxlIOyemCDslYjsk7Dqs6Ag67O07Ya1IHRha2VsYXRlc3TtlZjqs6Ag7ISc67KE7JeQ7IScIOyalOyyreydhCDqsoDthqDtlbTrs7Tqs6Ag66eJ64+E66GdIO2VqFxyXG4vLyAxMC4g7ISc67KE6rWs7ZiEIOyVhOyngSDslYjtlbTshJwgY2FsbCBsb2dJbkFQSSDri6Qg7JeQ65+s64KgIOqyg+ydtOudvCBkZWxheeuhnCDsnoTsi5zrjIDssrRcclxuXHJcbi8vIDMuIHRha2U6IExPR19JTuyVoeyFmOydtCDsi6TtlonrkKDrlYzquYzsp4Ag6riw64uk66as6rKg64ukLiDqt7jrpqzqs6AgbG9nSW7si6TtlolcclxuLy8gICAgbG9nSW7qtIDroKjrkJwg66ek6rCc67OA7IiYKGRhdGEp6rCAIGxvZ0luKCntlajsiJjsnZggYWN0aW9u7JeQIOyghOuLrFxyXG4vLyAgICBhY3Rpb24udHlwZTogTE9HX0lOX1JFUVVFU1QsIGFjdGluLmRhdGE6IGxvZ2luIGRhdGEg7Y+s7ZWoXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuLy8gMS4gYWxsOiDrsLDsl7Qg64K07J2YIOqyg+uTpOydhCDrj5nsi5zsi6Ttloko67Cw7Je07J2EIOuwm+ydjClcclxuLy8gMi4gZm9yaywgY2FsbDog7ZWo7IiY7Iuk7ZaJIOuqheugueyWtChmb3Jr7JmAIGNhbGzsnZgg7LCo7J207KCQIOyhtOyerO2VqClcclxuLy8gZm9yazog67mE64+Z6riw7ZWo7IiY7Zi47LacKOq4sOuLpOumrOyngOyViuqzoCDrsJTroZwg64uk7J2M6rKDIOyLpO2WiSksIGNhbGw6IOuPmeq4sO2VqOyImO2YuOy2nCjquLDri6TrprDtm4Qg7Iuk7ZaJKVxyXG4vLyAjIGNhbGwsIHlpZWxk65Ox7J2EIOyTsOuKlCDsnbTsnKA6IHRlc3TtlaAg65WMIO2OuO2VqChhLm5leHQoKe2VqOyImOyLpO2WieycvOuhnCDtlZjrgpjslKkg67KE6re46rKA7IKsLCB0ZXN07L2U65OcIOynnOuRrOyVvCDtlagpXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==