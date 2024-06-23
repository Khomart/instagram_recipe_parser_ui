// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    background: linear-gradient(135deg, #ff00cc, #333399);
    color: white;
  }

  #root {
    height: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
  }

  .header {
    margin-bottom: 20px;
  }

  .input {
    width: 90%;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 0;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      width: 60%;
    }
  }

  .button {
    width: 300px;
    padding: 10px;
    font-size: 16px;
    color: white;
    background-color: green;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button:disabled {
    background-color: gray;
    cursor: not-allowed;
  }

  .spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 4px solid white;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .error {
    color: red;
    margin-bottom: 20px;
  }

  .result-box {
    width: 90%;
    height: 600px;
    background-color: white;
    color: black;
    padding: 10px;
    margin-top: 20px;
    overflow-y: auto;
    white-space: pre-wrap;
    text-align: left;
    @media (min-width: 768px) {
      width: 60%;
    }
  }
`;

export default GlobalStyles;
