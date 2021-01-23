module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./middleware/index.js":
/*!*****************************!*\
  !*** ./middleware/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./middleware/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./middleware/user.js");




axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true; // cookie 주소간 이동

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./middleware/post.js":
/*!****************************!*\
  !*** ./middleware/post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers/post */ "./reducers/post.js");
/* harmony import */ var reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers/user */ "./reducers/user.js");



 // retweet

function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
} // 이미지 업로드 게시


function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/post/images', data); // action.data: imageFormData
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  // 게시글 일부분 수정: patch / 두번째 인자로 data 필요없음(주소에 포함되어 들어가기때문)
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data // 게시글 배열 포함

    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}/like`); // return axios.patch(`/post/${data}/unlike`); 해도 무관
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data // 게시글 배열 포함

    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostsAPI(lastId) {
  // get에서 data 넣으려면 주소 뒤에 '?' , key = 값 쿼리스트링
  // get: 데이터캐싱 가능
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(loadPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data // 게시글 배열 포함

    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/post", data); // data-->content:data 이렇게 바꿔줘야 req.body.content로 가능
}

function* addPost(action) {
  try {
    // result.data로 (call: 첫번째인자 함수실행, 두번째인자를 넣어서)
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addPostAPI, action.data);
    console.log(action.data); // id를 생성해서 post와 user리덕스 연결고리
    // 어떤 액션이 여러 리듀서의 데이터를 동시에(user, post)바꿔야한다면 여러 액션을 호출해주면 됨

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data // 포스팅에 글 입력한 내용

    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(removePostAPI, action.data); // POST 리듀서 상태 변경

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    }); // USER 리듀서 상태 변경

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  // 굳이 ${data.postId}/ 삽입하는 이유: n번게시글 댓글작성(주소로 의미를 알수 있도록 하기위함)
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data // CommentForm에서 onSubmitComment로부터 불러들임

    });
  } catch (err) {
    console.log(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["throttle"])(3000, reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost)]);
}

/***/ }),

/***/ "./middleware/user.js":
/*!****************************!*\
  !*** ./middleware/user.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers/user */ "./reducers/user.js");


 // saga's generator
// const gen = function* () {console.log(1); yield; console.log(2); yield 4;}
// const generator = gen() --> 객체생성,
// generator.next() --> gen 실행 '1', 재실행 '2'(value: 4, done: true)
// 중단점이 있는 함수(yield는 멈춤, yield뒤에 값: value)
// while(true){yield '무한';} : 무한반복이 아니라 매번 중단됨('무한', done:false)
// function* watchLogin(){yield take('LOG_IN', logIn)}
// 5. 여긴 generator함수 아님(data를 받아서 data와 함께 api에 넣음 - 바로 실행)!!
// data는 아래함수의 action.data

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/user/login", data);
} // 4. logIn 실행
// 6. loginAPI를 실행시켜서 result로 결과를 받음
// put: dispatch와 같음(액션객체를 dispatch)
// call: 동기함수실행
// call이라 axios.post('api/login).then(()=>{yield put({type: ...})})
// fork였다면 그냥 axios.post('api/login)와 같음
// 즉, API에 post한 다음 끝나면 다음것 put실행한다(fork면 명령내리고 받기전에 바로다음것)
// yield는 await과 비슷한데 fork는 이를 무시하게끔 즉시실행하는 것


function* logIn(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data); // loginAPI(action.data)과 같은뜻: 함수호출 방식이 call은 이렇게
    // 첫번째자리가 함수, 그다음자리부터 매개변수(인수)
    // 즉, action에서 data꺼내서 API함수에 전달
    // loginRequest에서 받은 것 바로 success로 보내버림(임시방편)
    // result.data: 서버로부터 사용자 정보를 받아옴

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    // 7. 요청이 실패할 경우를 위해
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
} // 8. 성공 결과는 result.data, 실패 결과는 err.response.data에 담김


function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/user/logout");
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"] // data: result.data,

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
} // @ 정보 불러오기


function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/user");
}

function* loadMyInfo(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_FAILURE"],
      error: err.response.data
    });
  }
} // @ 회원가입
// get, delete요청: data를 넘길 수 없음 // post, put, 패치: 넘길 수 있음
// 서버에서는 req.body형태로 받음(server/route/user 확인) cf. /user --> localhost:3065/user


function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/user/nickname", {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/${data}/unfollow`);
}

function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unfollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
} // followings, followers 목록 불러오기


function loadfollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followings', data);
}

function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadfollowingsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete('/user/followers', data);
}

function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
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


function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(reducers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(reducers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
} // 1. all: 배열 내의 것들을 동시실행(배열을 받음)
// 2. fork, call: 함수실행 명령어(fork와 call의 차이점 존재함)
// fork: 비동기함수호출(기다리지않고 바로 다음것 실행), call: 동기함수호출(기다린후 실행)
// # call, yield등을 쓰는 이유: test할 때 편함(a.next()함수실행으로 하나씩 버그검사, test코드 짜둬야 함)


function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/global */ "./pages/styles/global.ts");
var _jsxFileName = "C:\\Users\\arthu\\Documents\\nextpus_2020\\client\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// 각 페이지들의 공통되는 요소 처리



 // Next에서 Head 수정할 수 있는 모듈






const App = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styles_global__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "shortcut icon",
    type: "image/x-icon",
    href: "/favicon.ico",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "manifest",
    href: "/site.webmanifest",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "mask-icon",
    href: "/safari-pinned-tab.svg",
    color: "#5bbad5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: "#da532c",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "theme-color</meta>",
    content: "#ffffff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "NextPus")), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _styles_global__WEBPACK_IMPORTED_MODULE_7__["theme"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(Component, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })));
};

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_6__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(App)));

/***/ }),

/***/ "./pages/styles/global.ts":
/*!********************************!*\
  !*** ./pages/styles/global.ts ***!
  \********************************/
