import React, { FunctionComponent, useState } from "react";
import { useSelector } from "react-redux";
import { Header, Menu, Segment } from "semantic-ui-react";
import Dashboard from "../../components/dashboard/Dashboard/Dashboard";
import { RootState } from "../../store/rootReducer";
import S from "./MainScreen.styled";

const MainScreen: FunctionComponent = () => {
  const userName = useSelector((state: RootState) => state.authSlice.user);
  const [selectedItem, setSelectedItem] = useState<string>("dashboard");

  return (
    <S.Container>
      <Segment inverted attached>
        <Menu inverted secondary>
          <Menu.Item
            name="home"
            active={true}
            onClick={() => setSelectedItem("dashboard")}
          />

          <Menu.Menu position="right">
            {userName && (
              <Menu.Item>
                <Header as="h4" color="olive">
                  {`Welcome, ${userName}`}
                </Header>
              </Menu.Item>
            )}
          </Menu.Menu>
        </Menu>
      </Segment>

      <S.Body>
        <Dashboard />
      </S.Body>
    </S.Container>
  );
};

export default MainScreen;
