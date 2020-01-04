import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { ALL_CATEGORIES } from "./constants/budget-categories";
import thunk from "redux-thunk";
import {
  SET_PREFERENCE,
  UPDATE_CANDIDATE_DIFFERENCES
} from "./constants/action-types";

const initialCandidateList = [
  {
    firstName: "Tom",
    lastName: "Haverford",
    candidateBudget: {
      parks: 125000,
      recreation: 300000
    },
    differenceFromUser: 0
  },
  {
    firstName: "Leslie",
    lastName: "Knope",
    candidateBudget: {
      parks: 500000,
      recreation: 30000
    },
    differenceFromUser: 0
  }
];

const candidates = (state = initialCandidateList, { type, payload }) => {
  switch (type) {
    case SET_PREFERENCE:
      return state.map(candidate => {
        return {
          ...candidate,
          differenceFromUser: 200
        };
      });
    default:
      return state;
  }
};

const defaultUserBudgetProposal = ALL_CATEGORIES.reduce(
  (defaultBudget, categoryName) => ({ ...defaultBudget, [categoryName]: 0 }),
  {}
);

const userBudgetProposal = (
  state = defaultUserBudgetProposal,
  { type, payload }
) => {
  switch (type) {
    case SET_PREFERENCE:
      console.log(payload);
      return {
        ...state,
        [payload.propertyName]: payload.propertyValue
      };
    default:
      return state;
  }
};

// The store only accepts one reducer
const storeInstance = createStore(
  combineReducers({
    candidates,
    userBudgetProposal
  }),
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
