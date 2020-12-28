import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import Alert from "../../components/shared/Alert/Alert";
import { AlertType } from "../../components/shared/Alert/Alert.types";
import Button from "../../components/shared/Button/Button";
import TextInput from "../../components/shared/TextInput/TextInput";
import { RootState } from "../../store/rootReducer";
import { loginUser } from "../../store/slices/auth/authSlice.utils";
import { useAppDispatch } from "../../store/store";
import S from "./LoginScreen.styled";

interface LocationState {
  userName?: string;
  fromLogout?: boolean;
}

const LoginScreen: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const location = useLocation<LocationState | undefined>();
  const history = useHistory();

  const [userName, setUserName] = useState<string>(
    location.state?.userName || ""
  );
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const { logging, errorMessage: loginError, user } = useSelector(
    (state: RootState) => state.authSlice
  );

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hasData = userName && password;
    if (!hasData) {
      setErrorMsg("Please enter all the fields.");
    } else {
      setErrorMsg("");
      dispatch(loginUser({ userName, password, history }));
    }
  };

  useEffect(() => {
    setErrorMsg(loginError || "");
  }, [loginError]);

  useEffect(() => {
    if (location.state?.fromLogout) {
      return;
    }
    if (user) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.ContainerMotion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <S.FormContainer>
        <S.FormHeader>Login</S.FormHeader>

        <S.StyledForm onSubmit={login}>
          {errorMsg && (
            <Alert type={AlertType.Error} title="Login error">
              {errorMsg}
            </Alert>
          )}
          <TextInput
            placeholder="User Name"
            maxLength={20}
            value={userName}
            onChange={setUserName}
          />
          <TextInput
            placeholder="Password"
            maxLength={20}
            value={password}
            onChange={setPassword}
            type="password"
          />
          <Button type="submit" disabled={logging}>
            Login
          </Button>
        </S.StyledForm>
      </S.FormContainer>

      <S.BottomInfoContainer>
        <span>
          <strong>New User?</strong> <Link to="/register">Register</Link>
        </span>
      </S.BottomInfoContainer>
    </S.ContainerMotion>
  );
};

export default LoginScreen;
