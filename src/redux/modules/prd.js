import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//action type
const SET_POST = "SET_POST";
const LOADING= "LOADING";

const setPost = createAction(SET_POST, (post_list) => ({ post_list}));
const loading = createAction(LOADING, (is_loading)=>({is_loading}));

const initialState = {
    list: [],
    is_loading: false,
  };

  const initialPost = {


  };
//상품 리스트 API
const getPostDB = () =>{
    return function (dispatch, getState, {history}){

        dispatch(loading(true));

        axios({
            method: "get",
            //url:"http://latelier.api/items",
        }).then(res => {
            const post_list = res.data.result;
            dispatch(setPost(post_list));
        })
    }
}
//상품 상세 페이지 API
const getOnePostDB = (id) => {
    return function (dispatch, getState, { history }) {

        dispatch(loading(true));

        axios({
            method: "get",
            url:`http://13.12 5.249.241/api/items/${id}`,
        }).then(res => {
            const post = res.data.result[0];
            console.log(post);
            dispatch(setPost([post]));
        })
    }};

export default handleActions(
    {
        [SET_POST]: (
            state,
            action //처리할 동작 명시
          ) =>
            produce(state, (draft) => {
              draft.list.push(...action.payload.post_list);
              draft.is_loading = false;
              }),
              [LOADING]: (state, action) => 
              produce(state, (draft) => {
                draft.is_loading = action.payload.is_loading;
              })
    },  initialState
    );
   
    

const actionCreators = {
    setPost,
    getPostDB,
    getOnePostDB
};

export { actionCreators };