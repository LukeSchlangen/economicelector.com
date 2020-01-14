import { ALL_CATEGORIES } from "../constants/budget-categories";
import { SET_PREFERENCE } from "../constants/action-types";

const defaultUserBudgetProposal = ALL_CATEGORIES.reduce(
  (defaultBudget, categoryName) => ({ ...defaultBudget, [categoryName]: 0 }),
  {}
);

export const userBudgetProposal = (
  state = defaultUserBudgetProposal,
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
