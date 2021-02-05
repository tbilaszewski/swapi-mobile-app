import { scoreSlice } from "../../store/score.slice";
import { ScoreState } from "../../store/types";

describe("score.slice reducers", () => {
  const reducers = scoreSlice.caseReducers;
  it("should be defined", () => {
    expect(reducers).toBeDefined();
  });
  describe("incrementScore reducer", () => {
    it("should be defined", () => {
      expect(reducers.incrementScore).toBeDefined();
    });

    it("should increase right player score", () => {
      const state: ScoreState = { scores: [0, 0] };
      const incrementScore = reducers.incrementScore;

      incrementScore(state, { payload: 0, type: "incrementScore" });

      expect(state).toStrictEqual({ scores: [1, 0] });
    });

    it("should not increase out of scope player score", () => {
      const state: ScoreState = { scores: [0, 0] };
      const incrementScore = reducers.incrementScore;

      incrementScore(state, { payload: 2, type: "incrementScore" });

      expect(state).toStrictEqual({ scores: [0, 0] });
    });

    it("should increase multiple player scores", () => {
      const state: ScoreState = { scores: [0, 0] };
      const incrementScore = reducers.incrementScore;

      incrementScore(state, { payload: 0, type: "incrementScore" });
      incrementScore(state, { payload: 1, type: "incrementScore" });
      incrementScore(state, { payload: 0, type: "incrementScore" });

      expect(state).toStrictEqual({ scores: [2, 1] });
    });
  });
});
