import React, { FunctionComponent } from "react";
import S from "./SalesCountDisplay.styled";

const SalesCountDisplay: FunctionComponent = () => {
  return (
    <S.Container>
      <S.HeaderTitle>Sales count</S.HeaderTitle>
      <S.Value>10000</S.Value>
    </S.Container>
  );
};

export default SalesCountDisplay;
