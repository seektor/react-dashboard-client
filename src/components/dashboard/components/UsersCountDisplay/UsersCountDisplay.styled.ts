import styled from "styled-components/macro";
import { COLOR } from "../../../../styles/color.styled";
import CommonStyles from "../../../../styles/common.styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${CommonStyles.DashboardTileCss};
`;

const HeaderTitle = styled.h4`
  color: ${COLOR.DarkCornflowerBlue};
`;

const Value = styled.span`
  color: ${COLOR.Dark};
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
`;

const S = { Container, HeaderTitle, Value };

export default S;
