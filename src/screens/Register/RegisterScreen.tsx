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

const RegisterScreen: FunctionComponent = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCpassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const register = (event: React.FormEvent<HTMLFormElement>) => {
    const hasData = userName && password && cpassword;
    if (!hasData) {
      setErrorMsg("Please enter all the fields.");
      if (password !== cpassword) {
        setErrorMsg("Password and confirm password does not match");
      }
    } else {
      setErrorMsg("");
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
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

            <Button color="blue" fluid size="large">
              Register
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <Link to="/login">Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default RegisterScreen;
