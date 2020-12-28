import React, { FunctionComponent } from "react";
import S from "./TextInput.styled";

interface TextInputProps {
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
}

const TextInput: FunctionComponent<TextInputProps> = ({
  placeholder,
  onChange,
  className,
}) => (
  <S.StyledInput
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
    className={className}
  />
);

export default TextInput;
