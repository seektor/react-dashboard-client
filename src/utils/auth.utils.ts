import { History } from "history";
import jwt_decode from "jwt-decode";
import { setLoggingInResult } from "../store/slices/auth/authSlice";
import { LOCAL_STORAGE_TOKEN_KEY } from "../store/slices/auth/authSlice.constants";
import { AppDispatch } from "../store/store";

export const maintainSession = (dispatch: AppDispatch, history: History) => {
  const userToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
  if (userToken) {
    const decoded: { userName: string; id: string } = jwt_decode(userToken);
    dispatch(
      setLoggingInResult({
        user: { token: userToken, userName: decoded.userName },
      })
    );
    history.push("/");
  }
};
