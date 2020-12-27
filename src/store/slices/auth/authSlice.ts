import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_TOKEN_KEY } from "./authSlice.constants";
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
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, action.payload.accessToken);
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
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
      state.errorMsg = undefined;
      state.logging = false;
      state.user = null;
      action.payload.history.push("/login");
    });
  },
});

export const { updateUserData } = authSlice.actions;

export default authSlice.reducer;
