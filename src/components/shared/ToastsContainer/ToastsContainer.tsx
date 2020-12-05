import React, { FunctionComponent } from "react";
import { Message } from "semantic-ui-react";
import S from "./ToastContainer.styled";

const ToastsContainer: FunctionComponent = () => {
  return (
    <S.Container>
      <Message color="green">Green</Message>
    </S.Container>
  );
};

export default ToastsContainer;
