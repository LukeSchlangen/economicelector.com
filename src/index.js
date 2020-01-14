import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { candidates } from "./reducers/candidates.reducer";
import { userBudgetProposal } from "./reducers/user-budget-proposal.reducer";

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
