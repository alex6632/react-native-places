import initialStates from "../initialStates";
import actionTypes from "../actions/actionTypes";

function places(state = initialState, action) {
  switch (action.type) {

    case actionTypes.ADD_PLACE:
      const list = state.list.concat();
      list.unshift({
        label: action.label,
        visited: false,
        id: list.length
      });
      return {...state, list};

    case actionTypes.TOGGLE_PLACE:
      const newList = state.list.concat(); // equal-to [...state]
      newList[action.index].visited = !newList[action.index].visited;
      return { ...state, list: newList};

    case actionTypes.FETCH_PLACES_REQUEST:
      return { ...state, isLoaded: true};

    case actionTypes.FETCH_PLACES_SUCCESS:
      return { ...state, list: action.payload, isLoaded: false};

    case actionTypes.FETCH_PLACES_ERROR:
      return { ...state, error: action.payload, isLoaded: false};

    default:
      return state;
  }
}

export default places;
