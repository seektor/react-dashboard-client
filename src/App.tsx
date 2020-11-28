import React from "react";
import { Provider } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import DashboardScreen from "./screens/Dashboard/DashboardScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import RegisterScreen from "./screens/Register/RegisterScreen";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" exact component={DashboardScreen} />

        <Route path="/login" exact component={LoginScreen} />
        <Route path="/register" exact component={RegisterScreen} />

        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Provider>
  );
}

export default App;
