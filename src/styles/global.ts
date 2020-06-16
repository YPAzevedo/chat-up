import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #E8E8E8;
    --webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
    height: 100vh;
  }
  button {
    cursor: pointer;
  }
`;
