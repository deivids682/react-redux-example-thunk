const initState = [];

export default (state = initState, action) => {
  if (action.type === "FETCH_POSTS") {
    return action.payload;
  }
  return state;
};
