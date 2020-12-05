import { Input } from "semantic-ui-react";
import styled from "styled-components/macro";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 8px 4px;
  background-color: white;
`;

const MsgList = styled.div`
  flex-grow: 1;
  margin-bottom: 8px;
`;

const ServerMsg = styled.span`
  font-weight: bold;
  color: #27187e;
`;

const MsgContainer = styled.div`
  width: 100%;
  display: flex;
`;

const MsgAuthor = styled.span`
  font-weight: bold;
`;

const SelfMsgAuthor = styled(MsgAuthor)`
  color: #2185d0;
`;

const Msg = styled.span`
  flex-grow: 1;
`;

const InputRow = styled.div`
  display: flex;
`;

const StyledInput = styled(Input)`
  flex-grow: 1;
  margin-right: 8px;
`;

const S = {
  Container,
  MsgList,
  ServerMsg,
  MsgContainer,
  MsgAuthor,
  SelfMsgAuthor,
  Msg,
  InputRow,
  StyledInput,
};

export default S;
