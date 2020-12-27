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

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const MsgList = styled.div`
//   flex-grow: 1;
//   overflow: auto;
//   margin-bottom: 8px;
// `;

// const ServerMsg = styled.span`
//   display: block;
//   font-weight: bold;
//   color: #27187e;
//   margin-bottom: 8px;
// `;

// const MsgAuthor = styled.span`
//   font-weight: bold;
// `;

// const SelfMsgAuthor = styled(MsgAuthor)`
//   color: #2185d0;
// `;

// const Msg = styled.span`
//   margin-bottom: 8px;
// `;

// const InputRow = styled.div`
//   display: flex;
// `;

// const StyledInput = styled(Input)`
//   flex-grow: 1;
//   margin-right: 8px;
// `;

const S = {
  Container,
  HeaderTitle,
};

export default S;
export {};
