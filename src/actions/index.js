import fetchWrapper from "../fetchWrapper";

export const fetchPosts = () => async (dispatch) => {
  const response = await fetchWrapper.get("/posts");
  dispatch({
    type: "FETCH_POSTS",
    payload: response,
  });
};
