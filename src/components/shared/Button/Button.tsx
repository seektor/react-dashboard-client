import React, { FunctionComponent } from "react";
import S from "./Button.styled";
import { ButtonSize, ButtonType } from "./Button.types";

interface ButtonProps {
  onClick?: () => void;
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  buttonType = ButtonType.Primary,
  buttonSize = ButtonSize.Normal,
  type = "button",
  disabled = false,
  className,
  children,
}) => (
  <S.StyledButton
    className={className}
    disabled={disabled}
    onClick={onClick}
    buttonType={buttonType}
    buttonSize={buttonSize}
    type={type}
  >
    {children}
  </S.StyledButton>
);

export default Button;
