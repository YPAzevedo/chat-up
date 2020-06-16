import React, { useState, FormEvent } from "react";
import { FaDoorOpen } from "react-icons/fa";
import { useHistory } from "react-router-dom";

import logo from '../../assets/logo.svg'

import { Container, Form } from "./styles";

const Join: React.FC = () => {
  const history = useHistory();
  const [name, setName] = useState<string>("");
  const [room, setRoom] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(!name || !room) {
      return;
    }

    history.push(`/chat?name=${name}&room=${room}`)
  }

  return (
    <Container>
      <img src={logo} alt="chat-up" />
      <Form onSubmit={handleSubmit}>
        <h3>Join <span>the chat</span></h3>
        <input
          placeholder="Your name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Room to join"
          type="text"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <button type="submit">Join chat room <FaDoorOpen/></button>
      </Form>
    </Container>
  );
};

export default Join;
