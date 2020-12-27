import styled from "styled-components/macro";
import { COLOR } from "../../../styles/color.styled";

const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  gap: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;
  background-color: ${COLOR.AliceBlue};
`;

const SalesTable = styled.div`
  grid-column: 1 / span 8;
  grid-row: 3 / span 18;
`;

const SalesPerRegionBarChartTile = styled.div`
  grid-column: 9 / span 8;
  grid-row: 3 / span 9;
`;

const ItemTypePerUnitsSoldPieChartTile = styled.div`
  grid-column: 9 / span 8;
  grid-row: 12 / span 9;
`;

const TodoListTile = styled.div`
  grid-column: 17 / span 4;
  grid-row: 1 / span 10;
`;

const ChatTile = styled.div`
  grid-column: 17 / span 4;
  grid-row: 11 / span 10;
`;

const S = {
  Grid,
  SalesTable,
  SalesPerRegionBarChartTile,
  ItemTypePerUnitsSoldPieChartTile,
  TodoListTile,
  ChatTile,
};

export default S;
