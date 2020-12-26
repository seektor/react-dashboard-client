import React, { FunctionComponent } from "react";
import S from "./Button.styled";
import { ButtonSize, ButtonType } from "./Button.types";

interface ButtonProps {
  onClick: () => void;
  buttonType?: ButtonType;
  buttonSize?: ButtonSize;
  disabled?: boolean;
  className?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  buttonType = ButtonType.Primary,
  buttonSize = ButtonSize.Normal,
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
  >
    {children}
  </S.StyledButton>
);

export default Button;
