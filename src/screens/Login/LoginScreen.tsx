import React, { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

const LoginScreen: FunctionComponent = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const hasData = userName && password;
    if (!hasData) {
      setErrorMsg("Please enter all the fields.");
    } else {
      setErrorMsg("");
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
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

            <Button color="blue" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/register">Register</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginScreen;
