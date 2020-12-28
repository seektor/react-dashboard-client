import React, { FunctionComponent } from "react";
import S from "./TextInput.styled";

interface TextInputProps {
  value?: string;
  placeholder?: string;
  maxLength?: number;
  type?: string;
  className?: string;
  onChange: (value: string) => void;
}

const TextInput: FunctionComponent<TextInputProps> = ({
  value,
  placeholder,
  maxLength,
  type,
  onChange,
  className,
}) => (
  <S.StyledInput
    value={value}
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
    maxLength={maxLength}
    type={type}
    className={className}
  />
);

export default TextInput;
