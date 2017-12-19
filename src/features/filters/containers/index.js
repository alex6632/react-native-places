import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { updateFilter } from "../../../redux/actions/places";
import Component from "../components";

function mapDispatchToProps(dispatch) {
  return {
    onSelectFilter: value => {
      dispatch(updateFilter(value));
    }
  };
}

function mapStateToProps(state) {
  return {
    selected: state.placesFilter
  };
}

const FilterContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Component);
export default FilterContainer;
