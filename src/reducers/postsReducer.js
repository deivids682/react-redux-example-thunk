import { actionsTypes } from "../actions";

const initState = [];

export default (state = initState, action) => {
  if (action.type === actionsTypes.FETCH_POSTS) {
    return action.payload;
  }
  return state;
};
