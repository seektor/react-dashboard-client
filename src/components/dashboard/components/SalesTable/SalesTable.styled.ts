import styled from "styled-components/macro";
import { COLOR } from "../../../../styles/color.styled";
import CommonStyles from "../../../../styles/common.styled";
import Button from "../../../shared/Button/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${CommonStyles.DashboardTileCss};
`;

const Header = styled.h4`
  color: ${COLOR.DarkCornflowerBlue};
`;

const ContainerBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TableContainer = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  overflow: auto;
  margin-bottom: 0.25rem;
`;

const StyledTable = styled.table`
  border-collapse: collapse;

  th {
    background-color: ${COLOR.DarkCornflowerBlue};
    color: ${COLOR.White};
    position: sticky;
    top: 0;
  }

  th,
  td {
    padding: 0.5rem 0.5rem;
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: ${COLOR.AliceBlue};
  }

  tbody {
    color: ${COLOR.Dark};
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > * {
    &:first-child {
      margin-bottom: 0.25rem;
    }
  }
`;

const PaginationRow = styled.div`
  display: flex;
`;

const PaginationButton = styled(Button)`
  margin-right: 0.25rem;
`;

const PaginationInput = styled.input`
  width: 4rem;
`;

const S = {
  Container,
  Header,
  ContainerBody,
  TableContainer,
  StyledTable,
  PaginationContainer,
  PaginationRow,
  PaginationButton,
  PaginationInput,
};

export default S;
