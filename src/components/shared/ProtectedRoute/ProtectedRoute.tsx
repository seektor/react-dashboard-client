import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RootState } from "../../../store/rootReducer";

export const ProtectedRoute: FunctionComponent<RouteProps> = (props) => {
  const isLoggedIn = useSelector((state: RootState) => !state.authSlice.user);

  if (isLoggedIn) {
    return <Route {...props} />;
  } else {
    return (
      <Route
        {...props}
        component={() => <Redirect to={{ pathname: "/login" }} />}
      />
    );
  }
};

export default ProtectedRoute;
