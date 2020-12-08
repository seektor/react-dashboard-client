import React, { FunctionComponent } from "react";
import S from "./MyModalHeader.styled";

interface MyModalHeaderProps {
  title: string;
}

const MyModalHeader: FunctionComponent<MyModalHeaderProps> = ({ title }) => (
  <S.ModalHeader>{title}</S.ModalHeader>
);

export default MyModalHeader;
