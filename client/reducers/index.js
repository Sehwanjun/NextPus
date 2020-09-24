import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";

// async action creator(리덕스 사가)

// //action creator
// const changeNickname = data => {
//   return { type: "CHANGE_NICKNAME", data };
// };

// changeNickname("neue zeal");
// // {type: 'CHANGE_NICKNAME', data: 'neue zeal'}
// store.dispatch(changeNickname("mighty tak"));

// (이전상태, 액션) => 다음상태
// hydrate를 위해 index 리듀서를 추가(SSR 목적)
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
