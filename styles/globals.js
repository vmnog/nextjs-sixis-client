import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // Global Colors
  :root {
    --bg-white: #f5f5f5;
    --text-black: #242323;
  }

  :root, html,
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, -apple-system, sans-serif;
    font-size: 16px;

    background: var(--bg-white);
    color: var(--text-black);

    overflow-x: hidden;
  }
  
  button {
    font-family: Inter, -apple-system, sans-serif;
    font-size: 16px;
    border: none;
    background: none;
    padding: 5px 15px;
    color: #141414;
  }

  div {
    width: 100%;
    height: 100%;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

`;
