import { UPDATE_CANDIDATE_DIFFERENCES } from "../constants/action-types";

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

export const candidates = (state = initialCandidateList, { type, payload }) => {
  switch (type) {
    case UPDATE_CANDIDATE_DIFFERENCES:
      return payload;
    default:
      return state;
  }
};
