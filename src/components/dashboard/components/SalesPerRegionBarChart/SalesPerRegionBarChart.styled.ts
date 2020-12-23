import styled from "styled-components/macro";
import CommonStyles from "../../../../styles/common.styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${CommonStyles.DashboardTileCss};
`;

const ChartContainer = styled.div`
  min-height: 0;
  flex-grow: 1;
`;

const S = { Container, ChartContainer };

export default S;
