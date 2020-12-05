import { Header } from "semantic-ui-react";
import styled from "styled-components/macro";

const Container = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  padding: 8px 4px;
  background-color: white;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const StyledHeader = styled(Header)`
  margin: 0;
`;

const TodoList = styled.div`
  padding: 0 8px;
`;

const S = { Container, HeaderContainer, StyledHeader, TodoList };

export default S;
