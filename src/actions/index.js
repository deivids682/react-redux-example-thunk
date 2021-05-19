import _ from "lodash";
import fetchWrapper from "../fetchWrapper";

export const actionsTypes = {
  FETCH_POSTS: "FETCH_POSTS",
  FETCH_USERS: "FETCH_USERS",
};

export const fetchPosts = () => async (dispatch) => {
  const response = await fetchWrapper.get("/posts");
  dispatch({
    type: actionsTypes.FETCH_POSTS,
    payload: response,
  });
};

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await fetchWrapper.get(`/users/${id}`);

  dispatch({
    type: actionsTypes.FETCH_USERS,
    payload: response,
  });
});
