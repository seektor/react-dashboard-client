import { AnimatePresence } from "framer-motion";
import React, { FunctionComponent, useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import LoginScreen from "../../screens/Login/LoginScreen";
import MainScreen from "../../screens/Main/MainScreen";
import RegisterScreen from "../../screens/Register/RegisterScreen";
import { useAppDispatch } from "../../store/store";
import { maintainSession } from "../../utils/auth.utils";
import ProtectedRoute from "../shared/ProtectedRoute/ProtectedRoute";

const AppRouter: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [setupComplete, setSetupComplete] = useState<boolean>(false);

  useEffect(() => {
    maintainSession(dispatch, history);
    setSetupComplete(true);
  }, [dispatch, history]);

  return setupComplete ? (
    <AnimatePresence>
      <Switch>
        <ProtectedRoute path="/" exact component={MainScreen} />

        <Route path="/login" exact component={LoginScreen} />
        <Route path="/register" exact component={RegisterScreen} />

        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    </AnimatePresence>
  ) : null;
};

export default AppRouter;
