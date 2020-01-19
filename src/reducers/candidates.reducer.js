import { UPDATE_CANDIDATE_DIFFERENCES } from "../constants/action-types";
import { currentBudget } from "../constants/current-budget";

const initialCandidateList = [
  {
    firstName: "Tom",
    lastName: "Haverford",
    candidateBudget: currentBudget,
    differenceFromUser: 0
  },
  {
    firstName: "Leslie",
    lastName: "Knope",
    candidateBudget: {
      Administration: 4455369,
      "Community Development": 2498945,
      "Parks and Recreation": 12398717,
      Police: 15053457,
      Fire: 6279724,
      "Public Works": 6070488,
      "Capital Outlay": 6677160,
      Utilities: 19761661,
      "Internal Service": 18197807,
      "Liquor Operations": 10997725,
      "Debt Service": 2693511,
      Other: 1384874
    },
    differenceFromUser: 0
  }
];

export const candidates = (state = initialCandidateList, { type, payload }) => {
  switch (type) {
    case UPDATE_CANDIDATE_DIFFERENCES:
      return payload;
    default:
      return state;
  }
};
