import { store } from ".";

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
