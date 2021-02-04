import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  scores: [0, 0],
};

export const scoreSlice = createSlice({
  name: "scoreSlice",
  initialState,
  reducers: {
    incrementScore: (state, action: PayloadAction<number>) => {
      const playerId = action.payload;
      const playerScore = state.scores[playerId];
      if (playerScore !== undefined) {
        state.scores[playerId]++;
      }
    },
  },
});
