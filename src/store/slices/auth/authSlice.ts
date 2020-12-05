import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authSlice.utils";

interface InitialState {
  user: {
    userName: string;
    token: string;
  } | null;
  errorMsg?: string;
}

const initialState: InitialState = { user: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.errorMsg = undefined;
      state.user = {
        token: action.payload.accessToken!,
        userName: action.payload.userName!,
      };
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.errorMsg = action.payload!.loginError;
      state.user = null;
    });
  },
});

export default authSlice.reducer;
