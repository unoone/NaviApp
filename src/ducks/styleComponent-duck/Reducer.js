import * as types from "./ActionTypes";

const initialState = {
  drawerState: false
};

export const style = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_DRAWER_STATE:
      return {
        ...state,
        drawerState: action.drawerState
      };

    default:
      return state;
  }
};
