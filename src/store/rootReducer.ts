import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers({
  authSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
