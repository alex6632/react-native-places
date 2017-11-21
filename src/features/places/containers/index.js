import React from "react";
import { connect } from "react-redux";
import Component from "../components";
import {fetchPlaces} from "../../../redux/actions/places";

class LifeCycleComponent extends React.Component {
  componentDidMount() {
    this.props.init();
  }
  render() {
    return <Component {...this.props} />
  }
}

function mapDispatchToProps(dispatch) {
  return {
    init() {
      dispatch(fetchPlaces());
    },
    onToggleItem: index => {
      dispatch({ type: "TOGGLE_PLACE", index });
      dispatch(incrementAsync());
    },
    addItem: label => {
      dispatch({ type: "ADD_PLACE", label });
    },
    updateFilter: value => {
      dispatch({ type: "SET_FILTER", filter: value });
    }
  };
}

function mapStateToProps(state) {
  return {
    places: state.places,
    filter: state.placesFilter
  };
}

const PlacesContainer = connect(mapStateToProps, mapDispatchToProps)(LifeCycleComponent);
export default PlacesContainer;

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

function incrementAsync() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with 'dispatch'
      dispatch(increment());
    }, 1000);
  };
}
