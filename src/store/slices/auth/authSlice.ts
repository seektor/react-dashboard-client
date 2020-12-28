import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  user: {
    userName: string;
    token: string;
  } | null;
  errorMessage?: string;
  logging: boolean;
}

const initialState: InitialState = { user: null, logging: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    initLoggingIn: (state) => {
      state.logging = true;
      state.errorMessage = undefined;
      state.user = null;
    },
    setLoggingInResult: (
      state,
      action: PayloadAction<{
        user: { userName: string; token: string } | null;
        errorMessage?: string;
      }>
    ) => {
      const { user, errorMessage } = action.payload;
      state.user = user;
      state.errorMessage = errorMessage;
      state.logging = false;
    },
  },
});

export const { initLoggingIn, setLoggingInResult } = authSlice.actions;

export default authSlice.reducer;
