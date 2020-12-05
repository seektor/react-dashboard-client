import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authSlice.utils";

interface InitialState {
  user: {
    userName: string;
    token: string;
  } | null;
  loginErrorMsg?: string;
  logging: boolean;
}

const initialState: InitialState = { user: null, logging: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.logging = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loginErrorMsg = undefined;
      state.logging = false;
      state.user = {
        token: action.payload.accessToken!,
        userName: action.payload.userName!,
      };
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.logging = false;
      state.loginErrorMsg = action.payload!.loginError;
      state.user = null;
    });
  },
});

export default authSlice.reducer;
