import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body: {
    line-height: 1.4;
  }

  p: {
    font-size: 1.25rem;
    margin-bottom: 1.75rem;
  }

  h1: {
    font-size: 3rem;
    margin-bottom: 3.5rem;
  }

  h2: {
    font-size: 2rem;
    margin-bottom: 1.75rem;
  }

  h3: {
    font-size: 1.5rem;
    margin-bottom: 1.75rem;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const S = { GlobalStyle, Container };

export default S;
