import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import S from "./App.styled";
import ToastsDisplay from "./components/shared/ToastsDisplay/ToastsDisplay";
import LoginScreen from "./screens/Login/LoginScreen";
import MainScreen from "./screens/Main/MainScreen";
import RegisterScreen from "./screens/Register/RegisterScreen";
import "./services/axios.service";
import store, { useAppDispatch } from "./store/store";
import { maintainSession } from "./utils/auth.utils";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    maintainSession(dispatch);
  }, [dispatch]);

  return (
    <>
      <S.GlobalStyle />
      <BrowserRouter>
        <S.Container>
          <Provider store={store}>
            <AnimatePresence>
              <Switch>
                {/* <ProtectedRoute path="/" exact component={MainScreen} /> */}
                <Route path="/" exact component={MainScreen} />

                <Route path="/login" exact component={LoginScreen} />
                <Route path="/register" exact component={RegisterScreen} />

                <Route render={() => <Redirect to="/login" />} />
              </Switch>
            </AnimatePresence>

            <ToastsDisplay />
          </Provider>
        </S.Container>
      </BrowserRouter>
    </>
  );
}

export default App;
