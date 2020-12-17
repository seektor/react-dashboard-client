import React from "react";
import S from "./Chat.styled";

export const renderServerMessage = (id: string, message: string) => (
  <S.ServerMsg key={id}>=== {message} ===</S.ServerMsg>
);

export const renderClientMessage = (
  id: string,
  userName: string,
  message: string,
  isSelf: boolean
) => {
  if (isSelf) {
    return (
      <S.Msg key={id}>
        <S.SelfMsgAuthor>You: </S.SelfMsgAuthor>
        {message}
      </S.Msg>
    );
  }
  return (
    <S.Msg key={id}>
      <S.MsgAuthor>{userName}: </S.MsgAuthor>
      {message}
    </S.Msg>
  );
};
