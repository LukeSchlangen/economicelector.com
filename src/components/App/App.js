import React from "react";
import { connect } from "react-redux";
import { ALL_CATEGORIES } from "../../constants/budget-categories";
import { updatePreferences } from "../../thunks/update-preferences";

const App = props => (
  <div>
    {ALL_CATEGORIES.map(category => (
      <label key={category}>
        {category}
        <input
          onChange={event =>
            props.updatePreferences(category, event.target.value)
          }
        />
      </label>
    ))}
    <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
);

export default connect(
  state => state,
  { updatePreferences }
)(App);
