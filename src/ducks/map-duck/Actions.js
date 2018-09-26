import * as types from "./ActionTypes";

export const fetchPlaceMarksRequest = () => ({
  type: types.FETCH_PLACEMARKS_REQUEST
});

export const fetchPlaceMarksSuccess = placeMarks => ({
  type: types.FETCH_PLACEMARKS_SUCCESS,
  placeMarks
});

export const addPlacemark = flag => ({
  type: types.ADD_PlACEMARK,
  flag
});

export const addPlacemarkInList = placemark => ({
  type: types.ADD_PlACEMARK_IN_LIST,
  placemark
});

export const addCoordinates = coordinates => ({
  type: types.ADD_COORDINATES,
  coordinates
});
