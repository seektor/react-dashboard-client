import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios, { AxiosError, AxiosResponse } from "axios";
import {
  API_LOGIN_USER,
  API_REGISTER_USER,
} from "../../../constants/api.constants";
import { BaseResponse } from "../../../types/BaseResponse";

export const registerUser = async (
  userName: string,
  password: string
): Promise<BaseResponse> => {
  try {
    await Axios.post(API_REGISTER_USER, { userName, password });
    return { succes: true };
  } catch (e) {
    return { succes: false, errorMsg: e.message };
  }
};

type LoginFullfilledResponse = {
  userName: string;
  accessToken: string;
};
type LoginPayload = {
  userName: string;
  password: string;
};
type LoginRejectedResponse = {
  loginError?: string;
};

export const loginUser = createAsyncThunk<
  LoginFullfilledResponse,
  LoginPayload,
  { rejectValue: LoginRejectedResponse }
>("auth/loginUser", async (payload, { rejectWithValue }) => {
  const res: AxiosResponse<LoginFullfilledResponse> = await Axios.post(
    API_LOGIN_USER,
    {
      ...payload,
    }
  );
  try {
    return res.data;
  } catch (e) {
    const error: AxiosError<LoginRejectedResponse> = e;
    if (!error.response) {
      throw e;
    }
    return rejectWithValue(error.response.data);
  }
});
