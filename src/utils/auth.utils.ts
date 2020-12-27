import jwt_decode from "jwt-decode";
import { updateUserData } from "../store/slices/auth/authSlice";
import { LOCAL_STORAGE_TOKEN_KEY } from "../store/slices/auth/authSlice.constants";
import { AppDispatch } from "../store/store";

export const maintainSession = (dispatch: AppDispatch) => {
  const userToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
  if (userToken) {
    const decoded: { userName: string; id: string } = jwt_decode(userToken);
    dispatch(
      updateUserData({ user: { token: userToken, userName: decoded.userName } })
    );
  }
};
