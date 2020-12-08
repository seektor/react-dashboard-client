import React, { FunctionComponent } from "react";
import S from "./MyModalBody.styled";

const MyModalBody: FunctionComponent = ({ children }) => (
  <S.ModalBody>{children}</S.ModalBody>
);

export default MyModalBody;
