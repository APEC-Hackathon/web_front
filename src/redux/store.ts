import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./features/appStateSlice";
import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    appState: appStateSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;