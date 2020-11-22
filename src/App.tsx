import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardScreen from "./screens/Dashboard/DashboardScreen";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={DashboardScreen} />
    </Switch>
  );
}

export default App;
