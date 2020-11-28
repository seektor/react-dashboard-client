import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import DashboardScreen from "./screens/Dashboard/DashboardScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import RegisterScreen from "./screens/Register/RegisterScreen";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={DashboardScreen} />

      <Route path="/login" exact component={LoginScreen} />
      <Route path="/register" exact component={RegisterScreen} />

      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
}

export default App;
