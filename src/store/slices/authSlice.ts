import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios, { AxiosError, AxiosResponse } from "axios";
import { BaseResponse } from "../../types/BaseResponse";
import { API_LOGIN_USER, API_REGISTER_USER } from "../../utils/api.constants";

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

export default authSlice.reducer;
