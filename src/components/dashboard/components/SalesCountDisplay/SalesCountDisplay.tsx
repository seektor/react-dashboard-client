import React, { FunctionComponent } from "react";
import S from "./SalesCountDisplay.styled";

const SalesCountDisplay: FunctionComponent = () => {
  return (
    <S.Container>
      <div>Total Sales Count</div>
      <S.ValueContainer>
        <S.Value>10000</S.Value>
      </S.ValueContainer>
    </S.Container>
  );
};

export default SalesCountDisplay;
