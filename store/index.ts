import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { scoreSlice } from "./score.slice";
import { AppDispatch } from "./types";

export const store = configureStore({
  reducer: scoreSlice.reducer,
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
