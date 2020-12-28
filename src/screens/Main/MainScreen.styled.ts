import styled from "styled-components/macro";
import { COLOR } from "../../styles/color.styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0.5rem 1rem 0.5rem 2rem;
  height: 2.5rem;
  width: 100%;
  background-color: ${COLOR.DarkCornflowerBlue};
`;

const HeaderTitle = styled.span`
  color: ${COLOR.AliceBlue};
  font-weight: bold;
`;

const HeaderUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    margin-left: 0.5rem;
  }
`;

const HeaderUserName = styled.span`
  color: ${COLOR.AliceBlue};
  font-style: italic;
  font-weight: bold;
`;

const Body = styled.div`
  flex-grow: 1;
  min-height: 0;
`;

const S = {
  Container,
  Header,
  Body,
  HeaderTitle,
  HeaderUserContainer,
  HeaderUserName,
};

export default S;
