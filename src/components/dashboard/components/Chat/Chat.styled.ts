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

const MessagesList = styled.div`
  flex-grow: 1;
  overflow: auto;
  margin-bottom: 0.5rem;
`;

const Message = styled.span`
  display: block;
  margin-bottom: 0.5rem;
`;

interface MessageAuthorProps {
  self: boolean;
}

const MessageAuthor = styled.span`
  font-weight: bold;
  color: ${({ self }: MessageAuthorProps) =>
    self ? COLOR.Emerald : COLOR.DarkCornflowerBlue};
`;

const MessageContent = styled.span`
  color: ${COLOR.Dark};
`;

const ServerMessage = styled.span`
  display: block;
  font-weight: bold;
  color: ${COLOR.WildBlueYonder};
  text-align: center;
`;

const S = {
  Container,
  HeaderTitle,
  MessagesList,
  Message,
  MessageAuthor,
  MessageContent,
  ServerMessage,
};

export default S;
