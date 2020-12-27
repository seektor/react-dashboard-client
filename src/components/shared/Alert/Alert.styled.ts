import styled, { css } from "styled-components/macro";
import { COLOR } from "../../../styles/color.styled";
import { AlertType } from "./Alert.types";

const ERROR_SET = {
  backgroundColor: COLOR.Coquelicot,
  fontColor: COLOR.White,
};

const SUCCESS_SET = {
  backgroundColor: COLOR.Emerald,
  fontColor: COLOR.White,
};

const getColorsSet = (type: AlertType) =>
  type === AlertType.Error ? ERROR_SET : SUCCESS_SET;

interface ContainerProps {
  type: AlertType;
}

const Container = styled.div`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  ${({ type }: ContainerProps) => {
    const colorsSet = getColorsSet(type);
    return css`
      background-color: ${colorsSet.backgroundColor};
      color: ${colorsSet.fontColor};
    `;
  }}
`;

const S = { Container };

export default S;
