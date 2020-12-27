import Axios from "axios";
import React, { FunctionComponent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Alert from "../../components/shared/Alert/Alert";
import { AlertType } from "../../components/shared/Alert/Alert.types";
import Button from "../../components/shared/Button/Button";
import TextInput from "../../components/shared/TextInput/TextInput";
import { API_LOGIN, API_REGISTER } from "../../constants/api.constants";
import { showToast } from "../../store/slices/toasts/toastsSlice";
import { useAppDispatch } from "../../store/store";
import S from "./RegisterScreen.styled";

const RegisterScreen: FunctionComponent = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCpassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [registering, setRegistering] = useState<boolean>(false);

  const register = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hasData = userName && password && cpassword;
    if (!hasData) {
      setErrorMsg("Please enter all the fields!");
      if (password !== cpassword) {
        setErrorMsg("Password and confirm password does not match!");
      }
    } else {
      setErrorMsg("");
      setRegistering(true);
      try {
        await Axios.post(API_REGISTER, { userName, password });
        dispatch(showToast({ msg: "Hello", type: AlertType.Success }));
        history.push(API_LOGIN, { userName });
      } catch (error) {
        setErrorMsg(error.response?.data.message || error.message);
      } finally {
        setRegistering(false);
      }
    }
  };

  return (
    <S.ContainerMotion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <S.FormContainer>
        <S.FormHeader>Register</S.FormHeader>

        <S.StyledForm onSubmit={register}>
          {errorMsg && (
            <Alert
              type={AlertType.Error}
              title="Register error"
              content={errorMsg}
            />
          )}
          <TextInput placeholder="User Name" onChange={setUserName} />
          <TextInput placeholder="Password" onChange={setPassword} />
          <TextInput placeholder="Confirm Password" onChange={setCpassword} />
          <Button type="submit" disabled={registering}>
            Register
          </Button>
        </S.StyledForm>
      </S.FormContainer>

      <S.BottomInfoContainer>
        <span>
          <strong>Already have an account?</strong>{" "}
          <Link to="/login">Login</Link>
        </span>
      </S.BottomInfoContainer>
    </S.ContainerMotion>
  );
};

export default RegisterScreen;
