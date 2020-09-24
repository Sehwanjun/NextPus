import shortId from "shortid";
import produce from "immer";
import faker from "faker";

// 대소문자 구분: DB 시퀄라이즈 해당 정보와 다른정보가 합쳐질 경우 대문자로 나옴
// id, content는 post 자체의 속성
// imagePaths: 이미지 업로드시 이미지 경로저장
// postAdded: 게시글 추가가 완료되었을 때 true
// id: 컴포넌트에 map함수를 통해 post별로 순서부여할때 등 사용
// 댓글구조: mainPosts에서 id를 찾아서 해당되는 게시물의 Comments로 접근
export const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true, // false: posts 더이상 가져오지 않음 (for infinite scroll)
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
};

// faker, placeholder 공식문서 참조
// server에서 불러오는 것을 대체(infinite scrolling을 위해)

export const generateDummyPost = number =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      content: faker.lorem.paragraph(),
      Images: [
        {
          src: faker.image.image(),
        },
      ],
      Comments: [
        {
          User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
          },
          content: faker.lorem.sentence(),
        },
      ],
    }));

export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = data => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

// shortId: id가 겹치지 않도록 만들어주는 library
const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
});

const dummyComment = data => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "전세환",
  },
});
// reducer: 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성을 지키면서)
// immer를 통해 불변성 유지코드 제거(draft를 쓰면 바꿀내용 막 써도 됨)
// immer가 알아서 불변성있게 다음 상태로 만들어줌(immer의 기본형태)
const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        // 기존posts와 dummy posts를 합쳐서 보여줌
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePosts = draft.mainPosts.length < 80;
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
        draft.mainPosts.unshift(dummyPost(action.data));
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
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
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
      case ADD_COMMENT_SUCCESS: {
        const post = draft.mainPosts.find(v => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      }
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

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
