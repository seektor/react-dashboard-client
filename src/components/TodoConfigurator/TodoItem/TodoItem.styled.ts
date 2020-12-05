import styled from "styled-components/macro";

const Container = styled.div`
  width: 100%;
  background-color: #bad7f2;
  border-radius: 8px;
  padding: 8px 4px;
  transform: rotate(2deg);
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const S = { Container, HeaderContainer };

export default S;
