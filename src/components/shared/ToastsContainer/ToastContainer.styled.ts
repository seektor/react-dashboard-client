import styled from "styled-components/macro";

const Container = styled.div`
  position: fixed;
  top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  pointer-events: none;

  & > * {
    max-width: 80%;
    min-width: 25%;
  }
`;

const S = { Container };

export default S;
