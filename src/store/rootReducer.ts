import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";

const rootReducer = combineReducers({
  authSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
