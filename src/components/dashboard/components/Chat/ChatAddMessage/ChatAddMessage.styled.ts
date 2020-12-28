import styled from "styled-components";
import TextInput from "../../../../shared/TextInput/TextInput";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const StyledTextInput = styled(TextInput)`
  margin-right: 0.5rem;
  flex-grow: 1;
`;

const S = { Container, StyledTextInput };

export default S;
