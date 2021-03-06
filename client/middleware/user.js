import { put, all, fork, takeLatest, call } from "redux-saga/effects";
import axios from 'axios';
import {
  FOLLOW_FAILURE,
  FOLLOW_REQUEST,
  FOLLOW_SUCCESS,
  UNFOLLOW_FAILURE,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
  CHANGE_NICKNAME_REQUEST,
  CHANGE_NICKNAME_SUCCESS,
  CHANGE_NICKNAME_FAILURE,
  LOAD_FOLLOWINGS_REQUEST,
  LOAD_FOLLOWINGS_SUCCESS,
  LOAD_FOLLOWINGS_FAILURE,
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWERS_SUCCESS,
  LOAD_FOLLOWERS_FAILURE,
  REMOVE_FOLLOWER_REQUEST,
  REMOVE_FOLLOWER_SUCCESS,
  REMOVE_FOLLOWER_FAILURE,
} from "reducers/user";


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
  return axios.post("/user/login", data);
}

// 4. logIn 실행
// 6. loginAPI를 실행시켜서 result로 결과를 받음
// put: dispatch와 같음(액션객체를 dispatch)
// call: 동기함수실행
// call이라 axios.post('api/login).then(()=>{yield put({type: ...})})
// fork였다면 그냥 axios.post('api/login)와 같음
// 즉, API에 post한 다음 끝나면 다음것 put실행한다(fork면 명령내리고 받기전에 바로다음것)
// yield는 await과 비슷한데 fork는 이를 무시하게끔 즉시실행하는 것
function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    // loginAPI(action.data)과 같은뜻: 함수호출 방식이 call은 이렇게
    // 첫번째자리가 함수, 그다음자리부터 매개변수(인수)
    // 즉, action에서 data꺼내서 API함수에 전달
    // loginRequest에서 받은 것 바로 success로 보내버림(임시방편)
    // result.data: 서버로부터 사용자 정보를 받아옴
    yield put({ type: LOG_IN_SUCCESS, data: result.data });
  } catch (err) {
    // 7. 요청이 실패할 경우를 위해
    yield put({ type: LOG_IN_FAILURE, error: err.response.data });
  }
}
// 8. 성공 결과는 result.data, 실패 결과는 err.response.data에 담김

function logOutAPI() {
  return axios.post("/user/logout");
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}
// @ 정보 불러오기
function loadMyInfoAPI() {
  return axios.get("/user");
}

function* loadMyInfo(action) {
  try {
    const result = yield call(loadMyInfoAPI, action.data);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

// @ 회원가입
// get, delete요청: data를 넘길 수 없음 // post, put, 패치: 넘길 수 있음
// 서버에서는 req.body형태로 받음(server/route/user 확인) cf. /user --> localhost:3065/user
function signUpAPI(data) {
  return axios.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    console.log(result);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function changeNicknameAPI(data) {
  return axios.patch("/user/nickname", { nickname: data });
}

function* changeNickname(action) {
  try {
    const result = yield call(changeNicknameAPI, action.data);
    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: CHANGE_NICKNAME_FAILURE,
      error: err.response.data,
    });
  }
}

function followAPI(data) {
  return axios.post(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield call(followAPI, action.data);
    yield put({
      type: FOLLOW_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function unfollowAPI(data) {
  return axios.delete(`/user/${data}/unfollow`);
}

function* unfollow(action) {
  try {
    const result = yield call(unfollowAPI, action.data);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

// followings, followers 목록 불러오기
function loadfollowingsAPI(data) {
  return axios.get('/user/followings', data);
}

function* loadFollowings(action) {
  try {
    const result = yield call(loadfollowingsAPI, action.data);
    yield put({
      type: LOAD_FOLLOWINGS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_FOLLOWINGS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadFollowersAPI(data) {
  return axios.delete('/user/followers', data);
}

function* loadFollowers(action) {
  try {
    const result = yield call(loadFollowersAPI, action.data);
    yield put({
      type: LOAD_FOLLOWERS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_FOLLOWERS_FAILURE,
      error: err.response.data,
    });
  }
}

function removeFollowerAPI(data) {
  return axios.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield call(removeFollowerAPI, action.data);
    yield put({
      type: REMOVE_FOLLOWER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_FOLLOWER_FAILURE,
      error: err.response.data,
    });
  }
}

// 9. yield, take 단점: 딱 한번밖에 안받음(일회용) 한번쓰면 사라져버림(따라서 while로 감싸야)
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
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchChangeNickname() {
  yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}

function* watchLoadFollowings() {
  yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

function* watchLoadFollowers() {
  yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function* watchRemoveFollower() {
  yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
}

// 1. all: 배열 내의 것들을 동시실행(배열을 받음)
// 2. fork, call: 함수실행 명령어(fork와 call의 차이점 존재함)
// fork: 비동기함수호출(기다리지않고 바로 다음것 실행), call: 동기함수호출(기다린후 실행)
// # call, yield등을 쓰는 이유: test할 때 편함(a.next()함수실행으로 하나씩 버그검사, test코드 짜둬야 함)
export default function* userSaga() {
  yield all([
    fork(watchRemoveFollower),
    fork(watchLoadFollowings),
    fork(watchLoadFollowers),
    fork(watchChangeNickname),
    fork(watchLoadMyInfo),
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ]);
}
