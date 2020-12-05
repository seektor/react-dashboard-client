import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { Header, Menu, Segment } from "semantic-ui-react";
import { RootState } from "../../../store/rootReducer";

const DashboardHeader: FunctionComponent = () => {
  const userName = useSelector((state: RootState) => state.authSlice.user);
  return (
    <Segment inverted attached>
      <Menu inverted secondary>
        <Menu.Item name="home" active={true} onClick={() => {}} />
        <Menu.Item name="info" active={false} onClick={() => {}} />

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
  );
};

export default DashboardHeader;
