import styled from "styled-components/macro";
import { COLOR } from "../../../../styles/color.styled";
import CommonStyles from "../../../../styles/common.styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${CommonStyles.DashboardTileCss};
`;

const Header = styled.h4`
  color: ${COLOR.DarkCornflowerBlue};
`;

const ChartContainer = styled.div`
  display: flex;
  min-height: 0;
  flex-grow: 1;
`;

const S = { Container, Header, ChartContainer };

export default S;
