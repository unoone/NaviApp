import * as types from "./ActionTypes";
import data from "../../data";
const initialState = {
  placeMarkList: [],
  placemarkVisible: false,
  placemark: {},
  coordinates: []
};

export const map = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_PLACEMARKS_SUCCESS:
      return {
        ...state,
        placeMarkList: action.placeMarks
      };
    case types.ADD_PlACEMARK:
      console.log("add", action.flag);
      return {
        ...state,
        placemarkVisible: action.flag
      };
    case types.ADD_PlACEMARK_IN_LIST:
      console.log("action.placemark", action.placemark);
      console.log("state.placeMarkList", state.placeMarkList);
      return {
        ...state,

        placeMarkList: state.placeMarkList.concat(action.placemark)
      };
    case types.ADD_COORDINATES:
      console.log("action.coordinates", action.coordinates);
      return {
        ...state,
        coordinates: action.coordinates
      };
    default:
      return state;
  }
};
