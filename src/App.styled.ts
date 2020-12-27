import styled, { createGlobalStyle } from "styled-components/macro";
import MontserratBold from "./assets/fonts/Montserrat-Bold.ttf";
import MontserratRegular from "./assets/fonts/Montserrat-Regular.ttf";
import { COLOR } from "./styles/color.styled";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    font-weight: 400;
    src: local('Montserrat'), url(${MontserratRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 700;
    src: local('Montserrat'), url(${MontserratBold}) format('truetype');
  }

  body {
    font-family: 'Montserrat', sans-serif;
    color: ${COLOR.Dark};
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3rem;
    margin-top: 0rem;
    margin-bottom: 1.25rem;
  }

  h2 {
    font-size: 2rem;
    margin-top: 0rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 0rem;
    margin-bottom: 0.75rem;
  }

  h4 {
    font-size: 1.25rem;
    margin-top: 0rem;
    margin-bottom: 0.5rem;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const S = { GlobalStyle, Container };

export default S;
