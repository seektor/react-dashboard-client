import styled from "styled-components/macro";
import { COLOR } from "../../../../../styles/color.styled";

const Container = styled.div`
  padding: 1rem;
`;

const HeaderTitle = styled.h4`
  color: ${COLOR.DarkCornflowerBlue};
  margin-bottom: 2rem;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  & > * {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const S = { Container, HeaderTitle, Body, Footer };

export default S;
