import { AnimatePresence } from "framer-motion";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import S from "./App.styled";
import ToastsContainer from "./components/shared/ToastsContainer/ToastsContainer";
import DashboardScreen from "./screens/Dashboard/DashboardScreen";
import LoginScreen from "./screens/Login/LoginScreen";
import RegisterScreen from "./screens/Register/RegisterScreen";
import store from "./store/store";

function App() {
  return (
    <BrowserRouter>
      <S.Container>
        <Provider store={store}>
          <AnimatePresence>
            <Switch>
              <Route path="/" exact component={DashboardScreen} />

              <Route path="/login" exact component={LoginScreen} />
              <Route path="/register" exact component={RegisterScreen} />

              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </AnimatePresence>

          <ToastsContainer />
        </Provider>
      </S.Container>
    </BrowserRouter>
  );
}

export default App;
