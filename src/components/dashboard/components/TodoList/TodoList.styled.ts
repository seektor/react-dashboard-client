import styled from "styled-components/macro";
import { COLOR } from "../../../../styles/color.styled";
import CommonStyles from "../../../../styles/common.styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${CommonStyles.DashboardTileCss};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const HeaderTitle = styled.h4`
  color: ${COLOR.DarkCornflowerBlue};
  margin-bottom: 0;
`;

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.75rem;
  overflow-y: auto;
  overflow-x: auto;
`;

const TodoItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: ${COLOR.GoldCrayole};
  border-radius: 0.5rem;
  box-shadow: 2px 2px 4px 0 ${COLOR.WildBlueYonder};
  padding: 0.5rem 0.5rem;
  margin-bottom: 1rem;
`;

const S = { Container, HeaderContainer, HeaderTitle, TodoList, TodoItem };

export default S;
