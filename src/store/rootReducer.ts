import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";
import toastsSlice from "./slices/toasts/toastsSlice";

const rootReducer = combineReducers({
  authSlice,
  toastsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
