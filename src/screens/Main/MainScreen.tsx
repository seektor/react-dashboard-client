import React, { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import Dashboard from "../../components/dashboard/Dashboard/Dashboard";
import { RootState } from "../../store/rootReducer";
import S from "./MainScreen.styled";

const MainScreen: FunctionComponent = () => {
  const userName = useSelector((state: RootState) => state.authSlice.user);
  const [selectedItem, setSelectedItem] = useState<string>("dashboard");

  return (
    <S.Container>
      <div
        style={{ height: 40, width: "100%", backgroundColor: "honeydew" }}
      ></div>

      <S.Body>
        <Dashboard />
      </S.Body>
    </S.Container>
  );
};

export default MainScreen;
