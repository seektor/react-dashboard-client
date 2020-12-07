import React, { FunctionComponent } from "react";
import { Header } from "semantic-ui-react";
import S from "./SalesCountDisplay.styled";

const SalesCountDisplay: FunctionComponent = () => {
  return (
    <S.Container>
      <Header as="h3" textAlign="center">
        Total Sales Count
      </Header>
      <S.ValueContainer>
        <S.Value>10000</S.Value>
      </S.ValueContainer>
    </S.Container>
  );
};

export default SalesCountDisplay;
