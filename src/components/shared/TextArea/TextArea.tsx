import React, { FunctionComponent } from "react";
import S from "./TextArea.styled";

interface TextAreaProps {
  placeholder?: string;
  maxLength?: number;
  rows?: number;
  onChange: (value: string) => void;
}

const TextArea: FunctionComponent<TextAreaProps> = ({
  placeholder,
  rows,
  maxLength,
  onChange,
}) => (
  <S.StyledTextArea
    rows={rows}
    maxLength={maxLength}
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default TextArea;
