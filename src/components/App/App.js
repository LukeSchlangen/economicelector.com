import React from "react";
import { connect } from "react-redux";
import {
  SET_PREFERENCE,
  UPDATE_CANDIDATE_DIFFERENCES
} from "../../constants/action-types";
import { ALL_CATEGORIES } from "../../constants/budget-categories";

const setPreference = payload => ({
  type: SET_PREFERENCE,
  payload
});

const updateCandidateDifferences = payload => ({
  type: UPDATE_CANDIDATE_DIFFERENCES
});

const updatePreferences = payload => {
  console.log(payload);
  return (dispatch, getState) => {
    // update the user preferences
    dispatch(setPreference(payload));
    // update differences between user and candidates
    dispatch(updateCandidateDifferences());
  };
};

const App = props => (
  <div>
    {ALL_CATEGORIES.map(category => (
      <button
        key={category}
        onClick={() =>
          props.updatePreferences({
            propertyName: category,
            propertyValue: 125000
          })
        }
      >
        Set {category} to 125000
      </button>
    ))}
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
);

export default connect(
  state => state,
  { updatePreferences }
)(App); // connect is a function... that returns a function! Currying!!
