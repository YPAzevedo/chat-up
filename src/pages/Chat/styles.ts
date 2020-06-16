import styled, { css } from "styled-components";

interface MessageProps {
  isMine: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 400px;
  margin: 0 auto;
  margin-top: 30px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const MessageInput = styled.form`
  width: 100%;
  display: flex;
  padding: 20px;

  input {
    flex: 1;
    border: 0;
    background: #f3f3f3;
    padding: 20px;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
    margin-right: 10px;
  }

  button {
    background: #D02B83;
    border: 0;
    color: #f3f3f3;
    width: 55px;
    border-radius: 50%;

    svg {
      font-size: 24px;
    }
  }
`;

export const MessagesBox = styled.div`
  > div div {
    display: flex;
    flex-direction: column;
    background: #f3f3f3;
    height: 500px;
    width: 400px;
    padding: 0 16px;
  }
`;

export const Message = styled.span<MessageProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70px;
  width: fit-content;
  padding: 15px;
  line-height: 30px;
  margin: 10px 0;
  border-radius: ${props => props.isMine ? '16px 16px 0 16px' : '16px 16px 16px 0'};
  background: ${props => props.isMine? '#D02B83': '#E8E8E8'};
  color: ${props => props.isMine? '#f3f3f3': '#000'};
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);

  &:first-child {
    margin-top: auto;
  }

  strong {
    text-transform: capitalize;
  }


  ${props => props.isMine && css`
    margin-left: auto;
  `}
`;

export const Header = styled.header`
  background: #D02B83;
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: #f3f3f3;
    font-size: 24px;
  }

  > svg {
    margin-right: 8px;
  }

  strong {
    color: #f3f3f3;
    text-transform:capitalize;
  }

  a {
    text-decoration: none;
  }
`;

export const Logo = styled.img`
  display: flex;
  margin: 0 auto;
  margin-top: 30px;
`;
