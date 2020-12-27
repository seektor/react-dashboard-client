import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios, { AxiosResponse } from "axios";
import { History } from "history";
import { API_LOGIN, API_LOGOUT } from "../../../constants/api.constants";
import { LOCAL_STORAGE_TOKEN_KEY } from "./authSlice.constants";

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
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, res.data.accessToken);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response?.data.message || error.message);
  }
});

type LogoutPayload = {
  history: History;
};
type LogoutRejectedResponse = {
  error: string;
};

export const logoutUser = createAsyncThunk<
  undefined,
  LogoutPayload,
  { rejectValue: LogoutRejectedResponse }
>("auth/logoutUser", async (payload, { rejectWithValue }) => {
  try {
    await Axios.post(API_LOGOUT);
    payload.history.push("/login", { fromLogout: true });
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  } catch (error) {
    return rejectWithValue(error.response?.data.message || error.message);
  }
});
