import styled, { css } from "styled-components/macro";
import { COLOR } from "../../../styles/color.styled";
import { ButtonSize, ButtonType } from "./Button.types";

const PRIMARY_SET = {
  backgroundColor: COLOR.DodgerBlue,
  fontColor: COLOR.BlackBean,
  border: `0.0625rem solid ${COLOR.DodgerBlue}`,
};

const SECONDARY_SET = {
  backgroundColor: COLOR.White,
  fontColor: COLOR.DodgerBlue,
  border: `0.0625rem solid ${COLOR.DodgerBlue}`,
};

const NORMAL_SET = {
  padding: "0.25rem 0.5rem",
};

const SMALL_SET = {
  padding: "0.125rem 0.25rem",
};

const getColorsSet = (type: ButtonType) =>
  type === ButtonType.Primary ? PRIMARY_SET : SECONDARY_SET;

const getSizeSet = (size: ButtonSize) =>
  size === ButtonSize.Normal ? NORMAL_SET : SMALL_SET;

interface ButtonProps {
  buttonType: ButtonType;
  buttonSize: ButtonSize;
}

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 0.125rem;
  ${({ buttonType }: ButtonProps) => {
    const colorsSet = getColorsSet(buttonType);
    return css`
      background-color: ${colorsSet.backgroundColor};
      color: ${colorsSet.fontColor};
      border: ${colorsSet.border};
    `;
  }}

  ${({ buttonSize }: ButtonProps) => {
    const sizeSet = getSizeSet(buttonSize);
    return css`
      padding: ${sizeSet.padding};
    `;
  }}

&:disabled {
    opacity: 0.3;
    cursor: none;
  }
`;

const S = { StyledButton };

export default S;
