import React, { FunctionComponent } from "react";
import S from "./TextArea.styled";

interface TextAreaProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  maxLength?: number;
  readOnly?: boolean;
  rows?: number;
  onChange?: (value: string) => void;
}

const TextArea: FunctionComponent<TextAreaProps> = ({
  value,
  defaultValue,
  placeholder,
  rows,
  readOnly,
  maxLength,
  onChange,
}) => (
  <S.StyledTextArea
    value={value}
    defaultValue={defaultValue}
    rows={rows}
    maxLength={maxLength}
    placeholder={placeholder}
    readOnly={readOnly}
    onChange={onChange ? (e) => onChange(e.target.value) : undefined}
  />
);

export default TextArea;
