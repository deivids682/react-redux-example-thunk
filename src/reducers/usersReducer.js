import { actionsTypes } from "../actions";

const initState = [];

export default (state = initState, action) => {
  if (action.type === actionsTypes.FETCH_USERS) {
    return [...state, action.payload];
  }
  return state;
};
