import { motion } from "framer-motion";
import React, { FunctionComponent, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { registerUser } from "../../store/slices/auth/authSlice.utils";
import { BaseResponse } from "../../types/BaseResponse";
import { API_LOGIN_USER } from "../../utils/api.constants";

const RegisterScreen: FunctionComponent = () => {
  const history = useHistory();

  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCpassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [registering, setRegistering] = useState<boolean>(false);

  const hasData = userName && password && cpassword;

  const register = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!hasData) {
      setErrorMsg("Please enter all the fields.");
      if (password !== cpassword) {
        setErrorMsg("Password and confirm password does not match");
      }
    } else {
      setErrorMsg("");
      setRegistering(true);
      const regRes: BaseResponse = await registerUser(userName, password);
      if (regRes.succes) {
        history.push(API_LOGIN_USER, { userName });
      } else {
        setErrorMsg(regRes.errorMsg || "");
      }
      setRegistering(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
            Register new account
          </Header>
          <Form size="large" onSubmit={register}>
            <Segment stacked>
              {errorMsg && (
                <Message negative>
                  <p>{errorMsg}</p>
                </Message>
              )}

              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="User name"
                onChange={(e) => setUserName(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Re-enter password"
                type="password"
                onChange={(e) => setCpassword(e.target.value)}
              />

              <Button color="blue" fluid size="large" disabled={registering}>
                Register
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <Link to="/login">Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </motion.div>
  );
};

export default RegisterScreen;
