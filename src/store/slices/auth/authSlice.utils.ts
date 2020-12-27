import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios, { AxiosResponse } from "axios";
import { API_LOGIN, API_LOGOUT } from "../../../constants/api.constants";

type LoginFullfilledResponse = {
  userName: string;
  accessToken: string;
};
type LoginPayload = {
  userName: string;
  password: string;
};
type LoginRejectedResponse = {
  error: string;
};

export const loginUser = createAsyncThunk<
  LoginFullfilledResponse,
  LoginPayload,
  { rejectValue: LoginRejectedResponse }
>("auth/loginUser", async (payload, { rejectWithValue }) => {
  try {
    const res: AxiosResponse<LoginFullfilledResponse> = await Axios.post(
      API_LOGIN,
      {
        ...payload,
      }
    );
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response?.data.message || error.message);
  }
});

type LogoutRejectedResponse = {
  error: string;
};

export const logoutUser = createAsyncThunk<
  undefined,
  undefined,
  { rejectValue: LogoutRejectedResponse }
>("auth/logoutUser", async (payload, { rejectWithValue }) => {
  try {
    await Axios.post(API_LOGOUT);
  } catch (error) {
    return rejectWithValue(error.response?.data.message || error.message);
  }
});
