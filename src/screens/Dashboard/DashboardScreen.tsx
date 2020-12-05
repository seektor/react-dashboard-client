import React, { FunctionComponent } from "react";
import Dashboard from "../../components/dashboard/Dashboard/Dashboard";
import Header from "../../components/dashboard/DashboardHeader/DashboardHeader";
import S from "./DashboardScreen.styled";

const DashboardScreen: FunctionComponent = () => {
  return (
    <S.Container>
      <Header />
      <S.Body>
        <Dashboard />
      </S.Body>
    </S.Container>
  );
};

export default DashboardScreen;
