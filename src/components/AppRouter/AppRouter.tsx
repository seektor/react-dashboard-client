import { AnimatePresence } from "framer-motion";
import React, { FunctionComponent, useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginScreen from "../../screens/Login/LoginScreen";
import MainScreen from "../../screens/Main/MainScreen";
import RegisterScreen from "../../screens/Register/RegisterScreen";
import { useAppDispatch } from "../../store/store";
import { maintainSession } from "../../utils/auth.utils";

const AppRouter: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    maintainSession(dispatch);
  }, [dispatch]);

  return (
    <AnimatePresence>
      <Switch>
        {/* <ProtectedRoute path="/" exact component={MainScreen} /> */}
        <Route path="/" exact component={MainScreen} />

        <Route path="/login" exact component={LoginScreen} />
        <Route path="/register" exact component={RegisterScreen} />

        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    </AnimatePresence>
  );
};

export default AppRouter;
