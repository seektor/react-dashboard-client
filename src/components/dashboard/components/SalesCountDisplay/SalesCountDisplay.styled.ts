import styled from "styled-components/macro";
import { DashboardTile } from "../../../../styles/common.styled";

const Container = styled.div`
  ${DashboardTile};
  display: flex;
  flex-direction: column;
`;

const ValueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding-bottom: 15px;
`;

const Value = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: #2185d0;
`;

const S = { Container, ValueContainer, Value };

export default S;
