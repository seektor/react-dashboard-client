import React, { FunctionComponent } from "react";
import S from "./TextInput.styled";

interface TextInputProps {
  placeholder?: string;
  onChange: (value: string) => void;
}

const TextInput: FunctionComponent<TextInputProps> = ({
  placeholder,
  onChange,
}) => (
  <S.StyledInput
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default TextInput;
