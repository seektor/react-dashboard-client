import React, { FunctionComponent } from "react";
import { Menu, Segment } from "semantic-ui-react";

const Header: FunctionComponent = () => {
  return (
    <Segment inverted attached>
      <Menu inverted secondary>
        <Menu.Item name="home" active={true} onClick={() => {}} />
        <Menu.Item name="messages" active={false} onClick={() => {}} />
        <Menu.Item name="friends" active={false} onClick={() => {}} />
      </Menu>
    </Segment>
  );
};

export default Header;
