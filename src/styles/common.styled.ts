import { css } from "styled-components/macro";
import { COLOR } from "./color.styled";

const DashboardTileCss = css`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.White};
  padding: 0.5rem 1rem 1rem 1rem;
  border: 2px solid ${COLOR.Primary__light};
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 ${COLOR.Primary__light};
`;

const CommonStyles = { DashboardTileCss };

export default CommonStyles;
