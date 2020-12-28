import React from "react";
import S from "./Chat.styled";
import { ChatMessageData } from "./Chat.types";

export const renderMessage = (message: ChatMessageData, self: boolean) => {
  return (
    <S.Message key={message.id}>
      <S.MessageAuthor self={self}>
        {self ? "You: " : `${message.author}: `}
      </S.MessageAuthor>
      <S.MessageContent>{message.message}</S.MessageContent>
    </S.Message>
  );
};
export {};
