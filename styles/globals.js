import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // Global variables
  :root {
    // colors
    --bg-white: #f5f5f5;
    --text-black: #242323;
    --red: #DD403A;

    // text sizes
    --text-sm: 0.6rem;
    --text-md: 1rem;
    --text-lg: 1.2rem;
    --text-lgx1: 1.7rem;
    --text-lgx2: 2.6rem;

    // spacing
    --space-sm: 20px;
    --space-md: 40px;
    --space-lg: 80px;

    --padding-global: 2rem 20%;
  }

  :root, html,
  body {
    padding: 0;
    margin: 0;
    font-family: Inter, -apple-system, sans-serif;
    font-size: var(--text-md);

    background: var(--bg-white);
    color: var(--text-black);

    overflow-x: hidden;
  }
  
  button {
    font-family: Inter, -apple-system, sans-serif;
    font-size: var(--text-md);
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
