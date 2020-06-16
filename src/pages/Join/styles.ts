import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  margin-top: 30px;
  background: #FFF;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);

  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-family: 'Khand', sans-serif;
    color: #D02B83;
    font-size: 30px;
    border-bottom: 1px solid #D02B83;

    span {
      font-family: 'Roboto', sans-serif;
      font-weight: 100;
      font-size: 20px;
    }
  }

  input {
    height: 30px;
    margin: 10px 0;
    border: 0;
    background: #f3f3f3;
    padding: 15px;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 30px;
  }

  button {
    display: flex;
    align-items: center;
    border: none;
    background: #D02B83;
    border-radius: 30px;
    width: 180px;
    padding: 10px 20px;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.2);
    color: #FFF;
    font-weight: 600;
    margin: 10px 0 30px  0;

    svg {
      margin-left: auto;
    }
  }
`;