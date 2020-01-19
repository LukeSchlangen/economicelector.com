import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ALL_CATEGORIES } from "../../constants/budget-categories";
import { updatePreferences } from "../../thunks/update-preferences";
import { updateCandidateDifferences } from "../../thunks/update-candidate-differences";

const App = props => {
  useEffect(props.updateCandidateDifferences, []);
  return (
    <div>
      {ALL_CATEGORIES.map(category => (
        <div>
          <label key={category}>
            {category}
            <input
              type="number"
              value={props.userBudgetProposal[category]}
              onChange={event =>
                props.updatePreferences(category, event.target.value)
              }
            />
          </label>
        </div>
      ))}
      <pre>{JSON.stringify(props, null, 2)}</pre>
      Data from the City of Eden Prairie{" "}
      <a href="https://www.edenprairie.org/Home/ShowDocument?id=9959">
        https://www.edenprairie.org/Home/ShowDocument?id=9959
      </a>
    </div>
  );
};

export default connect(
  state => state,
  { updatePreferences, updateCandidateDifferences }
)(App);