/*! exports provided: default, theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  * {
    box-sizing:border-box;
    font-size: 64.5%;
    }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:#F5F5F5;
    font-family: "Inter", 'NotoSansKR', "Helvetica Neue", Helvetica, Arial, "맑은 고딕", malgun gothic, "돋움", Dotum, sans-serif, "Apple Color Emoji", "Noto Color Emoji";
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  abbr, address, article, aside, audio, b, blockquote, 
  body, canvas, caption, cite, code, dd, del, details, 
  dfn, div, dl, dt, em, fieldset, figcaption, figure, 
  footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, 
  html, i, iframe, img, ins, kbd, label, legend, li, 
  mark, menu, nav, object, ol, p, pre, q, samp, section, 
  small, span, strong, summary, table, tbody, td, tfoot, 
  th, thead, time, tr, ul, var, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
  }
html {
    font-size: 62.5%;
    font-family: sans-serif;
}
*, :after, :before {
    box-sizing: inherit;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: none;
}
textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  } 
 button {
    cursor: pointer;
    border:none;
    outline: none;
  }
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {text-decoration: none; color: inherit;
  a:link {  text-decoration: none; color: inherit;}
  a:visited {  text-decoration: none; color: inherit;}
  a:active {  text-decoration: none; color: inherit;}
  a:hover { text-decoration: none; color: inherit;}
}
h5 {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 600;
    color: rgba(0,0,0,.9);
  }

:root {
  --layout-gutter: 2.4rem;
  --layout-md-max-width: 720px;
  --layout-lg-max-width: 960px;
  --layout-xl-max-width: 1128px;
}

:root {
    --black: #000;
    --black-a90: rgba(0,0,0,0.9);
    --black-a75: rgba(0,0,0,0.75);
    --black-a60: rgba(0,0,0,0.6);
    --black-a45: rgba(0,0,0,0.45);
    --black-a30: rgba(0,0,0,0.3);
    --black-a15: rgba(0,0,0,0.15);
    --black-a12: rgba(0,0,0,0.12);
    --black-a08: rgba(0,0,0,0.08);
    --black-a04: rgba(0,0,0,0.04);
    --white: #fff;
    --white-a85: hsla(0,0%,100%,0.85);
    --white-a70: hsla(0,0%,100%,0.7);
    --white-a55: hsla(0,0%,100%,0.55);
    --white-a40: hsla(0,0%,100%,0.4);
    --white-a25: hsla(0,0%,100%,0.25);
    --white-a18: hsla(0,0%,100%,0.18);
    --white-a12: hsla(0,0%,100%,0.12);
    --white-a06: hsla(0,0%,100%,0.06);
    --blue-10: #f6fbff;
    --blue-20: #e8f3ff;
    --blue-30: #d0e8ff;
    --blue-40: #a8d4ff;
    --blue-50: #70b5f9;
    --blue-50-a20: rgba(112,181,249,0.2);
    --blue-50-a30: rgba(112,181,249,0.3);
    --blue-60: #378fe9;
    --blue-70: #0a66c2;
    --blue-80: #004182;
    --blue-90: #09223b;
    --cool-gray-10: #f9fafb;
    --cool-gray-20: #eef3f8;
    --cool-gray-30: #dce6f1;
    --cool-gray-40: #c0d1e2;
    --cool-gray-50: #9db3c8;
    --cool-gray-60: #788fa5;
    --cool-gray-70: #56687a;
    --cool-gray-80: #38434f;
    --cool-gray-90: #1d2226;
    --warm-gray-10: #fafaf9;
    --warm-gray-20: #f3f2ef;
    --warm-gray-30: #e9e5df;
    --warm-gray-40: #d6cec2;
    --warm-gray-50: #b9af9f;
    --warm-gray-60: #958b7b;
    --warm-gray-70: #6e6558;
    --warm-gray-80: #474139;
    --warm-gray-90: #211f1c;
    --warm-red-10: #fff9f7;
    --warm-red-20: #ffefea;
    --warm-red-30: #ffded5;
    --warm-red-40: #fdc2b1;
    --warm-red-50: #f5987e;
    --warm-red-60: #e16745;
    --warm-red-70: #b24020;
    --warm-red-80: #762812;
    --warm-red-90: #351a12;
    --teal-10: #eefdff;
    --teal-20: #d5f9fe;
    --teal-30: #aef0fa;
    --teal-40: #79deee;
    --teal-50: #44bfd3;
    --teal-60: #2199ac;
    --teal-70: #13707e;
    --teal-80: #104952;
    --teal-90: #0e2428;
    --teal-50-a30: rgba(68,191,211,0.3);
    --purple-10: #fcf9ff;
    --purple-20: #f7efff;
    --purple-30: #eedfff;
    --purple-40: #dec5fd;
    --purple-50: #c79ef7;
    --purple-60: #a872e8;
    --purple-70: #8344cc;
    --purple-80: #592099;
    --purple-90: #2c1349;
    --system-red-10: #fff9f9;
    --system-red-20: #ffeeef;
    --system-red-30: #ffddde;
    --system-red-40: #ffbfc1;
    --system-red-50: #fc9295;
    --system-red-60: #f55257;
    --system-red-70: #cc1016;
    --system-red-80: #8a0005;
    --system-red-90: #46080a;
    --system-green-10: #f0fdf7;
    --system-green-20: #dbf9eb;
    --system-green-30: #b6f2d6;
    --system-green-40: #7ce3b3;
    --system-green-50: #3ec786;
    --system-green-60: #13a05f;
    --system-green-70: #057642;
    --system-green-80: #004d2a;
    --system-green-90: #022716;
    --pink-10: #fff8ff;
    --pink-20: #ffedfe;
    --pink-30: #ffdafd;
    --pink-40: #fcb9f9;
    --pink-50: #f489ee;
    --pink-60: #dd51d6;
    --pink-70: #b11faa;
    --pink-80: #770c72;
    --pink-90: #3d0a3b;
    --amber-10: #fdfaf5;
    --amber-20: #fbf1e2;
    --amber-30: #fce2ba;
    --amber-40: #f8c77e;
    --amber-50: #e7a33e;
    --amber-60: #c37d16;
    --amber-70: #915907;
    --amber-80: #5d3b09;
    --amber-90: #2a1f0e;
    --copper-10: #fcfaf9;
    --copper-20: #fcf0ed;
    --copper-30: #fadfd8;
    --copper-40: #f2c5b8;
    --copper-50: #e0a191;
    --copper-60: #be7b6a;
    --copper-70: #8f5849;
    --copper-80: #5d392f;
    --copper-90: #2d1d19;
    --green-10: #f6fcf4;
    --green-20: #e3f9d8;
    --green-30: #c7f1b2;
    --green-40: #a5df89;
    --green-50: #7fc15e;
    --green-60: #5f9b41;
    --green-70: #44712e;
    --green-80: #2f4922;
    --green-90: #1b2416;
    --sage-10: #f8fbf6;
    --sage-20: #eaf6e4;
    --sage-30: #d7ebce;
    --sage-40: #bdd7b0;
    --sage-50: #9db88f;
    --sage-60: #7b9370;
    --sage-70: #5a6b51;
    --sage-80: #3a4535;
    --sage-90: #1e221c;
    --lime-10: #f9fce9;
    --lime-20: #eff8b9;
    --lime-30: #dfee89;
    --lime-40: #c6d957;
    --lime-50: #a6ba32;
    --lime-60: #83941f;
    --lime-70: #5f6c16;
    --lime-80: #3e4613;
    --lime-90: #20230f;
    --camo-10: #fafbf3;
    --camo-20: #f1f4e4;
    --camo-30: #e4e8cc;
    --camo-40: #cdd3ac;
    --camo-50: #aeb48a;
    --camo-60: #8a8f6c;
    --camo-70: #65684e;
    --camo-80: #414335;
    --camo-90: #21211d;
    --smoke-10: #f8fafb;
    --smoke-20: #edf3f4;
    --smoke-30: #dbe7e9;
    --smoke-40: #bfd3d6;
    --smoke-50: #a0b4b7;
    --smoke-60: #7d8f92;
    --smoke-70: #5b696b;
    --smoke-80: #3c4345;
    --smoke-90: #1f2122;
    --lavender-10: #fbf9fd;
    --lavender-20: #f4f1f9;
    --lavender-30: #eae2f3;
    --lavender-40: #d7cae7;
    --lavender-50: #bba9d1;
    --lavender-60: #9983b1;
    --lavender-70: #715e86;
    --lavender-80: #493d57;
    --lavender-90: #241f29;
    --mauve-10: #fcf9fc;
    --mauve-20: #f9eff8;
    --mauve-30: #f2e0f1;
    --mauve-40: #e5c6e3;
    --mauve-50: #cea2cc;
    --mauve-60: #ac7da9;
    --mauve-70: #80597e;
    --mauve-80: #523a51;
    --mauve-90: #271e27;
    --system-gray-10: #fafafa;
    --system-gray-20: #f2f2f2;
    --system-gray-30: #e5e5e5;
    --system-gray-40: #cfcfcf;
    --system-gray-50: #b0b0b0;
    --system-gray-60: #8c8c8c;
    --system-gray-70: #666;
    --system-gray-80: #424242;
    --system-gray-90: #212121;
    --system-orange-10: #fff9f6;
    --system-orange-20: #ffefe8;
    --system-orange-30: #ffdfd1;
    --system-orange-40: #ffc1a7;
    --system-orange-50: #ff9466;
    --system-orange-60: #eb6126;
    --system-orange-70: #b93a04;
    --system-orange-80: #792603;
    --system-orange-90: #351a0f;
    --transparent: transparent;
    --elevation-flat: none;
    --elevation-lined: 0px -1px 1px var(--color-border-faint),1px 0px 1px var(--color-border-faint),-1px 0px 1px var(--color-border-faint),0px 1px 1px var(--color-border-faint);
    --elevation-raised: 0px 4px 12px var(--black-a15);
    --corner-radius-small: 0.4rem;
    --corner-radius-medium: 0.8rem;
    --corner-radius-large: 3.2rem;
    --corner-radius-xlarge: 4.8rem;
    --corner-radius-full: 50%;
    --attached-top: 0 0 var(--corner-radius-medium) var(--corner-radius-medium);
    --attached-right: var(--corner-radius-medium) 0 0 var(--corner-radius-medium);
    --attached-bottom: var(--corner-radius-medium) var(--corner-radius-medium) 0 0;
    --attached-left: 0 var(--corner-radius-medium) var(--corner-radius-medium) 0;
    --point-top-left: 0 var(--corner-radius-medium) var(--corner-radius-medium) var(--corner-radius-medium);
    --point-top-right: var(--corner-radius-medium) 0 var(--corner-radius-medium) var(--corner-radius-medium);
    --point-bottom-right: var(--corner-radius-medium) var(--corner-radius-medium) 0 var(--corner-radius-medium);
    --point-bottom-left: var(--corner-radius-medium) var(--corner-radius-medium) var(--corner-radius-medium) 0;
    --spacing-half-x: 0.4rem;
    --spacing-one-x: 0.8rem;
    --spacing-one-and-a-half-x: 1.2rem;
    --spacing-two-x: 1.6rem;
    --spacing-three-x: 2.4rem;
    --spacing-four-x: 3.2rem;
    --spacing-six-x: 4.8rem;
    --spacing-eight-x: 6.4rem;
    --spacing-twelve-x: 9.6rem;
    --font-size-xsmall: 1.2rem;
    --font-size-small: 1.4rem;
    --font-size-medium: 1.6rem;
    --font-size-large: 2rem;
    --font-size-xlarge: 2.4rem;
    --font-size-display-small: 2.4rem;
    --font-size-display-medium: 3.2rem;
    --font-size-display-large: 4.8rem;
    --font-size-display-xlarge: 6.4rem;
    --font-weight-regular: 400;
    --font-weight-bold: 600;
    --line-height-default: 1.25;
    --line-height-open: 1.5;
    --paragraph-spacing: 1.2rem;
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
`);
const theme = {
  colors: {
    primary: '#015CAB'
  }
};

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");





const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
 // 대소문자 구분: DB 시퀄라이즈 해당 정보와 다른정보가 합쳐질 경우 대문자로 나옴
// id, content는 post 자체의 속성
// imagePaths: 이미지 업로드시 이미지 경로저장
// postAdded: 게시글 추가가 완료되었을 때 true
// id: 컴포넌트에 map함수를 통해 post별로 순서부여할때 등 사용
// 댓글구조: mainPosts에서 id를 찾아서 해당되는 게시물의 Comments로 접근

const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  // false: posts 더이상 가져오지 않음 (for infinite scroll)
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null
}; // faker, placeholder 공식문서 참조
// server에서 불러오는 것을 대체(infinite scrolling을 위해)
// export const generateDummyPost = number =>
//   Array(number)
//     .fill()
//     .map(() => ({
//       id: shortId.generate(),
//       User: {
//         id: shortId.generate(),
//         nickname: faker.name.findName(),
//       },
//       content: faker.lorem.paragraph(),
//       Images: [
//         {
//           src: faker.image.image(),
//         },
//       ],
//       Comments: [
//         {
//           User: {
//             id: shortId.generate(),
//             nickname: faker.name.findName(),
//           },
//           content: faker.lorem.sentence(),
//         },
//       ],
//     }));

const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const RETWEET_REQUEST = "RETWEET_REQUEST";
const RETWEET_SUCCESS = "RETWEET_SUCCESS";
const RETWEET_FAILURE = "RETWEET_FAILURE";
const REMOVE_IMAGE = "REMOVE_IMAGE";
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
}); // const dummyPost = data => ({
//   id: data.id,
//   content: data.content,
//   User: { id: 1, nickname: "제로초" },
//   Images: [],
//   Comments: [],
// });
// const dummyComment = data => ({
//   id: shortId.generate(),
//   content: data,
//   User: {
//     id: 1,
//     nickname: "전세환",
//   },
// });
// reducer: 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성을 지키면서)
// immer를 통해 불변성 유지코드 제거(draft를 쓰면 바꿀내용 막 써도 됨)
// immer가 알아서 불변성있게 다음 상태로 만들어줌(immer의 기본형태)

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;

    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        }); // 좋아요 누른 사람들 list에 내 아이디 넣어줌

        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostError = action.error;
      break;

    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId); // 좋아요 누른 사람들 list에서 빼줌

        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
        break;
      }

    case UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false;
      draft.unlikePostError = action.error;
      break;

    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.hasMorePosts = action.data.length === 10;
      break;

    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(action.data);
      draft.imagePaths = [];
      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      draft.removePostLoading = false;
      draft.removePostDone = true;
      draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
      break;

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        // routes/post에서 PostId=...postId로 대문자로 변형했기에 ..PostId로
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data.content);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    case UPLOAD_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = null;
      break;

    case UPLOAD_IMAGES_SUCCESS:
      draft.imagePaths = action.data; // router/post에서 파일명을 보내줬음 --> imagepaths 데이터 저장

      draft.uploadImagesLoading = false;
      draft.uploadImagesDone = true;
      break;

    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;

    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
      break;

    case RETWEET_REQUEST:
      draft.retweetLoading = true;
      draft.retweetDone = false;
      draft.retweetError = null;
      break;

    case RETWEET_SUCCESS:
      draft.retweetLoading = false;
      draft.retweetDone = true;
      draft.mainPosts.unshift(action.data);
      break;

    case RETWEET_FAILURE:
      draft.retweetLoading = false;
      draft.retweetError = action.error;
      break;
    // 1. case문 내에선 {}블록씌워야 함
    // 불변성을 지키기 위한 노력
    // case ADD_COMMENT_SUCCESS: {
    //   const postIndex = state.mainPosts.findIndex(
    //     v => v.id === action.data.postId
    //   );
    //   const post = { ...state.mainPosts[postIndex] };
    //   post.Comments = [dummyComment(action.data.content), ...post.Comments];
    //   const mainPosts = [...state.mainPosts];
    //   mainPosts[postIndex] = post;
    //   return {
    //     ...state,
    //     mainPosts,
    //     addCommentLoading: false,
    //     addCommentDone: true,
    //   };

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  loadMyInfoLoading: false,
  // 내 정보 가져오기
  loadMyInfoDone: false,
  loadMyInfoError: null,
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도중 (로딩창 띄우기 위해)
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  loadFollowingsLoading: false,
  // 팔로윙목록 불러오기
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadFollowersLoading: false,
  // 팔로워목록 불러오기
  loadFollowersDone: false,
  loadFollowersError: null,
  removeFollowerLoading: false,
  // 팔로워목록 불러오기
  removeFollowerDone: false,
  removeFollowerError: null,
  me: null,
  signUpData: {},
  loginData: {}
}; // 액션명 변수로 빼주기(오타로 인한 에러방지)////////
// 너무 많아지면 actios폴더 생성해서 분리

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST"; // 팔로워 차단

const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";
const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";
const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE"; // 리듀서 user와 post간의 연계 문제(글삭제시 user리듀서에도 영향이 가야함)
// post saga에서 user 액션 호출

const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME"; // const dummyUser = data => ({
//   ...data,
//   nickname: "Junsehwan",
//   id: 1,
//   Posts: [{ id: 1 }],
//   Followings: [
//     { nickname: "부기초" },
//     { nickname: "Chanho Lee" },
//     { nickname: "neue zeal" },
//   ],
//   Followers: [
//     { nickname: "부기초" },
//     { nickname: "Chanho Lee" },
//     { nickname: "neue zeal" },
//   ],
// });
/// /////////////////////////////////////////////////
/// ////////////////////actions//////////////////////
/// /////////////////////////////////////////////////

const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
}; // SUCCESS, FAULURE 삭제이유: saga에서 호출을 해준다(yield put으로)
/// /////////////////////////////////////////////////
/// ////////////////////reducer//////////////////////
/// /////////////////////////////////////////////////
// immer: draft를 mutable하게 변경하면 내부적으로 변경점을 immutable하게 state에 반영
// produce: return이 생략된 것

const reducer = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case LOAD_FOLLOWINGS_REQUEST:
      // 모든 항목 초기화
      draft.loadFollowingsLoading = true;
      draft.loadFollowingsError = null; // 로딩할땐 에러를 없애준다.

      draft.loadFollowingsDone = false;
      break;

    case LOAD_FOLLOWINGS_SUCCESS:
      draft.loadFollowingsLoading = false;
      draft.me.followings = action.data; // 로그인했으면 내정보가 들어가게 될 것

      draft.loadFollowingsDone = true;
      break;

    case LOAD_FOLLOWINGS_FAILURE:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsError = action.error;
      break;

    case LOAD_FOLLOWERS_REQUEST:
      // 모든 항목 초기화
      draft.loadFollowersLoading = true;
      draft.loadFollowersError = null; // 로딩할땐 에러를 없애준다.

      draft.loadFollowersDone = false;
      break;

    case LOAD_FOLLOWERS_SUCCESS:
      draft.loadFollowersLoading = false;
      draft.me.Followers = action.data; // 로그인했으면 내 팔로워정보가 들어가게 될 것

      draft.loadFollowersDone = true;
      break;

    case LOAD_FOLLOWERS_FAILURE:
      draft.loadFollowersLoading = false;
      draft.loadFollowersError = action.error;
      break;

    case LOAD_MY_INFO_REQUEST:
      // 모든 항목 초기화
      draft.loadMyInfoLoading = true;
      draft.loadMyInfoError = null; // 로딩할땐 에러를 없애준다.

      draft.loadMyInfoDone = false;
      break;

    case LOAD_MY_INFO_SUCCESS:
      draft.loadMyInfoLoading = false;
      draft.me = action.data; // 로그인했으면 내정보가 들어가게 될 것

      draft.loadMyInfoDone = true;
      break;

    case LOAD_MY_INFO_FAILURE:
      draft.loadMyInfoLoading = false;
      draft.loadMyInfoError = action.error;
      break;

    case FOLLOW_REQUEST:
      // 모든 항목 초기화
      draft.followLoading = true;
      draft.followError = null; // 로딩할땐 에러를 없애준다.

      draft.followDone = false;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.me.Followings.push({
        id: action.data.UserId
      });
      draft.followDone = true;
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;

    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      break;

    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
      draft.unfollowDone = true;
      break;

    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowError = action.error;
      break;

    case REMOVE_FOLLOWER_REQUEST:
      draft.removeFollowerLoading = true;
      draft.removeFollowerError = null;
      draft.removeFollowerDone = false;
      break;

    case REMOVE_FOLLOWER_SUCCESS:
      draft.removeFollowerLoading = false;
      draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
      draft.removeFollowerDone = true;
      break;

    case REMOVE_FOLLOWER_FAILURE:
      draft.removeFollowerLoading = false;
      draft.removeFollowerError = action.error;
      break;

    case LOG_IN_REQUEST:
      draft.logInLoading = true;
      draft.logInError = null;
      draft.logInDone = false;
      break;

    case LOG_IN_SUCCESS:
      draft.logInLoading = false;
      draft.me = action.data;
      draft.logInDone = true; // 임시방편으로 일단 고정시킴

      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
      break;

    case LOG_OUT_SUCCESS:
      draft.logOutLoading = false;
      draft.logOutDone = true;
      draft.me = null;
      break;

    case LOG_OUT_FAILURE:
      draft.logOutLoading = false;
      draft.logOutError = action.error;
      break;

    case SIGN_UP_REQUEST:
      draft.signUpLoading = true;
      draft.signUpError = null;
      draft.signUpDone = false;
      break;

    case SIGN_UP_SUCCESS:
      draft.signUpLoading = false;
      draft.signUpDone = true;
      break;

    case SIGN_UP_FAILURE:
      draft.signUpLoading = false;
      draft.signUpError = action.error;
      break;

    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameError = null;
      draft.changeNicknameDone = false;
      break;

    case CHANGE_NICKNAME_SUCCESS:
      draft.me.nickname = action.data.nickname;
      draft.changeNicknameLoading = false;
      draft.changeNicknameDone = true;
      break;

    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameError = action.error;
      break;

    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({
        id: action.data
      });
      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: [{ id: action.data }, ...state.me.Posts],
    //   },
    // };

    case REMOVE_POST_OF_ME:
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
      break;
    // return {
    //   ...state,
    //   me: {
    //     ...state.me,
    //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
    //   },
    // };

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../middleware */ "./middleware/index.js");







