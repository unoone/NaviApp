import { combineReducers } from "redux";
import { events } from "./ducks/events-duck/Reducer";
import { auth } from "./ducks/auth-duck/Reducer";
import { style } from "./ducks/styleComponent-duck/Reducer";
import { map } from "./ducks/map-duck/Reducer";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";

export const rootReducer = combineReducers({
  map,
  auth,
  events,
  style,
  router: routerReducer
});
