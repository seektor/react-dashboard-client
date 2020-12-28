import React, { FunctionComponent } from "react";
import S from "./UsersCountDisplay.styled";

const UsersCountDisplay: FunctionComponent = () => {
  return (
    <S.Container>
      <S.HeaderTitle>Users online</S.HeaderTitle>
      <S.Value>1</S.Value>
    </S.Container>
  );
};

export default UsersCountDisplay;
export {};
