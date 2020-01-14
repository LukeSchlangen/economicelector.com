import { SET_PREFERENCE } from "../constants/action-types";
import { updateCandidateDifferences } from "../thunks/update-candidate-differences";

const setPreference = payload => ({
  type: SET_PREFERENCE,
  payload
});

export const updatePreferences = (propertyName, propertyValue) => {
  return async (dispatch, getState) => {
    // update the user preferences
    dispatch(
      setPreference({
        propertyName,
        propertyValue
      })
    );
    // update differences between user and candidates
    dispatch(updateCandidateDifferences());
  };
};
