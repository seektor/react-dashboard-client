import styled from "styled-components/macro";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Body = styled.div`
  flex-grow: 1;
  min-height: 0;
`;

const S = { Container, Body };

export default S;
