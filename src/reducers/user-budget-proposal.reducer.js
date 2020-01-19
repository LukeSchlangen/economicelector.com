import { SET_PREFERENCE } from "../constants/action-types";
import { currentBudget } from "../constants/current-budget";

export const userBudgetProposal = (
  state = currentBudget,
  { type, payload }
) => {
  switch (type) {
    case SET_PREFERENCE:
      return {
        ...state,
        [payload.propertyName]: payload.propertyValue
      };
    default:
      return state;
  }
};
