import React, { useState, useEffect, useCallback, FormEvent } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { FaDoorOpen, FaRegWindowClose, FaTelegramPlane } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import qs, { ParsedQuery } from "query-string";
import reactEmoji from "react-emoji";
import io from "socket.io-client";

import logo from "../../assets/logo.svg";

import {
  Container,
  MessageInput,
  MessagesBox,
  Header,
  Message,
  Logo,
} from "./styles";

interface QueryStringData extends ParsedQuery {
  name: string;
  room: string;
}

interface MessageData {
  user: string;
  text: string;
}

let socket: SocketIOClient.Socket;

const Chat: React.FC = () => {
  const location = useLocation();
  const [name, setName] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<MessageData[]>([] as MessageData[]);

  useEffect(() => {
    const data = qs.parse(location.search) as QueryStringData;

    socket = io("https://chatapp-be.herokuapp.com/");

    setName(data.name);
    setRoom(data.room);

    socket.emit("join", { name: data.name, room: data.room }, () => {});

    return () => {
      socket.emit("disconnect");

      socket.close();
    };
  }, [location.search]);

  useEffect(() => {
    socket.on("message", (messageFromSocket: MessageData) => {
      setMessages([...messages, messageFromSocket]);
    });
  }, [messages]);

  const sendMessage = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      socket.emit("sendMessage", { user: name, text: message }, () =>
        setMessage("")
      );
    },
    [name, message]
  );

  return (
    <React.Fragment>
      <Logo src={logo} alt="chat-up" />
      <Container>
        <Header>
          <FaDoorOpen />
          <strong>{room}</strong>
          <a href="/">
            <FaRegWindowClose />
          </a>
        </Header>
        <MessagesBox>
          <ScrollToBottom>
            {messages?.map((msg: MessageData, index: number) => (
              <Message
                isMine={
                  msg.user.toLocaleLowerCase() === name.toLocaleLowerCase()
                }
                key={index}
              >
                <strong>{msg.user}</strong>
                <span>{reactEmoji.emojify(msg.text)}</span>
              </Message>
            ))}
          </ScrollToBottom>
        </MessagesBox>
        <MessageInput onSubmit={sendMessage}>
          <input
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">
            <FaTelegramPlane />
          </button>
        </MessageInput>
      </Container>
    </React.Fragment>
  );
};

export default Chat;
