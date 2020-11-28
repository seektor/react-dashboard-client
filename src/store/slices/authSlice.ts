import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  userName: string;
  password: string;
  errorMsg?: string;
}

const initialState = { userName: "" };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(state, action: PayloadAction<{}>) {},
    registerUser(state, action: PayloadAction<{}>) {},
  },
});

export const { loginUser, registerUser } = authSlice.actions;

export default authSlice.reducer;
