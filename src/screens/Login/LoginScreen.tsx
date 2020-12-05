import { motion } from "framer-motion";
import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { RootState } from "../../store/rootReducer";
import { loginUser } from "../../store/slices/auth/authSlice.utils";

interface LocationState {
  userName?: string;
}

const LoginScreen: FunctionComponent = () => {
  const location = useLocation<LocationState | undefined>();

  const [userName, setUserName] = useState<string>(
    location.state?.userName || ""
  );
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const loginError = useSelector(
    (state: RootState) => state.authSlice.loginErrorMsg
  );

  const [logging, setLogging] = useState<boolean>(false);

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hasData = userName && password;
    if (!hasData) {
      setErrorMsg("Please enter all the fields.");
    } else {
      setErrorMsg("");
      loginUser({ userName, password });
    }
  };

  useEffect(() => {
    setErrorMsg(loginError || "");
  }, [loginError]);

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
            Log-in to your account
          </Header>

          <Form size="large" onSubmit={login}>
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

              <Button color="blue" fluid size="large" disabled={logging}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/register">Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </motion.div>
  );
};

export default LoginScreen;
