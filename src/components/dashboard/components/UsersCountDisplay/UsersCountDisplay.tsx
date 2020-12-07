import React, { FunctionComponent } from "react";
import { Header } from "semantic-ui-react";
import S from "./UsersCountDisplay.styled";

const UsersCountDisplay: FunctionComponent = () => {
  return (
    <S.Container>
      <Header as="h3" textAlign="center">
        Active Users
      </Header>
      <S.ValueContainer>
        <S.StyledIcon name="users" size="big" />
        <S.Value>2</S.Value>
      </S.ValueContainer>
    </S.Container>
  );
};

export default UsersCountDisplay;
