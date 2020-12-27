import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "./authSlice.utils";

interface InitialState {
  user: {
    userName: string;
    token: string;
  } | null;
  errorMsg?: string;
  logging: boolean;
}

const initialState: InitialState = { user: null, logging: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserData: (
      state,
      action: PayloadAction<{ user: { userName: string; token: string } }>
    ) => {
      const { user } = action.payload;
      state.user = user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.logging = true;
      state.user = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.errorMsg = undefined;
      state.logging = false;
      state.user = {
        token: action.payload.accessToken,
        userName: action.payload.userName,
      };
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.logging = false;
      state.errorMsg = action.payload!.error;
      state.user = null;
    });

    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.errorMsg = undefined;
      state.logging = false;
      state.user = null;
    });
  },
});

export const { updateUserData } = authSlice.actions;

export default authSlice.reducer;