const configureStore = context => {
  console.log(context);
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_middleware__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS91c2VyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3R5bGVzL2dsb2JhbC50cyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwicmV0d2VldEFQSSIsImRhdGEiLCJwb3N0IiwicmV0d2VldCIsImFjdGlvbiIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJ0eXBlIiwiUkVUV0VFVF9TVUNDRVNTIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiUkVUV0VFVF9GQUlMVVJFIiwicmVzcG9uc2UiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJVUExPQURfSU1BR0VTX1NVQ0NFU1MiLCJVUExPQURfSU1BR0VTX0ZBSUxVUkUiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwidW5saWtlUG9zdEFQSSIsImRlbGV0ZSIsInVubGlrZVBvc3QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsImxvYWRQb3N0c0FQSSIsImxhc3RJZCIsImdldCIsImxvYWRQb3N0cyIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsImFkZFBvc3RBUEkiLCJhZGRQb3N0IiwibG9nIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX1RPX01FIiwiaWQiLCJBRERfUE9TVF9GQUlMVVJFIiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsImFkZENvbW1lbnQiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIndhdGNoTGlrZVBvc3QiLCJ0YWtlTGF0ZXN0IiwiTElLRV9QT1NUX1JFUVVFU1QiLCJ3YXRjaFVubGlrZVBvc3QiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIndhdGNoQWRkUG9zdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwid2F0Y2hBZGRDb21tZW50IiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIndhdGNoVXBsb2FkSW1hZ2VzIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwid2F0Y2hSZXR3ZWV0IiwiUkVUV0VFVF9SRVFVRVNUIiwibG9nSW5BUEkiLCJsb2dJbiIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsIkxPQURfTVlfSU5GT19TVUNDRVNTIiwiTE9BRF9NWV9JTkZPX0ZBSUxVUkUiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJjaGFuZ2VOaWNrbmFtZUFQSSIsIm5pY2tuYW1lIiwiY2hhbmdlTmlja25hbWUiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiZm9sbG93QVBJIiwiZm9sbG93IiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsInVuZm9sbG93QVBJIiwidW5mb2xsb3ciLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsImxvYWRmb2xsb3dpbmdzQVBJIiwibG9hZEZvbGxvd2luZ3MiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dlcnMiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsInJlbW92ZUZvbGxvd2VyQVBJIiwicmVtb3ZlRm9sbG93ZXIiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwid2F0Y2hMb2dJbiIsIkxPR19JTl9SRVFVRVNUIiwid2F0Y2hMb2dPdXQiLCJMT0dfT1VUX1JFUVVFU1QiLCJ3YXRjaFNpZ25VcCIsIlNJR05fVVBfUkVRVUVTVCIsIndhdGNoTG9hZE15SW5mbyIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwid2F0Y2hGb2xsb3ciLCJGT0xMT1dfUkVRVUVTVCIsIndhdGNoVW5mb2xsb3ciLCJVTkZPTExPV19SRVFVRVNUIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIkFwcCIsIkNvbXBvbmVudCIsInRoZW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsIndpdGhSZWR1eFNhZ2EiLCJjcmVhdGVHbG9iYWxTdHlsZSIsImNvbG9ycyIsInByaW1hcnkiLCJyb290UmVkdWNlciIsInN0YXRlIiwiSFlEUkFURSIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwibG9hZFBvc3RzTG9hZGluZyIsImxvYWRQb3N0c0RvbmUiLCJsb2FkUG9zdHNFcnJvciIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInVwbG9hZEltYWdlc0xvYWRpbmciLCJ1cGxvYWRJbWFnZXNEb25lIiwidXBsb2FkSW1hZ2VzRXJyb3IiLCJyZXR3ZWV0TG9hZGluZyIsInJldHdlZXREb25lIiwicmV0d2VldEVycm9yIiwiUkVNT1ZFX0lNQUdFIiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImZpbmQiLCJ2IiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsImZpbHRlciIsImNvbmNhdCIsImxlbmd0aCIsInVuc2hpZnQiLCJDb21tZW50cyIsImNvbnRlbnQiLCJpIiwibG9hZE15SW5mb0xvYWRpbmciLCJsb2FkTXlJbmZvRG9uZSIsImxvYWRNeUluZm9FcnJvciIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJmb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwiRm9sbG93aW5ncyIsIlBvc3RzIiwiY29uZmlndXJlU3RvcmUiLCJjb250ZXh0Iiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUFNdUQsY0FBYyxHQUFJQyxPQUFELElBQWE7QUFDbENqTyxTQUFPLENBQUMwQixHQUFSLENBQVl1TSxPQUFaO0FBQ0EsUUFBTUMsY0FBYyxHQUFHQyxpREFBb0IsRUFBM0M7QUFDQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ0YsY0FBRCxDQUFwQjtBQUNBLFFBQU1HLFFBQVEsR0FDWixRQUNJQyxTQURKLEdBRUlDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FBaEIsQ0FIekI7QUFLQSxRQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUNqRSxpREFBRCxFQUFVNEQsUUFBVixDQUF6QjtBQUNBSSxPQUFLLENBQUNFLFFBQU4sR0FBaUJULGNBQWMsQ0FBQ1UsR0FBZixDQUFtQjVQLG1EQUFuQixDQUFqQjtBQUNBLFNBQU95UCxLQUFQO0FBQ0QsQ0FaRDs7QUFjQSxNQUFNMUcsT0FBTyxHQUFHOEcsd0VBQWEsQ0FBQ2IsY0FBRCxFQUFpQjtBQUM1Q2MsT0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUllL0csc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSBcIi4vdXNlclwiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwNjUnO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlOyAvLyBjb29raWUg7KO87IaM6rCEIOydtOuPmVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgcHV0LCBhbGwsIGZvcmssIHRha2VMYXRlc3QsIHRocm90dGxlLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gIExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gIFJFVFdFRVRfUkVRVUVTVCxcclxuICBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgUkVUV0VFVF9GQUlMVVJFLFxyXG59IGZyb20gXCJyZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gXCJyZWR1Y2Vycy91c2VyXCI7XHJcblxyXG4vLyByZXR3ZWV0XHJcbmZ1bmN0aW9uIHJldHdlZXRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJldHdlZXQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmV0d2VldEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuLy8g7J2066+47KeAIOyXheuhnOuTnCDqsozsi5xcclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7IC8vIGFjdGlvbi5kYXRhOiBpbWFnZUZvcm1EYXRhXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIC8vIOqyjOyLnOq4gCDsnbzrtoDrtoQg7IiY7KCVOiBwYXRjaCAvIOuRkOuyiOynuCDsnbjsnpDroZwgZGF0YSDtlYTsmpTsl4bsnYwo7KO87IaM7JeQIO2PrO2VqOuQmOyWtCDrk6TslrTqsIDquLDrlYzrrLgpXHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsIC8vIOqyjOyLnOq4gCDrsLDsl7Qg7Y+s7ZWoXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVubGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG4gIC8vIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS91bmxpa2VgKTsg7ZW064+EIOustOq0gFxyXG59XHJcblxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSwgLy8g6rKM7Iuc6riAIOuwsOyXtCDtj6ztlahcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkobGFzdElkKSB7XHJcbiAgLy8gZ2V07JeQ7IScIGRhdGEg64Sj7Jy866Ck66m0IOyjvOyGjCDrkqTsl5AgJz8nICwga2V5ID0g6rCSIOy/vOumrOyKpO2KuOungVxyXG4gIC8vIGdldDog642w7J207YSw7LqQ7IuxIOqwgOuKpVxyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsIC8vIOqyjOyLnOq4gCDrsLDsl7Qg7Y+s7ZWoXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9wb3N0XCIsIGRhdGEpOyAgLy8gZGF0YS0tPmNvbnRlbnQ6ZGF0YSDsnbTroIfqsowg67CU6r+U7KSY7JW8IHJlcS5ib2R5LmNvbnRlbnTroZwg6rCA64qlXHJcbn1cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIHJlc3VsdC5kYXRh66GcIChjYWxsOiDssqvrsojsp7jsnbjsnpAg7ZWo7IiY7Iuk7ZaJLCDrkZDrsojsp7jsnbjsnpDrpbwg64Sj7Ja07IScKVxyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgLy8gaWTrpbwg7IOd7ISx7ZW07IScIHBvc3TsmYAgdXNlcuumrOuNleyKpCDsl7DqsrDqs6DrpqxcclxuICAgIC8vIOyWtOuWpCDslaHshZjsnbQg7Jes65+sIOumrOuTgOyEnOydmCDrjbDsnbTthLDrpbwg64+Z7Iuc7JeQKHVzZXIsIHBvc3Qp67CU6r+U7JW87ZWc64uk66m0IOyXrOufrCDslaHshZjsnYQg7Zi47Lac7ZW07KO866m0IOuQqFxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgIC8vIO2PrOyKpO2MheyXkCDquIAg7J6F66Cl7ZWcIOuCtOyaqVxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAvLyBQT1NUIOumrOuTgOyEnCDsg4Htg5wg67OA6rK9XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgLy8gVVNFUiDrpqzrk4DshJwg7IOB7YOcIOuzgOqyvVxyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIC8vIOq1s+ydtCAke2RhdGEucG9zdElkfS8g7IK97J6F7ZWY64qUIOydtOycoDogbuuyiOqyjOyLnOq4gCDrjJPquIDsnpHshLEo7KO87IaM66GcIOydmOuvuOulvCDslYzsiJgg7J6I64+E66GdIO2VmOq4sOychO2VqClcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSwgLy8gQ29tbWVudEZvcm3sl5DshJwgb25TdWJtaXRDb21tZW5066Gc67aA7YSwIOu2iOufrOuTpOyehFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bmxpa2VQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDMwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZXR3ZWV0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVUV0VFVF9SRVFVRVNULCByZXR3ZWV0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoUmV0d2VldCksXHJcbiAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBwdXQsIGFsbCwgZm9yaywgdGFrZUxhdGVzdCwgY2FsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtcclxuICBGT0xMT1dfRkFJTFVSRSxcclxuICBGT0xMT1dfUkVRVUVTVCxcclxuICBGT0xMT1dfU1VDQ0VTUyxcclxuICBVTkZPTExPV19GQUlMVVJFLFxyXG4gIFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIExPR19PVVRfRkFJTFVSRSxcclxuICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfRkFJTFVSRSxcclxuICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcclxuICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxyXG4gIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxcclxuICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxufSBmcm9tIFwicmVkdWNlcnMvdXNlclwiO1xyXG5cclxuXHJcbi8vIHNhZ2EncyBnZW5lcmF0b3JcclxuLy8gY29uc3QgZ2VuID0gZnVuY3Rpb24qICgpIHtjb25zb2xlLmxvZygxKTsgeWllbGQ7IGNvbnNvbGUubG9nKDIpOyB5aWVsZCA0O31cclxuLy8gY29uc3QgZ2VuZXJhdG9yID0gZ2VuKCkgLS0+IOqwneyytOyDneyEsSxcclxuLy8gZ2VuZXJhdG9yLm5leHQoKSAtLT4gZ2VuIOyLpO2WiSAnMScsIOyerOyLpO2WiSAnMicodmFsdWU6IDQsIGRvbmU6IHRydWUpXHJcbi8vIOykkeuLqOygkOydtCDsnojripQg7ZWo7IiYKHlpZWxk64qUIOupiOy2pCwgeWllbGTrkqTsl5Ag6rCSOiB2YWx1ZSlcclxuLy8gd2hpbGUodHJ1ZSl7eWllbGQgJ+ustO2VnCc7fSA6IOustO2VnOuwmOuzteydtCDslYTri4jrnbwg66ek67KIIOykkeuLqOuQqCgn66y07ZWcJywgZG9uZTpmYWxzZSlcclxuLy8gZnVuY3Rpb24qIHdhdGNoTG9naW4oKXt5aWVsZCB0YWtlKCdMT0dfSU4nLCBsb2dJbil9XHJcblxyXG4vLyA1LiDsl6zquLQgZ2VuZXJhdG9y7ZWo7IiYIOyVhOuLmChkYXRh66W8IOuwm+yVhOyEnCBkYXRh7JmAIO2VqOq7mCBhcGnsl5Ag64Sj7J2MIC0g67CU66GcIOyLpO2WiSkhIVxyXG4vLyBkYXRh64qUIOyVhOuemO2VqOyImOydmCBhY3Rpb24uZGF0YVxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvdXNlci9sb2dpblwiLCBkYXRhKTtcclxufVxyXG5cclxuLy8gNC4gbG9nSW4g7Iuk7ZaJXHJcbi8vIDYuIGxvZ2luQVBJ66W8IOyLpO2WieyLnOy8nOyEnCByZXN1bHTroZwg6rKw6rO866W8IOuwm+ydjFxyXG4vLyBwdXQ6IGRpc3BhdGNo7JmAIOqwmeydjCjslaHshZjqsJ3ssrTrpbwgZGlzcGF0Y2gpXHJcbi8vIGNhbGw6IOuPmeq4sO2VqOyImOyLpO2WiVxyXG4vLyBjYWxs7J206528IGF4aW9zLnBvc3QoJ2FwaS9sb2dpbikudGhlbigoKT0+e3lpZWxkIHB1dCh7dHlwZTogLi4ufSl9KVxyXG4vLyBmb3Jr7JiA64uk66m0IOq3uOuDpSBheGlvcy5wb3N0KCdhcGkvbG9naW4p7JmAIOqwmeydjFxyXG4vLyDspoksIEFQSeyXkCBwb3N07ZWcIOuLpOydjCDrgZ3rgpjrqbQg64uk7J2M6rKDIHB1dOyLpO2Wie2VnOuLpChmb3Jr66m0IOuqheugueuCtOumrOqzoCDrsJvquLDsoITsl5Ag67CU66Gc64uk7J2M6rKDKVxyXG4vLyB5aWVsZOuKlCBhd2FpdOqzvCDruYTsirftlZzrjbAgZm9ya+uKlCDsnbTrpbwg66y07Iuc7ZWY6rKM64GUIOymieyLnOyLpO2Wie2VmOuKlCDqsoNcclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAvLyBsb2dpbkFQSShhY3Rpb24uZGF0YSnqs7wg6rCZ7J2A65y7OiDtlajsiJjtmLjstpwg67Cp7Iud7J20IGNhbGzsnYAg7J2066CH6rKMXHJcbiAgICAvLyDssqvrsojsp7jsnpDrpqzqsIAg7ZWo7IiYLCDqt7jri6TsnYzsnpDrpqzrtoDthLAg66ek6rCc67OA7IiYKOyduOyImClcclxuICAgIC8vIOymiSwgYWN0aW9u7JeQ7IScIGRhdGHqurzrgrTshJwgQVBJ7ZWo7IiY7JeQIOyghOuLrFxyXG4gICAgLy8gbG9naW5SZXF1ZXN07JeQ7IScIOuwm+ydgCDqsoMg67CU66GcIHN1Y2Nlc3ProZwg67O064K067KE66a8KOyehOyLnOuwqe2OuClcclxuICAgIC8vIHJlc3VsdC5kYXRhOiDshJzrsoTroZzrtoDthLAg7IKs7Jqp7J6QIOygleuztOulvCDrsJvslYTsmLRcclxuICAgIHlpZWxkIHB1dCh7IHR5cGU6IExPR19JTl9TVUNDRVNTLCBkYXRhOiByZXN1bHQuZGF0YSB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIC8vIDcuIOyalOyyreydtCDsi6TtjKjtlaAg6rK97Jqw66W8IOychO2VtFxyXG4gICAgeWllbGQgcHV0KHsgdHlwZTogTE9HX0lOX0ZBSUxVUkUsIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSB9KTtcclxuICB9XHJcbn1cclxuLy8gOC4g7ISx6rO1IOqysOqzvOuKlCByZXN1bHQuZGF0YSwg7Iuk7YyoIOqysOqzvOuKlCBlcnIucmVzcG9uc2UuZGF0YeyXkCDri7TquYBcclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi91c2VyL2xvZ291dFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAvLyBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuLy8gQCDsoJXrs7Qg67aI65+s7Jik6riwXHJcbmZ1bmN0aW9uIGxvYWRNeUluZm9BUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldChcIi91c2VyXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZE15SW5mbyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkTXlJbmZvQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfTVlfSU5GT19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEAg7ZqM7JuQ6rCA7J6FXHJcbi8vIGdldCwgZGVsZXRl7JqU7LKtOiBkYXRh66W8IOuEmOq4uCDsiJgg7JeG7J2MIC8vIHBvc3QsIHB1dCwg7Yyo7LmYOiDrhJjquLgg7IiYIOyeiOydjFxyXG4vLyDshJzrsoTsl5DshJzripQgcmVxLmJvZHntmJXtg5zroZwg67Cb7J2MKHNlcnZlci9yb3V0ZS91c2VyIO2ZleyduCkgY2YuIC91c2VyIC0tPiBsb2NhbGhvc3Q6MzA2NS91c2VyXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoc2lnblVwQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlTmlja25hbWVBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChcIi91c2VyL25pY2tuYW1lXCIsIHsgbmlja25hbWU6IGRhdGEgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBjaGFuZ2VOaWNrbmFtZShhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChjaGFuZ2VOaWNrbmFtZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS91bmZvbGxvd2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGZvbGxvd2luZ3MsIGZvbGxvd2VycyDrqqnroZ0g67aI65+s7Jik6riwXHJcbmZ1bmN0aW9uIGxvYWRmb2xsb3dpbmdzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dpbmdzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93aW5ncyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkZm9sbG93aW5nc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKCcvdXNlci9mb2xsb3dlcnMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9sbG93ZXJBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC91c2VyL2ZvbGxvd2VyLyR7ZGF0YX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZUZvbGxvd2VyKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZUZvbGxvd2VyQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIDkuIHlpZWxkLCB0YWtlIOuLqOygkDog65SxIO2VnOuyiOuwluyXkCDslYjrsJvsnYwo7J287ZqM7JqpKSDtlZzrsojsk7DrqbQg7IKs65287KC467KE66a8KOuUsOudvOyEnCB3aGlsZeuhnCDqsJDsi7jslbwpXHJcbi8vIHdoaWxlLCB0YWtl64qUIOuPmeq4sOyggeycvOuhnCDrj5nsnpEsIHRha2VFdmVyeeuKlCDruYTrj5nquLDroZwg64+Z7J6RXHJcbi8vIOyngeq0gOyggeydtOyngCDslYrqs6Ag67O06riw7JeQIOq3uOuemOyEnCB3aGlsZeuMgOyLoCB0YWtlRXZlcnnroZwg64+Z7J6RXHJcbi8vIHRha2VMYXRlc3Q6IGV4LiDsi6TsiJjroZwg66Gc6re47J2467KE7Yq8IO2BtOumreuRkOuyiCDrlLDri6Xsi5wgdGFrZWV2ZXJ564qUIOuRmOuLpOyLpO2Wie2VmOq4sOyXkCDrjIDssrRcclxuLy8g7LKr67KI7Ke46rKD66eMIO2VmOqzoOyLtuycvOuptCB0YWtlTGVhZGluZ1xyXG4vLyBidXQsIOydkeuLteydhCDtlZzqsJwg7Leo7IaM7ZWY64qU6rGw7KeAIOyalOyyreydhCDst6jshoztlZjsp4DripQg7JWK7J2MICjsmpTssq0gMuqwnOqwkClcclxuLy8g7J2066W8IO2VtOqysO2VmOq4sCDsnITtlZwgdGhyb3R0bGUsIDMwMDAoM+y0iOuCtOyXkCDrlLEg7ZWc67KI66eMIOyLpO2WiSlcclxuLy8gdGhyb3R0bGUg7J6YIOyViOyTsOqzoCDrs7TthrUgdGFrZWxhdGVzdO2VmOqzoCDshJzrsoTsl5DshJwg7JqU7LKt7J2EIOqygO2GoO2VtOuztOqzoCDrp4nrj4TroZ0g7ZWoXHJcbi8vIDEwLiDshJzrsoTqtaztmIQg7JWE7KeBIOyViO2VtOyEnCBjYWxsIGxvZ0luQVBJIOuLpCDsl5Drn6zrgqAg6rKD7J206528IGRlbGF566GcIOyehOyLnOuMgOyytFxyXG5cclxuLy8gMy4gdGFrZTogTE9HX0lO7JWh7IWY7J20IOyLpO2WieuQoOuVjOq5jOyngCDquLDri6TrpqzqsqDri6QuIOq3uOumrOqzoCBsb2dJbuyLpO2WiVxyXG4vLyAgICBsb2dJbuq0gOugqOuQnCDrp6TqsJzrs4DsiJgoZGF0YSnqsIAgbG9nSW4oKe2VqOyImOydmCBhY3Rpb27sl5Ag7KCE64usXHJcbi8vICAgIGFjdGlvbi50eXBlOiBMT0dfSU5fUkVRVUVTVCwgYWN0aW4uZGF0YTogbG9naW4gZGF0YSDtj6ztlahcclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE15SW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBsb2FkTXlJbmZvKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQ2hhbmdlTmlja25hbWUoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmlja25hbWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bmZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dpbmdzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRGb2xsb3dpbmdzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVGb2xsb3dlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVGb2xsb3dlcik7XHJcbn1cclxuXHJcbi8vIDEuIGFsbDog67Cw7Je0IOuCtOydmCDqsoPrk6TsnYQg64+Z7Iuc7Iuk7ZaJKOuwsOyXtOydhCDrsJvsnYwpXHJcbi8vIDIuIGZvcmssIGNhbGw6IO2VqOyImOyLpO2WiSDrqoXroLnslrQoZm9ya+yZgCBjYWxs7J2YIOywqOydtOygkCDsobTsnqztlagpXHJcbi8vIGZvcms6IOu5hOuPmeq4sO2VqOyImO2YuOy2nCjquLDri6Trpqzsp4DslYrqs6Ag67CU66GcIOuLpOydjOqygyDsi6TtlokpLCBjYWxsOiDrj5nquLDtlajsiJjtmLjstpwo6riw64uk66aw7ZuEIOyLpO2WiSlcclxuLy8gIyBjYWxsLCB5aWVsZOuTseydhCDsk7DripQg7J207JygOiB0ZXN07ZWgIOuVjCDtjrjtlagoYS5uZXh0KCntlajsiJjsi6TtlonsnLzroZwg7ZWY64KY7JSpIOuyhOq3uOqygOyCrCwgdGVzdOy9lOuTnCDsp5zrkazslbwg7ZWoKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcbiAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2luZ3MpLFxyXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgZm9yayh3YXRjaENoYW5nZU5pY2tuYW1lKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gIF0pO1xyXG59XHJcbiIsIi8vIOqwgSDtjpjsnbTsp4Drk6TsnZgg6rO17Ya165CY64qUIOyalOyGjCDsspjrpqxcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7IC8vIE5leHTsl5DshJwgSGVhZCDsiJjsoJXtlaAg7IiYIOyeiOuKlCDrqqjrk4hcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tIFwibmV4dC1yZWR1eC1zYWdhXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgR2xvYmFsU3R5bGUsIHsgdGhlbWUgfSBmcm9tICcuL3N0eWxlcy9nbG9iYWwnO1xyXG5cclxuXHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIHNpemVzPVwiMTgweDE4MFwiIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIzMngzMlwiIGhyZWY9XCIvZmF2aWNvbi0zMngzMi5wbmdcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJtYXNrLWljb25cIiBocmVmPVwiL3NhZmFyaS1waW5uZWQtdGFiLnN2Z1wiIGNvbG9yPVwiIzViYmFkNVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNkYTUzMmNcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvcjwvbWV0YT5cIiBjb250ZW50PVwiI2ZmZmZmZlwiIC8+XHJcbiAgICAgICAgPHRpdGxlPk5leHRQdXM8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuQXBwLnByb3BUeXBlcyA9IHtcclxuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShBcHApKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUsIFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogNjQuNSU7XHJcbiAgICB9XHJcbiAgYm9keSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0Y1RjVGNTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsICdOb3RvU2Fuc0tSJywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBcIuunkeydgCDqs6DrlJVcIiwgbWFsZ3VuIGdvdGhpYywgXCLrj4vsm4BcIiwgRG90dW0sIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbiAgfVxyXG4gIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXHJcbiAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWFpbiwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBhYmJyLCBhZGRyZXNzLCBhcnRpY2xlLCBhc2lkZSwgYXVkaW8sIGIsIGJsb2NrcXVvdGUsIFxyXG4gIGJvZHksIGNhbnZhcywgY2FwdGlvbiwgY2l0ZSwgY29kZSwgZGQsIGRlbCwgZGV0YWlscywgXHJcbiAgZGZuLCBkaXYsIGRsLCBkdCwgZW0sIGZpZWxkc2V0LCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxyXG4gIGZvb3RlciwgZm9ybSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgaGVhZGVyLCBoZ3JvdXAsIFxyXG4gIGh0bWwsIGksIGlmcmFtZSwgaW1nLCBpbnMsIGtiZCwgbGFiZWwsIGxlZ2VuZCwgbGksIFxyXG4gIG1hcmssIG1lbnUsIG5hdiwgb2JqZWN0LCBvbCwgcCwgcHJlLCBxLCBzYW1wLCBzZWN0aW9uLCBcclxuICBzbWFsbCwgc3Bhbiwgc3Ryb25nLCBzdW1tYXJ5LCB0YWJsZSwgdGJvZHksIHRkLCB0Zm9vdCwgXHJcbiAgdGgsIHRoZWFkLCB0aW1lLCB0ciwgdWwsIHZhciwgdmlkZW8ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDYyLjUlO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuKiwgOmFmdGVyLCA6YmVmb3JlIHtcclxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcclxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuICBcdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbm9sLCB1bCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlLCBxIHtcclxuXHRxdW90ZXM6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLCBxOmFmdGVyIHtcclxuXHRjb250ZW50OiBub25lO1xyXG59XHJcbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1cywgc2VsZWN0OmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDA7XHJcbiAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfSBcclxuIGJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG50YWJsZSB7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5hIHt0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiBpbmhlcml0O1xyXG4gIGE6bGluayB7ICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiBpbmhlcml0O31cclxuICBhOnZpc2l0ZWQgeyAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogaW5oZXJpdDt9XHJcbiAgYTphY3RpdmUgeyAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogaW5oZXJpdDt9XHJcbiAgYTpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgY29sb3I6IGluaGVyaXQ7fVxyXG59XHJcbmg1IHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuOSk7XHJcbiAgfVxyXG5cclxuOnJvb3Qge1xyXG4gIC0tbGF5b3V0LWd1dHRlcjogMi40cmVtO1xyXG4gIC0tbGF5b3V0LW1kLW1heC13aWR0aDogNzIwcHg7XHJcbiAgLS1sYXlvdXQtbGctbWF4LXdpZHRoOiA5NjBweDtcclxuICAtLWxheW91dC14bC1tYXgtd2lkdGg6IDExMjhweDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG4gICAgLS1ibGFjazogIzAwMDtcclxuICAgIC0tYmxhY2stYTkwOiByZ2JhKDAsMCwwLDAuOSk7XHJcbiAgICAtLWJsYWNrLWE3NTogcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC0tYmxhY2stYTYwOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICAtLWJsYWNrLWE0NTogcmdiYSgwLDAsMCwwLjQ1KTtcclxuICAgIC0tYmxhY2stYTMwOiByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAtLWJsYWNrLWExNTogcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgIC0tYmxhY2stYTEyOiByZ2JhKDAsMCwwLDAuMTIpO1xyXG4gICAgLS1ibGFjay1hMDg6IHJnYmEoMCwwLDAsMC4wOCk7XHJcbiAgICAtLWJsYWNrLWEwNDogcmdiYSgwLDAsMCwwLjA0KTtcclxuICAgIC0td2hpdGU6ICNmZmY7XHJcbiAgICAtLXdoaXRlLWE4NTogaHNsYSgwLDAlLDEwMCUsMC44NSk7XHJcbiAgICAtLXdoaXRlLWE3MDogaHNsYSgwLDAlLDEwMCUsMC43KTtcclxuICAgIC0td2hpdGUtYTU1OiBoc2xhKDAsMCUsMTAwJSwwLjU1KTtcclxuICAgIC0td2hpdGUtYTQwOiBoc2xhKDAsMCUsMTAwJSwwLjQpO1xyXG4gICAgLS13aGl0ZS1hMjU6IGhzbGEoMCwwJSwxMDAlLDAuMjUpO1xyXG4gICAgLS13aGl0ZS1hMTg6IGhzbGEoMCwwJSwxMDAlLDAuMTgpO1xyXG4gICAgLS13aGl0ZS1hMTI6IGhzbGEoMCwwJSwxMDAlLDAuMTIpO1xyXG4gICAgLS13aGl0ZS1hMDY6IGhzbGEoMCwwJSwxMDAlLDAuMDYpO1xyXG4gICAgLS1ibHVlLTEwOiAjZjZmYmZmO1xyXG4gICAgLS1ibHVlLTIwOiAjZThmM2ZmO1xyXG4gICAgLS1ibHVlLTMwOiAjZDBlOGZmO1xyXG4gICAgLS1ibHVlLTQwOiAjYThkNGZmO1xyXG4gICAgLS1ibHVlLTUwOiAjNzBiNWY5O1xyXG4gICAgLS1ibHVlLTUwLWEyMDogcmdiYSgxMTIsMTgxLDI0OSwwLjIpO1xyXG4gICAgLS1ibHVlLTUwLWEzMDogcmdiYSgxMTIsMTgxLDI0OSwwLjMpO1xyXG4gICAgLS1ibHVlLTYwOiAjMzc4ZmU5O1xyXG4gICAgLS1ibHVlLTcwOiAjMGE2NmMyO1xyXG4gICAgLS1ibHVlLTgwOiAjMDA0MTgyO1xyXG4gICAgLS1ibHVlLTkwOiAjMDkyMjNiO1xyXG4gICAgLS1jb29sLWdyYXktMTA6ICNmOWZhZmI7XHJcbiAgICAtLWNvb2wtZ3JheS0yMDogI2VlZjNmODtcclxuICAgIC0tY29vbC1ncmF5LTMwOiAjZGNlNmYxO1xyXG4gICAgLS1jb29sLWdyYXktNDA6ICNjMGQxZTI7XHJcbiAgICAtLWNvb2wtZ3JheS01MDogIzlkYjNjODtcclxuICAgIC0tY29vbC1ncmF5LTYwOiAjNzg4ZmE1O1xyXG4gICAgLS1jb29sLWdyYXktNzA6ICM1NjY4N2E7XHJcbiAgICAtLWNvb2wtZ3JheS04MDogIzM4NDM0ZjtcclxuICAgIC0tY29vbC1ncmF5LTkwOiAjMWQyMjI2O1xyXG4gICAgLS13YXJtLWdyYXktMTA6ICNmYWZhZjk7XHJcbiAgICAtLXdhcm0tZ3JheS0yMDogI2YzZjJlZjtcclxuICAgIC0td2FybS1ncmF5LTMwOiAjZTllNWRmO1xyXG4gICAgLS13YXJtLWdyYXktNDA6ICNkNmNlYzI7XHJcbiAgICAtLXdhcm0tZ3JheS01MDogI2I5YWY5ZjtcclxuICAgIC0td2FybS1ncmF5LTYwOiAjOTU4YjdiO1xyXG4gICAgLS13YXJtLWdyYXktNzA6ICM2ZTY1NTg7XHJcbiAgICAtLXdhcm0tZ3JheS04MDogIzQ3NDEzOTtcclxuICAgIC0td2FybS1ncmF5LTkwOiAjMjExZjFjO1xyXG4gICAgLS13YXJtLXJlZC0xMDogI2ZmZjlmNztcclxuICAgIC0td2FybS1yZWQtMjA6ICNmZmVmZWE7XHJcbiAgICAtLXdhcm0tcmVkLTMwOiAjZmZkZWQ1O1xyXG4gICAgLS13YXJtLXJlZC00MDogI2ZkYzJiMTtcclxuICAgIC0td2FybS1yZWQtNTA6ICNmNTk4N2U7XHJcbiAgICAtLXdhcm0tcmVkLTYwOiAjZTE2NzQ1O1xyXG4gICAgLS13YXJtLXJlZC03MDogI2IyNDAyMDtcclxuICAgIC0td2FybS1yZWQtODA6ICM3NjI4MTI7XHJcbiAgICAtLXdhcm0tcmVkLTkwOiAjMzUxYTEyO1xyXG4gICAgLS10ZWFsLTEwOiAjZWVmZGZmO1xyXG4gICAgLS10ZWFsLTIwOiAjZDVmOWZlO1xyXG4gICAgLS10ZWFsLTMwOiAjYWVmMGZhO1xyXG4gICAgLS10ZWFsLTQwOiAjNzlkZWVlO1xyXG4gICAgLS10ZWFsLTUwOiAjNDRiZmQzO1xyXG4gICAgLS10ZWFsLTYwOiAjMjE5OWFjO1xyXG4gICAgLS10ZWFsLTcwOiAjMTM3MDdlO1xyXG4gICAgLS10ZWFsLTgwOiAjMTA0OTUyO1xyXG4gICAgLS10ZWFsLTkwOiAjMGUyNDI4O1xyXG4gICAgLS10ZWFsLTUwLWEzMDogcmdiYSg2OCwxOTEsMjExLDAuMyk7XHJcbiAgICAtLXB1cnBsZS0xMDogI2ZjZjlmZjtcclxuICAgIC0tcHVycGxlLTIwOiAjZjdlZmZmO1xyXG4gICAgLS1wdXJwbGUtMzA6ICNlZWRmZmY7XHJcbiAgICAtLXB1cnBsZS00MDogI2RlYzVmZDtcclxuICAgIC0tcHVycGxlLTUwOiAjYzc5ZWY3O1xyXG4gICAgLS1wdXJwbGUtNjA6ICNhODcyZTg7XHJcbiAgICAtLXB1cnBsZS03MDogIzgzNDRjYztcclxuICAgIC0tcHVycGxlLTgwOiAjNTkyMDk5O1xyXG4gICAgLS1wdXJwbGUtOTA6ICMyYzEzNDk7XHJcbiAgICAtLXN5c3RlbS1yZWQtMTA6ICNmZmY5Zjk7XHJcbiAgICAtLXN5c3RlbS1yZWQtMjA6ICNmZmVlZWY7XHJcbiAgICAtLXN5c3RlbS1yZWQtMzA6ICNmZmRkZGU7XHJcbiAgICAtLXN5c3RlbS1yZWQtNDA6ICNmZmJmYzE7XHJcbiAgICAtLXN5c3RlbS1yZWQtNTA6ICNmYzkyOTU7XHJcbiAgICAtLXN5c3RlbS1yZWQtNjA6ICNmNTUyNTc7XHJcbiAgICAtLXN5c3RlbS1yZWQtNzA6ICNjYzEwMTY7XHJcbiAgICAtLXN5c3RlbS1yZWQtODA6ICM4YTAwMDU7XHJcbiAgICAtLXN5c3RlbS1yZWQtOTA6ICM0NjA4MGE7XHJcbiAgICAtLXN5c3RlbS1ncmVlbi0xMDogI2YwZmRmNztcclxuICAgIC0tc3lzdGVtLWdyZWVuLTIwOiAjZGJmOWViO1xyXG4gICAgLS1zeXN0ZW0tZ3JlZW4tMzA6ICNiNmYyZDY7XHJcbiAgICAtLXN5c3RlbS1ncmVlbi00MDogIzdjZTNiMztcclxuICAgIC0tc3lzdGVtLWdyZWVuLTUwOiAjM2VjNzg2O1xyXG4gICAgLS1zeXN0ZW0tZ3JlZW4tNjA6ICMxM2EwNWY7XHJcbiAgICAtLXN5c3RlbS1ncmVlbi03MDogIzA1NzY0MjtcclxuICAgIC0tc3lzdGVtLWdyZWVuLTgwOiAjMDA0ZDJhO1xyXG4gICAgLS1zeXN0ZW0tZ3JlZW4tOTA6ICMwMjI3MTY7XHJcbiAgICAtLXBpbmstMTA6ICNmZmY4ZmY7XHJcbiAgICAtLXBpbmstMjA6ICNmZmVkZmU7XHJcbiAgICAtLXBpbmstMzA6ICNmZmRhZmQ7XHJcbiAgICAtLXBpbmstNDA6ICNmY2I5Zjk7XHJcbiAgICAtLXBpbmstNTA6ICNmNDg5ZWU7XHJcbiAgICAtLXBpbmstNjA6ICNkZDUxZDY7XHJcbiAgICAtLXBpbmstNzA6ICNiMTFmYWE7XHJcbiAgICAtLXBpbmstODA6ICM3NzBjNzI7XHJcbiAgICAtLXBpbmstOTA6ICMzZDBhM2I7XHJcbiAgICAtLWFtYmVyLTEwOiAjZmRmYWY1O1xyXG4gICAgLS1hbWJlci0yMDogI2ZiZjFlMjtcclxuICAgIC0tYW1iZXItMzA6ICNmY2UyYmE7XHJcbiAgICAtLWFtYmVyLTQwOiAjZjhjNzdlO1xyXG4gICAgLS1hbWJlci01MDogI2U3YTMzZTtcclxuICAgIC0tYW1iZXItNjA6ICNjMzdkMTY7XHJcbiAgICAtLWFtYmVyLTcwOiAjOTE1OTA3O1xyXG4gICAgLS1hbWJlci04MDogIzVkM2IwOTtcclxuICAgIC0tYW1iZXItOTA6ICMyYTFmMGU7XHJcbiAgICAtLWNvcHBlci0xMDogI2ZjZmFmOTtcclxuICAgIC0tY29wcGVyLTIwOiAjZmNmMGVkO1xyXG4gICAgLS1jb3BwZXItMzA6ICNmYWRmZDg7XHJcbiAgICAtLWNvcHBlci00MDogI2YyYzViODtcclxuICAgIC0tY29wcGVyLTUwOiAjZTBhMTkxO1xyXG4gICAgLS1jb3BwZXItNjA6ICNiZTdiNmE7XHJcbiAgICAtLWNvcHBlci03MDogIzhmNTg0OTtcclxuICAgIC0tY29wcGVyLTgwOiAjNWQzOTJmO1xyXG4gICAgLS1jb3BwZXItOTA6ICMyZDFkMTk7XHJcbiAgICAtLWdyZWVuLTEwOiAjZjZmY2Y0O1xyXG4gICAgLS1ncmVlbi0yMDogI2UzZjlkODtcclxuICAgIC0tZ3JlZW4tMzA6ICNjN2YxYjI7XHJcbiAgICAtLWdyZWVuLTQwOiAjYTVkZjg5O1xyXG4gICAgLS1ncmVlbi01MDogIzdmYzE1ZTtcclxuICAgIC0tZ3JlZW4tNjA6ICM1ZjliNDE7XHJcbiAgICAtLWdyZWVuLTcwOiAjNDQ3MTJlO1xyXG4gICAgLS1ncmVlbi04MDogIzJmNDkyMjtcclxuICAgIC0tZ3JlZW4tOTA6ICMxYjI0MTY7XHJcbiAgICAtLXNhZ2UtMTA6ICNmOGZiZjY7XHJcbiAgICAtLXNhZ2UtMjA6ICNlYWY2ZTQ7XHJcbiAgICAtLXNhZ2UtMzA6ICNkN2ViY2U7XHJcbiAgICAtLXNhZ2UtNDA6ICNiZGQ3YjA7XHJcbiAgICAtLXNhZ2UtNTA6ICM5ZGI4OGY7XHJcbiAgICAtLXNhZ2UtNjA6ICM3YjkzNzA7XHJcbiAgICAtLXNhZ2UtNzA6ICM1YTZiNTE7XHJcbiAgICAtLXNhZ2UtODA6ICMzYTQ1MzU7XHJcbiAgICAtLXNhZ2UtOTA6ICMxZTIyMWM7XHJcbiAgICAtLWxpbWUtMTA6ICNmOWZjZTk7XHJcbiAgICAtLWxpbWUtMjA6ICNlZmY4Yjk7XHJcbiAgICAtLWxpbWUtMzA6ICNkZmVlODk7XHJcbiAgICAtLWxpbWUtNDA6ICNjNmQ5NTc7XHJcbiAgICAtLWxpbWUtNTA6ICNhNmJhMzI7XHJcbiAgICAtLWxpbWUtNjA6ICM4Mzk0MWY7XHJcbiAgICAtLWxpbWUtNzA6ICM1ZjZjMTY7XHJcbiAgICAtLWxpbWUtODA6ICMzZTQ2MTM7XHJcbiAgICAtLWxpbWUtOTA6ICMyMDIzMGY7XHJcbiAgICAtLWNhbW8tMTA6ICNmYWZiZjM7XHJcbiAgICAtLWNhbW8tMjA6ICNmMWY0ZTQ7XHJcbiAgICAtLWNhbW8tMzA6ICNlNGU4Y2M7XHJcbiAgICAtLWNhbW8tNDA6ICNjZGQzYWM7XHJcbiAgICAtLWNhbW8tNTA6ICNhZWI0OGE7XHJcbiAgICAtLWNhbW8tNjA6ICM4YThmNmM7XHJcbiAgICAtLWNhbW8tNzA6ICM2NTY4NGU7XHJcbiAgICAtLWNhbW8tODA6ICM0MTQzMzU7XHJcbiAgICAtLWNhbW8tOTA6ICMyMTIxMWQ7XHJcbiAgICAtLXNtb2tlLTEwOiAjZjhmYWZiO1xyXG4gICAgLS1zbW9rZS0yMDogI2VkZjNmNDtcclxuICAgIC0tc21va2UtMzA6ICNkYmU3ZTk7XHJcbiAgICAtLXNtb2tlLTQwOiAjYmZkM2Q2O1xyXG4gICAgLS1zbW9rZS01MDogI2EwYjRiNztcclxuICAgIC0tc21va2UtNjA6ICM3ZDhmOTI7XHJcbiAgICAtLXNtb2tlLTcwOiAjNWI2OTZiO1xyXG4gICAgLS1zbW9rZS04MDogIzNjNDM0NTtcclxuICAgIC0tc21va2UtOTA6ICMxZjIxMjI7XHJcbiAgICAtLWxhdmVuZGVyLTEwOiAjZmJmOWZkO1xyXG4gICAgLS1sYXZlbmRlci0yMDogI2Y0ZjFmOTtcclxuICAgIC0tbGF2ZW5kZXItMzA6ICNlYWUyZjM7XHJcbiAgICAtLWxhdmVuZGVyLTQwOiAjZDdjYWU3O1xyXG4gICAgLS1sYXZlbmRlci01MDogI2JiYTlkMTtcclxuICAgIC0tbGF2ZW5kZXItNjA6ICM5OTgzYjE7XHJcbiAgICAtLWxhdmVuZGVyLTcwOiAjNzE1ZTg2O1xyXG4gICAgLS1sYXZlbmRlci04MDogIzQ5M2Q1NztcclxuICAgIC0tbGF2ZW5kZXItOTA6ICMyNDFmMjk7XHJcbiAgICAtLW1hdXZlLTEwOiAjZmNmOWZjO1xyXG4gICAgLS1tYXV2ZS0yMDogI2Y5ZWZmODtcclxuICAgIC0tbWF1dmUtMzA6ICNmMmUwZjE7XHJcbiAgICAtLW1hdXZlLTQwOiAjZTVjNmUzO1xyXG4gICAgLS1tYXV2ZS01MDogI2NlYTJjYztcclxuICAgIC0tbWF1dmUtNjA6ICNhYzdkYTk7XHJcbiAgICAtLW1hdXZlLTcwOiAjODA1OTdlO1xyXG4gICAgLS1tYXV2ZS04MDogIzUyM2E1MTtcclxuICAgIC0tbWF1dmUtOTA6ICMyNzFlMjc7XHJcbiAgICAtLXN5c3RlbS1ncmF5LTEwOiAjZmFmYWZhO1xyXG4gICAgLS1zeXN0ZW0tZ3JheS0yMDogI2YyZjJmMjtcclxuICAgIC0tc3lzdGVtLWdyYXktMzA6ICNlNWU1ZTU7XHJcbiAgICAtLXN5c3RlbS1ncmF5LTQwOiAjY2ZjZmNmO1xyXG4gICAgLS1zeXN0ZW0tZ3JheS01MDogI2IwYjBiMDtcclxuICAgIC0tc3lzdGVtLWdyYXktNjA6ICM4YzhjOGM7XHJcbiAgICAtLXN5c3RlbS1ncmF5LTcwOiAjNjY2O1xyXG4gICAgLS1zeXN0ZW0tZ3JheS04MDogIzQyNDI0MjtcclxuICAgIC0tc3lzdGVtLWdyYXktOTA6ICMyMTIxMjE7XHJcbiAgICAtLXN5c3RlbS1vcmFuZ2UtMTA6ICNmZmY5ZjY7XHJcbiAgICAtLXN5c3RlbS1vcmFuZ2UtMjA6ICNmZmVmZTg7XHJcbiAgICAtLXN5c3RlbS1vcmFuZ2UtMzA6ICNmZmRmZDE7XHJcbiAgICAtLXN5c3RlbS1vcmFuZ2UtNDA6ICNmZmMxYTc7XHJcbiAgICAtLXN5c3RlbS1vcmFuZ2UtNTA6ICNmZjk0NjY7XHJcbiAgICAtLXN5c3RlbS1vcmFuZ2UtNjA6ICNlYjYxMjY7XHJcbiAgICAtLXN5c3RlbS1vcmFuZ2UtNzA6ICNiOTNhMDQ7XHJcbiAgICAtLXN5c3RlbS1vcmFuZ2UtODA6ICM3OTI2MDM7XHJcbiAgICAtLXN5c3RlbS1vcmFuZ2UtOTA6ICMzNTFhMGY7XHJcbiAgICAtLXRyYW5zcGFyZW50OiB0cmFuc3BhcmVudDtcclxuICAgIC0tZWxldmF0aW9uLWZsYXQ6IG5vbmU7XHJcbiAgICAtLWVsZXZhdGlvbi1saW5lZDogMHB4IC0xcHggMXB4IHZhcigtLWNvbG9yLWJvcmRlci1mYWludCksMXB4IDBweCAxcHggdmFyKC0tY29sb3ItYm9yZGVyLWZhaW50KSwtMXB4IDBweCAxcHggdmFyKC0tY29sb3ItYm9yZGVyLWZhaW50KSwwcHggMXB4IDFweCB2YXIoLS1jb2xvci1ib3JkZXItZmFpbnQpO1xyXG4gICAgLS1lbGV2YXRpb24tcmFpc2VkOiAwcHggNHB4IDEycHggdmFyKC0tYmxhY2stYTE1KTtcclxuICAgIC0tY29ybmVyLXJhZGl1cy1zbWFsbDogMC40cmVtO1xyXG4gICAgLS1jb3JuZXItcmFkaXVzLW1lZGl1bTogMC44cmVtO1xyXG4gICAgLS1jb3JuZXItcmFkaXVzLWxhcmdlOiAzLjJyZW07XHJcbiAgICAtLWNvcm5lci1yYWRpdXMteGxhcmdlOiA0LjhyZW07XHJcbiAgICAtLWNvcm5lci1yYWRpdXMtZnVsbDogNTAlO1xyXG4gICAgLS1hdHRhY2hlZC10b3A6IDAgMCB2YXIoLS1jb3JuZXItcmFkaXVzLW1lZGl1bSkgdmFyKC0tY29ybmVyLXJhZGl1cy1tZWRpdW0pO1xyXG4gICAgLS1hdHRhY2hlZC1yaWdodDogdmFyKC0tY29ybmVyLXJhZGl1cy1tZWRpdW0pIDAgMCB2YXIoLS1jb3JuZXItcmFkaXVzLW1lZGl1bSk7XHJcbiAgICAtLWF0dGFjaGVkLWJvdHRvbTogdmFyKC0tY29ybmVyLXJhZGl1cy1tZWRpdW0pIHZhcigtLWNvcm5lci1yYWRpdXMtbWVkaXVtKSAwIDA7XHJcbiAgICAtLWF0dGFjaGVkLWxlZnQ6IDAgdmFyKC0tY29ybmVyLXJhZGl1cy1tZWRpdW0pIHZhcigtLWNvcm5lci1yYWRpdXMtbWVkaXVtKSAwO1xyXG4gICAgLS1wb2ludC10b3AtbGVmdDogMCB2YXIoLS1jb3JuZXItcmFkaXVzLW1lZGl1bSkgdmFyKC0tY29ybmVyLXJhZGl1cy1tZWRpdW0pIHZhcigtLWNvcm5lci1yYWRpdXMtbWVkaXVtKTtcclxuICAgIC0tcG9pbnQtdG9wLXJpZ2h0OiB2YXIoLS1jb3JuZXItcmFkaXVzLW1lZGl1bSkgMCB2YXIoLS1jb3JuZXItcmFkaXVzLW1lZGl1bSkgdmFyKC0tY29ybmVyLXJhZGl1cy1tZWRpdW0pO1xyXG4gICAgLS1wb2ludC1ib3R0b20tcmlnaHQ6IHZhcigtLWNvcm5lci1yYWRpdXMtbWVkaXVtKSB2YXIoLS1jb3JuZXItcmFkaXVzLW1lZGl1bSkgMCB2YXIoLS1jb3JuZXItcmFkaXVzLW1lZGl1bSk7XHJcbiAgICAtLXBvaW50LWJvdHRvbS1sZWZ0OiB2YXIoLS1jb3JuZXItcmFkaXVzLW1lZGl1bSkgdmFyKC0tY29ybmVyLXJhZGl1cy1tZWRpdW0pIHZhcigtLWNvcm5lci1yYWRpdXMtbWVkaXVtKSAwO1xyXG4gICAgLS1zcGFjaW5nLWhhbGYteDogMC40cmVtO1xyXG4gICAgLS1zcGFjaW5nLW9uZS14OiAwLjhyZW07XHJcbiAgICAtLXNwYWNpbmctb25lLWFuZC1hLWhhbGYteDogMS4ycmVtO1xyXG4gICAgLS1zcGFjaW5nLXR3by14OiAxLjZyZW07XHJcbiAgICAtLXNwYWNpbmctdGhyZWUteDogMi40cmVtO1xyXG4gICAgLS1zcGFjaW5nLWZvdXIteDogMy4ycmVtO1xyXG4gICAgLS1zcGFjaW5nLXNpeC14OiA0LjhyZW07XHJcbiAgICAtLXNwYWNpbmctZWlnaHQteDogNi40cmVtO1xyXG4gICAgLS1zcGFjaW5nLXR3ZWx2ZS14OiA5LjZyZW07XHJcbiAgICAtLWZvbnQtc2l6ZS14c21hbGw6IDEuMnJlbTtcclxuICAgIC0tZm9udC1zaXplLXNtYWxsOiAxLjRyZW07XHJcbiAgICAtLWZvbnQtc2l6ZS1tZWRpdW06IDEuNnJlbTtcclxuICAgIC0tZm9udC1zaXplLWxhcmdlOiAycmVtO1xyXG4gICAgLS1mb250LXNpemUteGxhcmdlOiAyLjRyZW07XHJcbiAgICAtLWZvbnQtc2l6ZS1kaXNwbGF5LXNtYWxsOiAyLjRyZW07XHJcbiAgICAtLWZvbnQtc2l6ZS1kaXNwbGF5LW1lZGl1bTogMy4ycmVtO1xyXG4gICAgLS1mb250LXNpemUtZGlzcGxheS1sYXJnZTogNC44cmVtO1xyXG4gICAgLS1mb250LXNpemUtZGlzcGxheS14bGFyZ2U6IDYuNHJlbTtcclxuICAgIC0tZm9udC13ZWlnaHQtcmVndWxhcjogNDAwO1xyXG4gICAgLS1mb250LXdlaWdodC1ib2xkOiA2MDA7XHJcbiAgICAtLWxpbmUtaGVpZ2h0LWRlZmF1bHQ6IDEuMjU7XHJcbiAgICAtLWxpbmUtaGVpZ2h0LW9wZW46IDEuNTtcclxuICAgIC0tcGFyYWdyYXBoLXNwYWNpbmc6IDEuMnJlbTtcclxuICAgIC0tZm9udC1mYW1pbHktc2Fucy1zZXJpZjogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xyXG4gICAgLS1mb250LWZhbWlseS1tb25vc3BhY2U6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCB0aGVtZSA9IHtcclxuICBjb2xvcnM6IHtcclxuICAgIHByaW1hcnk6ICcjMDE1Q0FCJyxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiXHJcblxyXG4vLyDrjIDshozrrLjsnpAg6rWs67aEOiBEQiDsi5ztgITrnbzsnbTspogg7ZW064u5IOygleuztOyZgCDri6TrpbjsoJXrs7TqsIAg7ZWp7LOQ7KeIIOqyveyasCDrjIDrrLjsnpDroZwg64KY7Ji0XHJcbi8vIGlkLCBjb250ZW5064qUIHBvc3Qg7J6Q7LK07J2YIOyGjeyEsVxyXG4vLyBpbWFnZVBhdGhzOiDsnbTrr7jsp4Ag7JeF66Gc65Oc7IucIOydtOuvuOyngCDqsr3roZzsoIDsnqVcclxuLy8gcG9zdEFkZGVkOiDqsozsi5zquIAg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhCDrlYwgdHJ1ZVxyXG4vLyBpZDog7Lu07Y+s64SM7Yq47JeQIG1hcO2VqOyImOulvCDthrXtlbQgcG9zdOuzhOuhnCDsiJzshJzrtoDsl6ztlaDrlYwg65OxIOyCrOyaqVxyXG4vLyDrjJPquIDqtazsobA6IG1haW5Qb3N0c+yXkOyEnCBpZOulvCDssL7slYTshJwg7ZW064u565CY64qUIOqyjOyLnOusvOydmCBDb21tZW50c+uhnCDsoJHqt7xcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGhhc01vcmVQb3N0czogdHJ1ZSwgLy8gZmFsc2U6IHBvc3RzIOuNlOydtOyDgSDqsIDsoLjsmKTsp4Ag7JWK7J2MIChmb3IgaW5maW5pdGUgc2Nyb2xsKVxyXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG4gIHJldHdlZXRMb2FkaW5nOiBmYWxzZSxcclxuICByZXR3ZWV0RG9uZTogZmFsc2UsXHJcbiAgcmV0d2VldEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuLy8gZmFrZXIsIHBsYWNlaG9sZGVyIOqzteyLneusuOyEnCDssLjsobBcclxuLy8gc2VydmVy7JeQ7IScIOu2iOufrOyYpOuKlCDqsoPsnYQg64yA7LK0KGluZmluaXRlIHNjcm9sbGluZ+ydhCDsnITtlbQpXHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSBudW1iZXIgPT5cclxuLy8gICBBcnJheShudW1iZXIpXHJcbi8vICAgICAuZmlsbCgpXHJcbi8vICAgICAubWFwKCgpID0+ICh7XHJcbi8vICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgIFVzZXI6IHtcclxuLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4vLyAgICAgICBJbWFnZXM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbi8vICAgICAgICAgfSxcclxuLy8gICAgICAgXSxcclxuLy8gICAgICAgQ29tbWVudHM6IFtcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbi8vICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICBdLFxyXG4vLyAgICAgfSkpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSBcIlVQTE9BRF9JTUFHRVNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gXCJVUExPQURfSU1BR0VTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9IFwiVVBMT0FEX0lNQUdFU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSBcIkxJS0VfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9IFwiTElLRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gXCJMSUtFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSBcIlVOTElLRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSBcIlVOTElLRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSBcIlVOTElLRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfUE9TVFNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9QT1NUU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSBcIlJFTU9WRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gXCJSRVRXRUVUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9IFwiUkVUV0VFVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSBcIlJFVFdFRVRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9IFwiUkVNT1ZFX0lNQUdFXCJcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gZGF0YSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IGRhdGEgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuLy8gY29uc3QgZHVtbXlQb3N0ID0gZGF0YSA9PiAoe1xyXG4vLyAgIGlkOiBkYXRhLmlkLFxyXG4vLyAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuLy8gICBVc2VyOiB7IGlkOiAxLCBuaWNrbmFtZTogXCLsoJzroZzstIhcIiB9LFxyXG4vLyAgIEltYWdlczogW10sXHJcbi8vICAgQ29tbWVudHM6IFtdLFxyXG4vLyB9KTtcclxuXHJcbi8vIGNvbnN0IGR1bW15Q29tbWVudCA9IGRhdGEgPT4gKHtcclxuLy8gICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgIGNvbnRlbnQ6IGRhdGEsXHJcbi8vICAgVXNlcjoge1xyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICBuaWNrbmFtZTogXCLsoITshLjtmZhcIixcclxuLy8gICB9LFxyXG4vLyB9KTtcclxuXHJcbi8vIHJlZHVjZXI6IOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtOuCtOuKlCDtlajsiJgo67aI67OA7ISx7J2EIOyngO2CpOuptOyEnClcclxuLy8gaW1tZXLrpbwg7Ya17ZW0IOu2iOuzgOyEsSDsnKDsp4DsvZTrk5wg7KCc6rGwKGRyYWZ066W8IOyTsOuptCDrsJTqv4DrgrTsmqkg66eJIOyNqOuPhCDrkKgpXHJcbi8vIGltbWVy6rCAIOyVjOyVhOyEnCDrtojrs4DshLHsnojqsowg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTspIwoaW1tZXLsnZgg6riw67O47ZiV7YOcKVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+XHJcbiAgcHJvZHVjZShzdGF0ZSwgZHJhZnQgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZClcclxuICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KSAvLyDsoovslYTsmpQg64iE66W4IOyCrOuejOuTpCBsaXN07JeQIOuCtCDslYTsnbTrlJQg64Sj7Ja07KSMXHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZClcclxuICAgICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKSAvLyDsoovslYTsmpQg64iE66W4IOyCrOuejOuTpCBsaXN07JeQ7IScIOu5vOykjFxyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcih2ID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIC8vIHJvdXRlcy9wb3N07JeQ7IScIFBvc3RJZD0uLi5wb3N0SWTroZwg64yA66y47J6Q66GcIOuzgO2Yle2WiOq4sOyXkCAuLlBvc3RJZOuhnFxyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCh2ID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhLmNvbnRlbnQpO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGFjdGlvbi5kYXRhOyAvLyByb3V0ZXIvcG9zdOyXkOyEnCDtjIzsnbzrqoXsnYQg67O064K07KSs7J2MIC0tPiBpbWFnZXBhdGhzIOuNsOydtO2EsCDsoIDsnqVcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIDEuIGNhc2XrrLgg64K07JeQ7ISgIHt967iU66Gd7JSM7JuM7JW8IO2VqFxyXG4gICAgICAvLyDrtojrs4DshLHsnYQg7KeA7YKk6riwIOychO2VnCDrhbjroKVcclxuICAgICAgLy8gY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgIC8vICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleChcclxuICAgICAgLy8gICAgIHYgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkXHJcbiAgICAgIC8vICAgKTtcclxuICAgICAgLy8gICBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAvLyAgIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgLy8gICBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgLy8gICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgIC8vICAgcmV0dXJuIHtcclxuICAgICAgLy8gICAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgICAgbWFpblBvc3RzLFxyXG4gICAgICAvLyAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAvLyAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgIC8vICAgfTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiXG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g64K0IOygleuztCDqsIDsoLjsmKTquLBcbiAgbG9hZE15SW5mb0RvbmU6IGZhbHNlLFxuICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxuICBmb2xsb3dFcnJvcjogbnVsbCxcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxuICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRICjroZzrlKnssL0g652E7Jqw6riwIOychO2VtClcbiAgbG9nSW5Eb25lOiBmYWxzZSxcbiAgbG9nSW5FcnJvcjogbnVsbCxcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcbiAgbG9nT3V0RG9uZTogZmFsc2UsXG4gIGxvZ091dEVycm9yOiBudWxsLFxuICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxuICBzaWduVXBEb25lOiBmYWxzZSxcbiAgc2lnblVwRXJyb3I6IG51bGwsXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXG4gIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXG4gIGxvYWRGb2xsb3dpbmdzTG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOycmeuqqeuhnSDrtojrn6zsmKTquLBcbiAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcbiAgbG9hZEZvbGxvd2luZ3NFcnJvcjogbnVsbCxcbiAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsm4zrqqnroZ0g67aI65+s7Jik6riwXG4gIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcbiAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxuICByZW1vdmVGb2xsb3dlckxvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsm4zrqqnroZ0g67aI65+s7Jik6riwXG4gIHJlbW92ZUZvbGxvd2VyRG9uZTogZmFsc2UsXG4gIHJlbW92ZUZvbGxvd2VyRXJyb3I6IG51bGwsXG4gIG1lOiBudWxsLFxuICBzaWduVXBEYXRhOiB7fSxcbiAgbG9naW5EYXRhOiB7fSxcbn07XG5cbi8vIOyVoeyFmOuqhSDrs4DsiJjroZwg67m87KO86riwKOyYpO2DgOuhnCDsnbjtlZwg7JeQ65+s67Cp7KeAKS8vLy8vLy8vXG4vLyDrhIjrrLQg66eO7JWE7KeA66m0IGFjdGlvc+2PtOuNlCDsg53shLHtlbTshJwg67aE66asXG5cbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1JFUVVFU1QgPSBcIkxPQURfTVlfSU5GT19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX1NVQ0NFU1MgPSBcIkxPQURfTVlfSU5GT19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9NWV9JTkZPX0ZBSUxVUkUgPSBcIkxPQURfTVlfSU5GT19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX1VQX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gXCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVFwiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gXCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gXCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRVwiO1xuXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSBcIkZPTExPV19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSBcIkZPTExPV19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSBcIkZPTExPV19GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJVTkZPTExPV19SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9IFwiVU5GT0xMT1dfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSBcIlVORk9MTE9XX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gXCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVFwiOyAvLyDtjJTroZzsm4wg7LCo64uoXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSBcIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSBcIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFXCI7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9IFwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9IFwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1NcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkVcIjtcblxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSBcIkxPQURfRk9MTE9XRVJTX1JFUVVFU1RcIjtcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gXCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTXCI7XG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9IFwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRVwiO1xuXG4vLyDrpqzrk4DshJwgdXNlcuyZgCBwb3N06rCE7J2YIOyXsOqzhCDrrLjsoJwo6riA7IKt7KCc7IucIHVzZXLrpqzrk4DshJzsl5Drj4Qg7JiB7Zal7J20IOqwgOyVvO2VqClcbi8vIHBvc3Qgc2FnYeyXkOyEnCB1c2VyIOyVoeyFmCDtmLjstpxcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwiQUREX1BPU1RfVE9fTUVcIjtcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9IFwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcblxuLy8gY29uc3QgZHVtbXlVc2VyID0gZGF0YSA9PiAoe1xuLy8gICAuLi5kYXRhLFxuLy8gICBuaWNrbmFtZTogXCJKdW5zZWh3YW5cIixcbi8vICAgaWQ6IDEsXG4vLyAgIFBvc3RzOiBbeyBpZDogMSB9XSxcbi8vICAgRm9sbG93aW5nczogW1xuLy8gICAgIHsgbmlja25hbWU6IFwi67aA6riw7LSIXCIgfSxcbi8vICAgICB7IG5pY2tuYW1lOiBcIkNoYW5obyBMZWVcIiB9LFxuLy8gICAgIHsgbmlja25hbWU6IFwibmV1ZSB6ZWFsXCIgfSxcbi8vICAgXSxcbi8vICAgRm9sbG93ZXJzOiBbXG4vLyAgICAgeyBuaWNrbmFtZTogXCLrtoDquLDstIhcIiB9LFxuLy8gICAgIHsgbmlja25hbWU6IFwiQ2hhbmhvIExlZVwiIH0sXG4vLyAgICAgeyBuaWNrbmFtZTogXCJuZXVlIHplYWxcIiB9LFxuLy8gICBdLFxuLy8gfSk7XG5cbi8vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy9hY3Rpb25zLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSBkYXRhID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxuICB9O1xufTtcblxuLy8gU1VDQ0VTUywgRkFVTFVSRSDsgq3soJzsnbTsnKA6IHNhZ2Hsl5DshJwg7Zi47Lac7J2EIO2VtOykgOuLpCh5aWVsZCBwdXTsnLzroZwpXG5cbi8vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy9yZWR1Y2VyLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuLy8gaW1tZXI6IGRyYWZ066W8IG11dGFibGXtlZjqsowg67OA6rK97ZWY66m0IOuCtOu2gOyggeycvOuhnCDrs4Dqsr3soJDsnYQgaW1tdXRhYmxl7ZWY6rKMIHN0YXRl7JeQIOuwmOyYgVxuLy8gcHJvZHVjZTogcmV0dXJu7J20IOyDneueteuQnCDqsoNcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT5cbiAgcHJvZHVjZShzdGF0ZSwgZHJhZnQgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6IC8vIOuqqOuToCDtla3rqqkg7LSI6riw7ZmUXG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsOyAvLyDroZzrlKntlaDrlZAg7JeQ65+s66W8IOyXhuyVoOykgOuLpC5cbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lLmZvbGxvd2luZ3MgPSBhY3Rpb24uZGF0YTsgLy8g66Gc6re47J247ZaI7Jy866m0IOuCtOygleuztOqwgCDrk6TslrTqsIDqsowg65CgIOqyg1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDogLy8g66qo65OgIO2VreuqqSDstIjquLDtmZRcbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBudWxsOyAvLyDroZzrlKntlaDrlZAg7JeQ65+s66W8IOyXhuyVoOykgOuLpC5cbiAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhOyAvLyDroZzqt7jsnbjtlojsnLzrqbQg64K0IO2MlOuhnOybjOygleuztOqwgCDrk6TslrTqsIDqsowg65CgIOqyg1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0FEX01ZX0lORk9fUkVRVUVTVDogLy8g66qo65OgIO2VreuqqSDstIjquLDtmZRcbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBudWxsOyAvLyDroZzrlKntlaDrlZAg7JeQ65+s66W8IOyXhuyVoOykgOuLpC5cbiAgICAgICAgZHJhZnQubG9hZE15SW5mb0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhOyAvLyDroZzqt7jsnbjtlojsnLzrqbQg64K07KCV67O06rCAIOuTpOyWtOqwgOqyjCDrkKAg6rKDXG4gICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPQURfTVlfSU5GT19GQUlMVVJFOlxuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDogLy8g66qo65OgIO2VreuqqSDstIjquLDtmZRcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDsgLy8g66Gc65Sp7ZWg65WQIOyXkOufrOulvCDsl4bslaDspIDri6QuXG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XG4gICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKFxuICAgICAgICAgIHYgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkXG4gICAgICAgICk7XG4gICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlOyAvLyDsnoTsi5zrsKntjrjsnLzroZwg7J2864uoIOqzoOygleyLnO2CtFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcbiAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxuICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxuICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHJldHVybiB7XG4gICAgICAvLyAgIC4uLnN0YXRlLFxuICAgICAgLy8gICBtZToge1xuICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxuICAgICAgLy8gICAgIFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gfTtcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKHYgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIHJldHVybiB7XG4gICAgICAvLyAgIC4uLnN0YXRlLFxuICAgICAgLy8gICBtZToge1xuICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxuICAgICAgLy8gICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL21pZGRsZXdhcmVcIjtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGNvbnRleHQpID0+IHtcclxuICBjb25zb2xlLmxvZyhjb250ZXh0KTtcclxuICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID1cclxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcyksXHJcbiAgICAgICk7XHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==