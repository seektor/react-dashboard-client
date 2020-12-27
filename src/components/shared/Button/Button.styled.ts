import styled, { css } from "styled-components/macro";
import { COLOR } from "../../../styles/color.styled";
import { ButtonSize, ButtonType } from "./Button.types";

const PRIMARY_SET = {
  backgroundColor: COLOR.DodgerBlue,
  fontColor: COLOR.White,
  border: `0.0625rem solid ${COLOR.DodgerBlue}`,
};

const SECONDARY_SET = {
  backgroundColor: COLOR.White,
  fontColor: COLOR.DodgerBlue,
  border: `0.0625rem solid ${COLOR.DodgerBlue}`,
};

const CLEAR_SET = {
  backgroundColor: "transparent",
  fontColor: COLOR.White,
  border: `0.0625rem solid transparent`,
};

const NORMAL_SET = {
  padding: "0.5rem 1rem",
};

const SMALL_SET = {
  padding: "0.125rem 0.25rem",
};

const getColorsSet = (type: ButtonType) => {
  switch (type) {
    case ButtonType.Primary:
      return PRIMARY_SET;
    case ButtonType.Secondary:
      return SECONDARY_SET;
    case ButtonType.Clear:
      return CLEAR_SET;
  }
};

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
