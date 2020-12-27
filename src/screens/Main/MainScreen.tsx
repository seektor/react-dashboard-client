import React, { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Dashboard from "../../components/dashboard/Dashboard/Dashboard";
import Button from "../../components/shared/Button/Button";
import {
  ButtonSize,
  ButtonType,
} from "../../components/shared/Button/Button.types";
import { RootState } from "../../store/rootReducer";
import { logoutUser } from "../../store/slices/auth/authSlice.utils";
import { useAppDispatch } from "../../store/store";
import S from "./MainScreen.styled";

const MainScreen: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const userName = useSelector((state: RootState) => state.authSlice.user);
  const [selectedItem, setSelectedItem] = useState<string>("dashboard");

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>React Dashboard</S.HeaderTitle>
        <S.HeaderUserContainer>
          <S.HeaderUserName>user</S.HeaderUserName>
          <Button
            buttonType={ButtonType.Secondary}
            buttonSize={ButtonSize.Small}
            onClick={() => dispatch(logoutUser({ history }))}
          >
            Logout
          </Button>
        </S.HeaderUserContainer>
      </S.Header>

      <S.Body>
        <Dashboard />
      </S.Body>
    </S.Container>
  );
};

export default MainScreen;
