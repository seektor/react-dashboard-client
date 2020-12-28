import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios, { AxiosResponse } from "axios";
import { History } from "history";
import { API_LOGIN, API_LOGOUT } from "../../../constants/api.constants";
import { initLoggingIn, setLoggingInResult } from "./authSlice";
import { LOCAL_STORAGE_TOKEN_KEY } from "./authSlice.constants";

type LoginFullfilledResponse = {
  userName: string;
  accessToken: string;
};
type LoginPayload = {
  userName: string;
  password: string;
  history: History;
};

export const loginUser = createAsyncThunk<void, LoginPayload>(
  "auth/loginUser",
  async (payload, { dispatch }) => {
    try {
      dispatch(initLoggingIn());
      const res: AxiosResponse<LoginFullfilledResponse> = await Axios.post(
        API_LOGIN,
        {
          ...payload,
        }
      );
      const { accessToken, userName } = res.data;
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, res.data.accessToken);
      dispatch(setLoggingInResult({ user: { token: accessToken, userName } }));
      payload.history.push("/");
    } catch (error) {
      dispatch(
        setLoggingInResult({
          user: null,
          errorMessage: error.response?.data.message || error.message,
        })
      );
    }
  }
);

type LogoutPayload = {
  history: History;
};

export const logoutUser = createAsyncThunk<void, LogoutPayload>(
  "auth/logoutUser",
  async (payload, { dispatch }) => {
    try {
      await Axios.post(API_LOGOUT);
      payload.history.push("/login", { fromLogout: true });
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
      dispatch(setLoggingInResult({ user: null }));
    } catch (error) {
      dispatch(
        setLoggingInResult({
          user: null,
          errorMessage: error.response?.data.message || error.message,
        })
      );
    }
  }
);
