import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import places from "./reducers/places";
import placesFilter from "./reducers/placesFilter";
import navigation from "./reducers/navigation";
import trackingMiddleware from "./middlewares/tracking";
import logger from "./middlewares/logger";
import thunk from 'redux-thunk';

let reducer = combineReducers({
  places,
  placesFilter: placesFilter,
  navigation
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [trackingMiddleware, logger, thunk];
let store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;