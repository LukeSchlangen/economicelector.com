import { UPDATE_CANDIDATE_DIFFERENCES } from "../constants/action-types";
import { ALL_CATEGORIES } from "../constants/budget-categories";

export const updateCandidateDifferences = () => (dispatch, getState) => {
  const { candidates, userBudgetProposal } = getState();
  const updatedCandidates = candidates.map(candidate => {
    const { candidateBudget } = candidate;
    const differenceFromUser = ALL_CATEGORIES.reduce((total, category) => {
      if (!candidateBudget[category] || !userBudgetProposal[category]) {
        console.error(`no ${category}`);
      }
      const categoryDifference = Math.abs(
        candidateBudget[category] - userBudgetProposal[category]
      );
      return total + categoryDifference;
    }, 0);
    return {
      ...candidate,
      differenceFromUser
    };
  });
  dispatch({
    type: UPDATE_CANDIDATE_DIFFERENCES,
    payload: updatedCandidates
  });
};
