import { Message } from "semantic-ui-react";
import styled from "styled-components/macro";

const Container = styled.div`
  position: fixed;
  z-index: 100;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledMessage = styled(Message)`
  margin-bottom: 8px !important;
`;

const S = { Container, StyledMessage };

export default S;
