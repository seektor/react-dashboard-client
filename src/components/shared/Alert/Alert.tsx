import React, { FunctionComponent } from "react";
import S from "./Alert.styled";
import { AlertType } from "./Alert.types";

interface AlertProps {
  type: AlertType;
  title?: string;
}

const Alert: FunctionComponent<AlertProps> = ({ type, title, children }) => {
  return (
    <S.Container type={type}>
      {title && <h4>{title}</h4>}
      <span>{children}</span>
    </S.Container>
  );
};

export default Alert;
