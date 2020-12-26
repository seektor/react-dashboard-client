import React, { FunctionComponent } from "react";
import LoaderSpinner from "react-loader-spinner";
import { COLOR } from "../../../styles/color.styled";
import S from "./Loader.styled";

const Loader: FunctionComponent = () => {
  return (
    <S.Container>
      <LoaderSpinner type="Oval" color={COLOR.DarkCornflowerBlue} />
    </S.Container>
  );
};

export default Loader;
