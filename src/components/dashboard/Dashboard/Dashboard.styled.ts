import styled from "styled-components/macro";

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

const S = {
  SalesTable,
  SalesPerRegionBarChartTile,
  ItemTypePerUnitsSoldPieChartTile,
};

export default S;
