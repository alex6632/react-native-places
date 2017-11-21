import { combineReducers, createStore } from 'redux';
import places from './reducers/places';
import placesFilter from './reducers/placesFilter';

let rootReducer = combineReducers({ places, placesFilter });
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;