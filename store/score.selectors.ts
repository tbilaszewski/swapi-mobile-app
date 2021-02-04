import { StoreState } from "./types";

export const playersScoresSelector = (state: StoreState): number[] =>
  state.scores;
